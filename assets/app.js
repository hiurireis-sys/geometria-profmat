/* =========================================================
   Geometria PROFMAT — motor interativo do site
   Autor: gerado para uso pós-aula do MA13 (Hiuri)
   ========================================================= */

(function(){
  "use strict";

  /* ---------- CONFIG: Formspree ----------
     Troque FORM_ID abaixo pelo ID do seu formulário Formspree
     (crie em https://formspree.io -> New Form -> copie o ID que
     aparece na URL https://formspree.io/f/XXXXXXX ).
     Enquanto FORM_ID for "SEU_FORM_ID", o site usa automaticamente
     o fallback por e-mail (mailto). */
  window.FORMSPREE_FORM_ID = "SEU_FORM_ID";
  window.TEACHER_EMAIL = "hiuri_reis@ufg.br";

  /* ---------- Utilidades ---------- */
  function $(sel, ctx){ return (ctx||document).querySelector(sel); }
  function $all(sel, ctx){ return Array.prototype.slice.call((ctx||document).querySelectorAll(sel)); }
  function el(tag, cls, html){
    var e = document.createElement(tag);
    if(cls) e.className = cls;
    if(html !== undefined) e.innerHTML = html;
    return e;
  }
  function fmtTime(sec){
    sec = Math.round(sec);
    var m = Math.floor(sec/60), s = sec%60;
    return (m>0? m+"min " : "") + s + "s";
  }
  function todayISO(){ return new Date().toISOString(); }

  /* ---------- Cronômetro de sessão (tempo logado na aula) ---------- */
  var SessionTimer = {
    start: Date.now(),
    aulaId: document.body.getAttribute('data-aula') || 'index',
    elapsedBeforePause: 0,
    tick: function(){
      var sec = (Date.now() - SessionTimer.start)/1000 + SessionTimer.elapsedBeforePause;
      var chip = $('#timerChip');
      if(chip) chip.textContent = '⏱ ' + fmtTime(sec) + ' nesta aula';
      SessionTimer._last = sec;
      return sec;
    },
    getSeconds: function(){ return SessionTimer._last || 0; }
  };
  setInterval(SessionTimer.tick, 1000);
  document.addEventListener('DOMContentLoaded', SessionTimer.tick);

  /* persist time spent even if aluno sai sem enviar feedback,
     acumulando em localStorage por aula */
  window.addEventListener('beforeunload', function(){
    try{
      var key = 'tempo_' + SessionTimer.aulaId;
      var prev = parseFloat(localStorage.getItem(key) || '0');
      localStorage.setItem(key, (prev + SessionTimer.tick()).toFixed(0));
    }catch(e){}
  });

  /* ---------- Progresso global (quantas aulas o aluno já abriu) ---------- */
  function markAulaVisited(aulaId){
    try{
      var visited = JSON.parse(localStorage.getItem('aulas_visitadas') || '[]');
      if(visited.indexOf(aulaId) === -1){ visited.push(aulaId); }
      localStorage.setItem('aulas_visitadas', JSON.stringify(visited));
      return visited.length;
    }catch(e){ return 0; }
  }
  window.markAulaVisited = markAulaVisited;

  function updateProgressBar(totalAulas){
    var bar = $('#progressFill');
    if(!bar) return;
    try{
      var visited = JSON.parse(localStorage.getItem('aulas_visitadas') || '[]');
      var pct = Math.min(100, Math.round(100*visited.length/totalAulas));
      bar.style.width = pct + '%';
      var label = $('#progressLabel');
      if(label) label.textContent = visited.length + '/' + totalAulas + ' aulas visitadas';
    }catch(e){}
  }
  window.updateProgressBar = updateProgressBar;

  /* ---------- Toggle de demonstrações ---------- */
  window.toggleProof = function(btn){
    var box = btn.nextElementSibling;
    box.classList.toggle('open');
    btn.textContent = box.classList.contains('open') ? 'Ocultar demonstração ▲' : 'Ver demonstração completa ▼';
  };

  /* ---------- Motor de quiz (exercícios de fixação + ENQ) ----------
     Cada exercício: {id, type:'mc'|'numeric', stem, options?, answerIndex?,
                       answer?, tolerance?, explain, meta?} */
  var QuizStats = { certas:0, erradas:0, respondidas:{} };
  window.QuizStats = QuizStats;

  function renderMC(container, q, groupName){
    var item = el('div','quiz-item');
    item.setAttribute('data-qid', q.id);
    item.appendChild(el('div','stem', q.stem));
    var opts = el('div','quiz-options');
    q.options.forEach(function(optText, idx){
      var opt = el('div','quiz-option', optText);
      opt.tabIndex = 0;
      opt.addEventListener('click', function(){
        if(item.classList.contains('answered')) return;
        item.classList.add('answered');
        var correct = idx === q.answerIndex;
        opt.classList.add('selected');
        $all('.quiz-option', item).forEach(function(o,i){
          if(i === q.answerIndex) o.classList.add('correct');
          else if(o === opt) o.classList.add('incorrect');
        });
        var fb = el('div','quiz-feedback ' + (correct?'correct':'incorrect'),
          correct ? '✓ Correto!' : '✗ Não é essa. A resposta certa está destacada.');
        item.appendChild(fb);
        if(q.explain){
          var ex = el('div','quiz-explain open', q.explain);
          item.appendChild(ex);
        }
        registerAnswer(q.id, correct, groupName);
      });
      opts.appendChild(opt);
    });
    item.appendChild(opts);
    container.appendChild(item);
  }

  function renderNumeric(container, q, groupName){
    var item = el('div','quiz-item');
    item.setAttribute('data-qid', q.id);
    item.appendChild(el('div','stem', q.stem));
    var row = el('div','numeric-row');
    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'sua resposta';
    var btn = el('button','check-btn','Conferir');
    row.appendChild(input); row.appendChild(btn);
    item.appendChild(row);
    btn.addEventListener('click', function(){
      if(item.classList.contains('answered')) return;
      var val = (input.value||'').trim().replace(',','.').toLowerCase().replace(/\s/g,'');
      var accepted = (q.answer||[]).map(function(a){return a.toString().toLowerCase().replace(/\s/g,'');});
      var correct = accepted.indexOf(val) !== -1;
      item.classList.add('answered');
      input.disabled = true; btn.disabled = true;
      var fb = el('div','quiz-feedback ' + (correct?'correct':'incorrect'),
        correct ? '✓ Correto!' : ('✗ Resposta esperada: ' + q.answer[0]));
      item.appendChild(fb);
      if(q.explain){ item.appendChild(el('div','quiz-explain open', q.explain)); }
      registerAnswer(q.id, correct, groupName);
    });
    container.appendChild(item);
  }

  function registerAnswer(qid, correct, groupName){
    if(QuizStats.respondidas[qid] !== undefined) return; // já contado
    QuizStats.respondidas[qid] = correct;
    if(correct) QuizStats.certas++; else QuizStats.erradas++;
    updateScoreBar(groupName);
    try{
      localStorage.setItem('quiz_stats_' + SessionTimer.aulaId, JSON.stringify(QuizStats));
    }catch(e){}
  }

  function updateScoreBar(){
    $all('.score-bar').forEach(function(bar){
      bar.textContent = '✓ ' + QuizStats.certas + ' certas  ·  ✗ ' + QuizStats.erradas + ' erradas  ·  ' +
        (QuizStats.certas+QuizStats.erradas) + ' respondidas';
    });
  }

  window.renderQuiz = function(containerId, questions, groupName){
    var container = document.getElementById(containerId);
    if(!container || !questions || !questions.length) return;
    questions.forEach(function(q){
      if(q.type === 'numeric') renderNumeric(container, q, groupName);
      else renderMC(container, q, groupName);
    });
  };

  /* ---------- Quadro do professor (reflexão pedagógica, salvo local) ---------- */
  window.initTeacherBoard = function(aulaId){
    var keyBase = 'quadro_' + aulaId + '_';
    var fields = ['ensino','dificuldades','visao'];
    fields.forEach(function(f){
      var ta = document.getElementById('board_' + f);
      if(!ta) return;
      var saved = localStorage.getItem(keyBase + f);
      if(saved) ta.value = saved;
    });
    var btn = document.getElementById('board_save');
    if(btn){
      btn.addEventListener('click', function(){
        fields.forEach(function(f){
          var ta = document.getElementById('board_' + f);
          if(ta) localStorage.setItem(keyBase + f, ta.value);
        });
        var flag = document.getElementById('board_saved_flag');
        if(flag){
          flag.classList.add('show');
          setTimeout(function(){ flag.classList.remove('show'); }, 2500);
        }
      });
    }
  };

  /* ---------- Envio de feedback (pesquisa DesignMat + uso do app) ---------- */
  function collectSurvey(prefix){
    var data = {};
    $all('[name^="' + prefix + '"]').forEach(function(input){
      if(input.type === 'radio'){
        if(input.checked) data[input.name] = input.value;
      } else {
        data[input.name] = input.value;
      }
    });
    return data;
  }

  function buildFeedbackPayload(aulaId, aulaTitulo){
    var tempoAtual = SessionTimer.getSeconds();
    var tempoAcumulado = parseFloat(localStorage.getItem('tempo_' + aulaId) || '0') + tempoAtual;
    var quadro = {
      ensino: (document.getElementById('board_ensino')||{}).value || '',
      dificuldades: (document.getElementById('board_dificuldades')||{}).value || '',
      visao: (document.getElementById('board_visao')||{}).value || ''
    };
    return Object.assign({
      _subject: 'Feedback Geometria PROFMAT — ' + aulaTitulo,
      aula_id: aulaId,
      aula_titulo: aulaTitulo,
      data_envio: todayISO(),
      quiz_certas: QuizStats.certas,
      quiz_erradas: QuizStats.erradas,
      quiz_total_respondido: QuizStats.certas + QuizStats.erradas,
      tempo_logado_segundos: Math.round(tempoAcumulado),
      tempo_logado_legivel: fmtTime(tempoAcumulado),
      quadro_como_ensina: quadro.ensino,
      quadro_dificuldades: quadro.dificuldades,
      quadro_visao: quadro.visao
    }, collectSurvey('pesquisa_'));
  }

  function mailtoFallback(payload){
    var body = Object.keys(payload).map(function(k){
      return k + ': ' + (payload[k] || '(vazio)');
    }).join('\n');
    var subject = encodeURIComponent(payload._subject);
    var href = 'mailto:' + window.TEACHER_EMAIL + '?subject=' + subject + '&body=' + encodeURIComponent(body);
    return href;
  }

  window.initFeedbackForm = function(aulaId, aulaTitulo){
    var btn = document.getElementById('sendFeedbackBtn');
    var status = document.getElementById('feedbackStatus');
    if(!btn) return;
    btn.addEventListener('click', function(){
      var payload = buildFeedbackPayload(aulaId, aulaTitulo);
      var usesFormspree = window.FORMSPREE_FORM_ID && window.FORMSPREE_FORM_ID !== 'SEU_FORM_ID';

      function showStatus(ok, msg){
        if(!status) return;
        status.textContent = msg;
        status.className = 'feedback-status show ' + (ok?'ok':'err');
      }

      if(usesFormspree){
        btn.disabled = true; btn.textContent = 'Enviando...';
        fetch('https://formspree.io/f/' + window.FORMSPREE_FORM_ID, {
          method: 'POST',
          headers: {'Accept':'application/json','Content-Type':'application/json'},
          body: JSON.stringify(payload)
        }).then(function(r){
          btn.disabled = false; btn.textContent = 'Enviar feedback da aula';
          if(r.ok){
            showStatus(true, '✓ Feedback enviado com sucesso. Obrigado!');
          } else {
            showStatus(false, 'Não foi possível enviar automaticamente. Abrindo seu e-mail como alternativa...');
            window.location.href = mailtoFallback(payload);
          }
        }).catch(function(){
          btn.disabled = false; btn.textContent = 'Enviar feedback da aula';
          showStatus(false, 'Sem conexão com o servidor de formulário. Abrindo seu e-mail como alternativa...');
          window.location.href = mailtoFallback(payload);
        });
      } else {
        showStatus(true, 'Abrindo seu aplicativo de e-mail com o feedback preenchido...');
        window.location.href = mailtoFallback(payload);
      }
    });
  };

  /* ---------- ENQ mini-simulado cumulativo ---------- */
  window.renderEnqSimulado = function(containerId, aulaOrder, enqBank){
    var container = document.getElementById(containerId);
    if(!container) return;
    var pool = enqBank.filter(function(q){ return q.aulaOrder <= aulaOrder; });
    if(!pool.length){
      container.appendChild(el('p', null, 'Ainda não há questões de ENQ acumuladas até esta aula.'));
      return;
    }
    // ordena: questões da própria semana primeiro, depois semanas anteriores
    pool.sort(function(a,b){ return b.aulaOrder - a.aulaOrder; });
    pool.forEach(function(q){
      var wrap = el('div','quiz-item enq-item');
      wrap.setAttribute('data-qid', q.id);
      var badge = q.aulaOrder === aulaOrder ? 'Desta semana' : 'Revisão · Aula ' + q.aulaOrder;
      wrap.appendChild(el('div','stem', '<span class="pill">' + q.exame + ' · Q' + q.questao + ' · ' + badge + '</span><br><br>' + q.enunciado));
      var opts = el('div','quiz-options');
      q.options.forEach(function(optText, idx){
        var opt = el('div','quiz-option', optText);
        opt.addEventListener('click', function(){
          if(wrap.classList.contains('answered')) return;
          wrap.classList.add('answered');
          var correct = idx === q.answerIndex;
          $all('.quiz-option', wrap).forEach(function(o,i){
            if(i === q.answerIndex) o.classList.add('correct');
            else if(o===opt) o.classList.add('incorrect');
          });
          var fb = el('div','quiz-feedback ' + (correct?'correct':'incorrect'),
            correct ? '✓ Resposta correta!' : '✗ Não é essa.');
          wrap.appendChild(fb);
          var toggleBtn = el('button','proof-toggle','Ver resolução completa ▼');
          var proofBox = el('div','proof', '<p><strong>Resposta:</strong> ' + q.resposta_final + '</p><p><strong>Caminho da solução:</strong> ' + q.resumo_solucao + '</p>');
          toggleBtn.addEventListener('click', function(){
            proofBox.classList.toggle('open');
            toggleBtn.textContent = proofBox.classList.contains('open') ? 'Ocultar resolução ▲' : 'Ver resolução completa ▼';
          });
          wrap.appendChild(toggleBtn);
          wrap.appendChild(proofBox);
          registerAnswer(q.id, correct, 'enq');
        });
        opts.appendChild(opt);
      });
      wrap.appendChild(opts);
      container.appendChild(wrap);
    });
  };

  window.$ = $; window.$all = $all;
})();
