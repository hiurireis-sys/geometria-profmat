/* =========================================================
   Widgets interativos — um por aula, para tornar o estudo
   dinâmico. Cada widget é uma função que recebe o container
   (elemento DOM) e monta sua própria UI + lógica.
   ========================================================= */
(function(){
  "use strict";
  function el(tag, cls, html){ var e=document.createElement(tag); if(cls) e.className=cls; if(html!==undefined) e.innerHTML=html; return e; }
  function fmt(n, d){ if (!isFinite(n)) return "—"; d = d===undefined?3:d; return (Math.round(n*Math.pow(10,d))/Math.pow(10,d)).toString().replace('.',','); }
  function deg2rad(d){ return d*Math.PI/180; }
  function rad2deg(r){ return r*180/Math.PI; }
  const SVG_NS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs){
    var e = document.createElementNS(SVG_NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  var WIDGETS = {};

  /* ---------- 1. Ângulos opostos pelo vértice + bissetriz ---------- */
  WIDGETS.verticalAngles = function(box){
    var wrap = el('div');
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label for="vaSlider">Ângulo α (10°–170°)</label>' +
      '<input type="range" id="vaSlider" min="10" max="170" value="50"></div>' +
      '<div class="widget-field"><label><input type="checkbox" id="vaBisector"> mostrar bissetriz</label></div>'
    ));
    var svgWrap = el('div','widget-svg-wrap');
    var svg = svgEl('svg', {viewBox:'0 0 360 240', width:360, height:240});
    svgWrap.appendChild(svg);
    wrap.appendChild(svgWrap);
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);

    var cx=180, cy=120, L=110;
    function draw(alphaDeg, showBis){
      svg.innerHTML = '';
      var a = deg2rad(alphaDeg);
      // linha 1 ao longo do eixo horizontal (0° e 180°)
      var p0 = [cx-L, cy], p180=[cx+L, cy];
      // linha 2 fazendo ângulo alpha com a linha 1
      var pA = [cx+L*Math.cos(a), cy-L*Math.sin(a)];
      var pB = [cx-L*Math.cos(a), cy+L*Math.sin(a)];
      svg.appendChild(svgEl('line', {x1:p0[0],y1:p0[1],x2:p180[0],y2:p180[1],stroke:'#7c3aed','stroke-width':2}));
      svg.appendChild(svgEl('line', {x1:pA[0],y1:pA[1],x2:pB[0],y2:pB[1],stroke:'#0d9488','stroke-width':2}));
      svg.appendChild(svgEl('circle', {cx:cx,cy:cy,r:4,fill:'#1f2937'}));
      // labels dos 4 ângulos
      function labelAt(angDeg, text, color){
        var r = deg2rad(angDeg);
        var lx = cx + 45*Math.cos(r), ly = cy - 45*Math.sin(r);
        var t = svgEl('text', {x:lx,y:ly,'font-size':13,'font-weight':700,fill:color,'text-anchor':'middle'});
        t.textContent = text;
        svg.appendChild(t);
      }
      labelAt(alphaDeg/2, fmt(alphaDeg,1)+'°', '#5b21b6');
      labelAt(180-alphaDeg/2, fmt(180-alphaDeg,1)+'°', '#0b6b62');
      labelAt(180+alphaDeg/2, fmt(alphaDeg,1)+'°', '#5b21b6');
      labelAt(360-alphaDeg/2, fmt(180-alphaDeg,1)+'°', '#0b6b62');
      if(showBis){
        var half = a/2;
        var pBis = [cx+L*0.7*Math.cos(half), cy-L*0.7*Math.sin(half)];
        svg.appendChild(svgEl('line', {x1:cx,y1:cy,x2:pBis[0],y2:pBis[1],stroke:'#d97706','stroke-width':2,'stroke-dasharray':'5,4'}));
      }
      result.innerHTML = 'Os dois ângulos roxos (<strong>α</strong>) são opostos pelo vértice: <strong>'+fmt(alphaDeg,1)+'°</strong> cada, sempre iguais. ' +
        'Os dois ângulos verdes são os adjacentes, suplementares a α: <strong>'+fmt(180-alphaDeg,1)+'°</strong> cada.' +
        (showBis ? ' A bissetriz (tracejada) divide α em dois ângulos de <strong>'+fmt(alphaDeg/2,1)+'°</strong>.' : '');
    }
    var slider = wrap.querySelector('#vaSlider');
    var chk = wrap.querySelector('#vaBisector');
    function update(){ draw(parseFloat(slider.value), chk.checked); }
    slider.addEventListener('input', update);
    chk.addEventListener('change', update);
    update();
  };

  /* ---------- 2. Isósceles / congruência ---------- */
  WIDGETS.isoscelesExplorer = function(box){
    var wrap = el('div');
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label for="isoApex">Ângulo do vértice (do topo)</label>' +
      '<input type="range" id="isoApex" min="10" max="160" value="40"></div>'
    ));
    var svgWrap = el('div','widget-svg-wrap');
    var svg = svgEl('svg', {viewBox:'0 0 300 220', width:300, height:220});
    svgWrap.appendChild(svg);
    wrap.appendChild(svgWrap);
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);

    function draw(apex){
      svg.innerHTML='';
      var baseAngle = (180-apex)/2;
      var apexPt=[150,20];
      var L = 140; // lados congruentes AB=AC (comprimento fixo na tela)
      var halfRad = deg2rad(apex/2);
      var half = L*Math.sin(halfRad);   // metade da base varia com o ângulo
      var height = L*Math.cos(halfRad); // altura varia com o ângulo
      var baseY = apexPt[1] + height;
      var Bx = 150 - half, Cx = 150+half;
      svg.appendChild(svgEl('polygon', {points: apexPt.join(',')+' '+Bx+','+baseY+' '+Cx+','+baseY, fill:'#ede9fe', stroke:'#7c3aed','stroke-width':2}));
      svg.appendChild(svgEl('line', {x1:apexPt[0],y1:apexPt[1],x2:(Bx+Cx)/2,y2:baseY,stroke:'#0d9488','stroke-width':1.5,'stroke-dasharray':'4,3'}));
      function txt(x,y,s,color){ var t=svgEl('text',{x:x,y:y,'font-size':13,'font-weight':700,fill:color||'#1f2937','text-anchor':'middle'}); t.textContent=s; svg.appendChild(t); }
      var apexLabelY = Math.min(apexPt[1]+28, baseY-8);
      txt(150,12,'A','#5b21b6');
      txt(Bx-10,baseY+15,'B','#5b21b6');
      txt(Cx+10,baseY+15,'C','#5b21b6');
      txt(150,apexLabelY,fmt(apex,1)+'°','#5b21b6');
      txt(Bx+22,baseY-10,fmt(baseAngle,1)+'°','#0b6b62');
      txt(Cx-22,baseY-10,fmt(baseAngle,1)+'°','#0b6b62');
      result.innerHTML = 'Triângulo isósceles com \\(AB=AC\\): se o ângulo do vértice mede <strong>'+fmt(apex,1)+'°</strong>, ' +
        'cada ângulo da base mede <strong>('+'180°−'+fmt(apex,1)+'°)/2 = '+fmt(baseAngle,1)+'°</strong> (Teorema 2.1). ' +
        'A mediana \\(AM\\) (tracejada) é também altura e bissetriz.';
      if(window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([result]);
    }
    var slider = wrap.querySelector('#isoApex');
    slider.addEventListener('input', function(){ draw(parseFloat(slider.value)); });
    draw(40);
  };

  /* ---------- 3. Desigualdade triangular ---------- */
  WIDGETS.triangleInequality = function(box){
    var wrap = el('div');
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label>Lado a</label><input type="number" id="tiA" value="7"></div>' +
      '<div class="widget-field"><label>Lado b</label><input type="number" id="tiB" value="8"></div>' +
      '<div class="widget-field"><label>Lado c</label><input type="number" id="tiC" value="12"></div>' +
      '<button class="widget-btn" id="tiCheck">Verificar</button>'
    ));
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);
    wrap.querySelector('#tiCheck').addEventListener('click', function(){
      var a=parseFloat(wrap.querySelector('#tiA').value), b=parseFloat(wrap.querySelector('#tiB').value), c=parseFloat(wrap.querySelector('#tiC').value);
      if([a,b,c].some(function(v){return isNaN(v)||v<=0;})){
        result.className='widget-result error'; result.textContent='Informe três medidas positivas.'; return;
      }
      var sorted = [a,b,c].sort(function(x,y){return x-y;});
      var valid = sorted[2] < sorted[0]+sorted[1];
      if(!valid){
        result.className='widget-result error';
        result.innerHTML = '✗ NÃO existe triângulo: o maior lado ('+fmt(sorted[2])+') não é menor que a soma dos outros dois ('+fmt(sorted[0]+sorted[1])+').';
        return;
      }
      var lados = (a===b && b===c) ? 'equilátero' : (a===b||b===c||a===c) ? 'isósceles' : 'escaleno';
      // classificação por ângulo via lei dos cossenos com o maior lado
      var maior = sorted[2], s1=sorted[0], s2=sorted[1];
      var cosC = (s1*s1+s2*s2-maior*maior)/(2*s1*s2);
      var tipoAngulo = Math.abs(cosC) < 1e-9 ? 'retângulo' : (cosC>0 ? 'acutângulo' : 'obtusângulo');
      result.className='widget-result';
      result.innerHTML = '✓ Existe triângulo! Classificação: <strong>'+lados+'</strong> (lados) e <strong>'+tipoAngulo+'</strong> (maior ângulo, oposto ao lado '+fmt(maior)+').';
    });
  };

  /* ---------- 4. Transversal e paralelas ---------- */
  WIDGETS.transversalExplorer = function(box){
    var wrap = el('div');
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label for="teSlider">Inclinação da transversal</label>' +
      '<input type="range" id="teSlider" min="20" max="160" value="60"></div>'
    ));
    var svgWrap = el('div','widget-svg-wrap');
    var svg = svgEl('svg', {viewBox:'0 0 360 260', width:360, height:260});
    svgWrap.appendChild(svg);
    wrap.appendChild(svgWrap);
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);

    function draw(angDeg){
      svg.innerHTML='';
      var y1=80, y2=180;
      svg.appendChild(svgEl('line', {x1:20,y1:y1,x2:340,y2:y1,stroke:'#7c3aed','stroke-width':2}));
      svg.appendChild(svgEl('line', {x1:20,y1:y2,x2:340,y2:y2,stroke:'#7c3aed','stroke-width':2}));
      var a = deg2rad(angDeg);
      var cx = 180;
      var dx = 100/Math.tan(a===0?0.001:a);
      var tx1 = cx - dx, tx2 = cx+dx;
      // transversal passando pelos pontos (cx,y1) e ajustando inclinação
      var topX = cx - (y1-30)/Math.tan(a);
      var botX = cx + (y2+30-y2)/Math.tan(a) + (y2 - y1)/Math.tan(a);
      var P1x = cx - (0-y1)/Math.tan(a); // não usado diretamente
      // Vamos parametrizar simples: transversal com ângulo 'a' em relação à horizontal, passando por (cx,y1) e (cx2,y2)
      var length = (y2-y1)/Math.sin(a);
      var topPt = [cx - length/2*Math.cos(a), y1 - length/2*Math.sin(a) + (y2-y1)/2 ];
      // Abordagem mais simples e robusta: reta t: x = cx + (y-((y1+y2)/2))/Math.tan(a)
      var midY = (y1+y2)/2;
      function xAtY(y){ return cx + (y - midY)/Math.tan(a); }
      var topY = 20, botY = 240;
      svg.appendChild(svgEl('line', {x1:xAtY(topY),y1:topY,x2:xAtY(botY),y2:botY,stroke:'#0d9488','stroke-width':2}));
      var P1 = [xAtY(y1), y1], P2 = [xAtY(y2), y2];
      svg.appendChild(svgEl('circle',{cx:P1[0],cy:P1[1],r:3,fill:'#1f2937'}));
      svg.appendChild(svgEl('circle',{cx:P2[0],cy:P2[1],r:3,fill:'#1f2937'}));
      function txt(x,y,s,color){ var t=svgEl('text',{x:x,y:y,'font-size':12,'font-weight':700,fill:color,'text-anchor':'middle'}); t.textContent=s; svg.appendChild(t); }
      var alt = 180-angDeg;
      // ângulos correspondentes/alternos: no ponto P1 (reta de cima) e P2 (reta de baixo)
      txt(P1[0]-28,P1[1]-10, fmt(angDeg,0)+'°', '#5b21b6');
      txt(P1[0]+28,P1[1]-10, fmt(alt,0)+'°', '#0b6b62');
      txt(P1[0]-28,P1[1]+18, fmt(alt,0)+'°', '#0b6b62');
      txt(P1[0]+28,P1[1]+18, fmt(angDeg,0)+'°', '#5b21b6');
      txt(P2[0]-28,P2[1]-10, fmt(angDeg,0)+'°', '#5b21b6');
      txt(P2[0]+28,P2[1]-10, fmt(alt,0)+'°', '#0b6b62');
      txt(P2[0]-28,P2[1]+18, fmt(alt,0)+'°', '#0b6b62');
      txt(P2[0]+28,P2[1]+18, fmt(angDeg,0)+'°', '#5b21b6');
      result.innerHTML = 'Como as retas são paralelas, todos os ângulos roxos são congruentes entre si (<strong>'+fmt(angDeg,0)+'°</strong>: correspondentes e alternos), e todos os verdes também (<strong>'+fmt(alt,0)+'°</strong>). Mova o controle e note que essa relação nunca muda — é o Teorema 4.1.';
    }
    var slider = wrap.querySelector('#teSlider');
    slider.addEventListener('input', function(){ draw(parseFloat(slider.value)); });
    draw(60);
  };

  /* ---------- 5. Semelhança / Tales ---------- */
  WIDGETS.thalesSimilarity = function(box){
    var wrap = el('div');
    wrap.appendChild(el('h4', null, 'Teorema de Tales: segmentos em transversais paralelas'));
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label>AB</label><input type="number" id="thAB" value="4"></div>' +
      '<div class="widget-field"><label>BC</label><input type="number" id="thBC" value="6"></div>' +
      '<div class="widget-field"><label>A\'B\'</label><input type="number" id="thApBp" value="10"></div>' +
      '<button class="widget-btn" id="thCalc">Calcular B\'C\'</button>'
    ));
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);
    wrap.querySelector('#thCalc').addEventListener('click', function(){
      var AB=parseFloat(wrap.querySelector('#thAB').value), BC=parseFloat(wrap.querySelector('#thBC').value), ApBp=parseFloat(wrap.querySelector('#thApBp').value);
      if([AB,BC,ApBp].some(function(v){return isNaN(v)||v<=0;})){ result.className='widget-result error'; result.textContent='Preencha os três campos com números positivos.'; return; }
      var BpCp = ApBp*BC/AB;
      result.className='widget-result';
      result.innerHTML = 'Por Tales: AB/BC = A\'B\'/B\'C\', logo B\'C\' = A\'B\'·BC/AB = <strong>'+fmt(BpCp)+'</strong>.';
    });

    wrap.appendChild(el('h4', null, 'Razão de semelhança: perímetro e área'));
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label>Razão k (menor/maior)</label><input type="range" id="thK" min="0.1" max="1" step="0.05" value="0.5"></div>' +
      '<div class="widget-field"><label>Perímetro do maior</label><input type="number" id="thPer" value="30"></div>' +
      '<div class="widget-field"><label>Área do maior</label><input type="number" id="thArea" value="50"></div>'
    ));
    var result2 = el('div','widget-result');
    wrap.appendChild(result2);
    function upd2(){
      var k = parseFloat(wrap.querySelector('#thK').value);
      var per = parseFloat(wrap.querySelector('#thPer').value)||0;
      var area = parseFloat(wrap.querySelector('#thArea').value)||0;
      result2.innerHTML = 'Com razão k=<strong>'+fmt(k,2)+'</strong>: perímetro do menor = k·P = <strong>'+fmt(k*per)+'</strong>; área do menor = k²·S = <strong>'+fmt(k*k*area)+'</strong>.';
    }
    ['thK','thPer','thArea'].forEach(function(id){ wrap.querySelector('#'+id).addEventListener('input', upd2); });
    upd2();
  };

  /* ---------- 6. Relações métricas no triângulo retângulo ---------- */
  WIDGETS.rightTriangleMetrics = function(box){
    var wrap = el('div');
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label>Cateto b</label><input type="number" id="rtB" value="6"></div>' +
      '<div class="widget-field"><label>Cateto c</label><input type="number" id="rtC" value="8"></div>' +
      '<button class="widget-btn" id="rtCalc">Calcular tudo</button>'
    ));
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);
    wrap.querySelector('#rtCalc').addEventListener('click', function(){
      var b=parseFloat(wrap.querySelector('#rtB').value), c=parseFloat(wrap.querySelector('#rtC').value);
      if(isNaN(b)||isNaN(c)||b<=0||c<=0){ result.className='widget-result error'; result.textContent='Informe os dois catetos (positivos).'; return; }
      var a = Math.sqrt(b*b+c*c);
      var h = (b*c)/a;
      var m = (c*c)/a; // projeção de c
      var n = (b*b)/a; // projeção de b
      result.className='widget-result';
      result.innerHTML = 'Hipotenusa a = √(b²+c²) = <strong>'+fmt(a)+'</strong><br>' +
        'Altura h = bc/a = <strong>'+fmt(h)+'</strong><br>' +
        'Projeção m (de c) = c²/a = <strong>'+fmt(m)+'</strong><br>' +
        'Projeção n (de b) = b²/a = <strong>'+fmt(n)+'</strong><br>' +
        '<span class="widget-note">Confira: h²=mn → '+fmt(h*h)+' ≈ '+fmt(m*n)+'; m+n = '+fmt(m+n)+' ≈ a.</span>';
    });
  };

  /* ---------- 7. Ângulo inscrito ---------- */
  WIDGETS.inscribedAngle = function(box){
    var wrap = el('div');
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label for="iaSlider">Posição do ponto inscrito (arco)</label>' +
      '<input type="range" id="iaSlider" min="5" max="175" value="90"></div>'
    ));
    var svgWrap = el('div','widget-svg-wrap');
    var svg = svgEl('svg', {viewBox:'0 0 320 320', width:320, height:320});
    svgWrap.appendChild(svg);
    wrap.appendChild(svgWrap);
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);

    var cx=160, cy=160, r=120;
    function pt(angDeg){ var a=deg2rad(angDeg); return [cx+r*Math.cos(a), cy - r*Math.sin(a)]; }
    function draw(posDeg){
      svg.innerHTML='';
      svg.appendChild(svgEl('circle',{cx:cx,cy:cy,r:r,fill:'none',stroke:'#e5e0d8','stroke-width':2}));
      var B = pt(200), C = pt(340); // pontos fixos do arco BC (arco "de baixo")
      var A = pt(posDeg); // ponto móvel (deve ficar no arco maior, de cima)
      svg.appendChild(svgEl('line',{x1:cx,y1:cy,x2:B[0],y2:B[1],stroke:'#0d9488','stroke-width':1.5,'stroke-dasharray':'3,3'}));
      svg.appendChild(svgEl('line',{x1:cx,y1:cy,x2:C[0],y2:C[1],stroke:'#0d9488','stroke-width':1.5,'stroke-dasharray':'3,3'}));
      svg.appendChild(svgEl('line',{x1:A[0],y1:A[1],x2:B[0],y2:B[1],stroke:'#7c3aed','stroke-width':2}));
      svg.appendChild(svgEl('line',{x1:A[0],y1:A[1],x2:C[0],y2:C[1],stroke:'#7c3aed','stroke-width':2}));
      svg.appendChild(svgEl('circle',{cx:cx,cy:cy,r:3,fill:'#0b6b62'}));
      function txt(p,s,color,dx,dy){ var t=svgEl('text',{x:p[0]+(dx||0),y:p[1]+(dy||0),'font-size':13,'font-weight':700,fill:color,'text-anchor':'middle'}); t.textContent=s; svg.appendChild(t); }
      txt(A,'A','#5b21b6',0,-10);
      txt(B,'B','#0b6b62',-14,10);
      txt(C,'C','#0b6b62',14,10);
      // ângulo central BOC: arco de 200 a 340 = 140 (arco menor entre eles nao contendo A se A estiver na parte de cima)
      var central = 140; // fixo, pois B e C fixos
      var inscribed = central/2;
      txt([cx,cy-20],fmt(central,0)+'° (central)','#0b6b62');
      result.innerHTML = 'Ângulo central \\(\\widehat{BOC}\\) = <strong>'+fmt(central,0)+'°</strong> (fixo, pois B e C não mudam). ' +
        'Ângulo inscrito \\(\\widehat{BAC}\\) = <strong>'+fmt(inscribed,0)+'°</strong> — sempre a metade do central, não importa onde A esteja no arco maior. Mova o controle para conferir.';
      if(window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([result]);
    }
    var slider = wrap.querySelector('#iaSlider');
    slider.addEventListener('input', function(){ draw(parseFloat(slider.value)); });
    draw(90);
  };

  /* ---------- 8. Calculadora de áreas ---------- */
  WIDGETS.areaCalculator = function(box){
    var wrap = el('div');
    var shapes = {
      quadrado: {label:'Quadrado (lado)', fields:['lado'], calc:function(v){ return v.lado*v.lado; }, formula:'S=lado²'},
      retangulo: {label:'Retângulo (base, altura)', fields:['base','altura'], calc:function(v){ return v.base*v.altura; }, formula:'S=base×altura'},
      triangulo_ba: {label:'Triângulo (base, altura)', fields:['base','altura'], calc:function(v){ return v.base*v.altura/2; }, formula:'S=base×altura/2'},
      triangulo_lla: {label:'Triângulo (2 lados + ângulo entre eles, graus)', fields:['ladoA','ladoB','anguloC'], calc:function(v){ return v.ladoA*v.ladoB*Math.sin(deg2rad(v.anguloC))/2; }, formula:'S=(a·b·senC)/2'},
      losango: {label:'Losango (diagonais D, d)', fields:['D','d'], calc:function(v){ return v.D*v.d/2; }, formula:'S=D·d/2'},
      trapezio: {label:'Trapézio (base maior, base menor, altura)', fields:['baseMaior','baseMenor','altura'], calc:function(v){ return (v.baseMaior+v.baseMenor)*v.altura/2; }, formula:'S=(B+b)×h/2'},
      circulo: {label:'Círculo (raio)', fields:['raio'], calc:function(v){ return Math.PI*v.raio*v.raio; }, formula:'S=π·r²'}
    };
    var select = el('select');
    select.id = 'acShape';
    Object.keys(shapes).forEach(function(k){ var o=document.createElement('option'); o.value=k; o.textContent=shapes[k].label; select.appendChild(o); });
    var selectField = el('div','widget-field','<label>Figura</label>');
    selectField.appendChild(select);
    var controls = el('div','widget-controls');
    controls.appendChild(selectField);
    var fieldsHolder = el('div','widget-controls');
    var result = el('div','widget-result');
    wrap.appendChild(controls);
    wrap.appendChild(fieldsHolder);
    wrap.appendChild(result);
    box.appendChild(wrap);

    function renderFields(){
      fieldsHolder.innerHTML='';
      var shape = shapes[select.value];
      shape.fields.forEach(function(f){
        var field = el('div','widget-field','<label>'+f+'</label>');
        var inp = document.createElement('input'); inp.type='number'; inp.value='5'; inp.dataset.field=f;
        field.appendChild(inp);
        fieldsHolder.appendChild(field);
        inp.addEventListener('input', compute);
      });
      var btn = el('button','widget-btn','Calcular');
      btn.addEventListener('click', compute);
      fieldsHolder.appendChild(btn);
      compute();
    }
    function compute(){
      var shape = shapes[select.value];
      var vals = {};
      var ok = true;
      fieldsHolder.querySelectorAll('input').forEach(function(inp){
        var v = parseFloat(inp.value);
        if(isNaN(v) || v<0) ok=false;
        vals[inp.dataset.field]=v;
      });
      if(!ok){ result.className='widget-result error'; result.textContent='Preencha todos os campos com números não negativos.'; return; }
      var area = shape.calc(vals);
      result.className='widget-result';
      result.innerHTML = 'Fórmula: <strong>'+shape.formula+'</strong> → Área = <strong>'+fmt(area)+'</strong> (unidades²)';
    }
    select.addEventListener('change', renderFields);
    renderFields();
  };

  /* ---------- 9. Polígono regular + Lei dos Senos/Cossenos ---------- */
  WIDGETS.regularPolygonExplorer = function(box){
    var wrap = el('div');
    wrap.appendChild(el('h4', null, 'Polígono regular inscrito'));
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label for="rpN">Nº de lados (n)</label><input type="range" id="rpN" min="3" max="12" value="6"></div>' +
      '<div class="widget-field"><label for="rpR">Raio (r)</label><input type="number" id="rpR" value="10"></div>'
    ));
    var svgWrap = el('div','widget-svg-wrap');
    var svg = svgEl('svg', {viewBox:'0 0 260 260', width:260, height:260});
    svgWrap.appendChild(svg);
    wrap.appendChild(svgWrap);
    var result = el('div','widget-result');
    wrap.appendChild(result);

    function drawPoly(){
      var n = parseInt(wrap.querySelector('#rpN').value);
      var r = parseFloat(wrap.querySelector('#rpR').value)||10;
      var cx=130,cy=130,R=100;
      svg.innerHTML='';
      var pts=[];
      for(var i=0;i<n;i++){ var a = deg2rad(90+360*i/n); pts.push([cx+R*Math.cos(a), cy - R*Math.sin(a)]); }
      svg.appendChild(svgEl('polygon',{points:pts.map(function(p){return p.join(',');}).join(' '), fill:'#ede9fe', stroke:'#7c3aed','stroke-width':2}));
      svg.appendChild(svgEl('circle',{cx:cx,cy:cy,r:R,fill:'none',stroke:'#e5e0d8','stroke-width':1.5,'stroke-dasharray':'3,3'}));
      var central = 360/n;
      var interno = (n-2)*180/n;
      var lado = 2*r*Math.sin(Math.PI/n);
      var apotema = r*Math.cos(Math.PI/n);
      var area = n*lado*apotema/2;
      var diagonais = n*(n-3)/2;
      result.innerHTML = 'n=<strong>'+n+'</strong>: ângulo central = <strong>'+fmt(central,1)+'°</strong>, ângulo interno = <strong>'+fmt(interno,1)+'°</strong>, diagonais = <strong>'+diagonais+'</strong>.<br>' +
        'Com raio r='+fmt(r)+': lado ℓ = 2r·sen(180°/n) = <strong>'+fmt(lado)+'</strong>; apótema = r·cos(180°/n) = <strong>'+fmt(apotema)+'</strong>; área = <strong>'+fmt(area)+'</strong>.';
    }
    wrap.querySelector ? null : null;
    box.appendChild(wrap);
    wrap.querySelector('#rpN').addEventListener('input', drawPoly);
    wrap.querySelector('#rpR').addEventListener('input', drawPoly);
    drawPoly();

    var wrap2 = el('div');
    wrap2.appendChild(el('h4', null, 'Lei dos Cossenos: calcular o terceiro lado'));
    wrap2.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label>Lado a</label><input type="number" id="lcA" value="7"></div>' +
      '<div class="widget-field"><label>Lado b</label><input type="number" id="lcB" value="9"></div>' +
      '<div class="widget-field"><label>Ângulo C (graus, entre a e b)</label><input type="number" id="lcAng" value="60"></div>' +
      '<button class="widget-btn" id="lcCalc">Calcular lado c</button>'
    ));
    var result2 = el('div','widget-result');
    wrap2.appendChild(result2);
    box.appendChild(wrap2);
    wrap2.querySelector('#lcCalc').addEventListener('click', function(){
      var a=parseFloat(wrap2.querySelector('#lcA').value), b=parseFloat(wrap2.querySelector('#lcB').value), C=parseFloat(wrap2.querySelector('#lcAng').value);
      if([a,b,C].some(isNaN)){ result2.className='widget-result error'; result2.textContent='Preencha os três campos.'; return; }
      var c = Math.sqrt(a*a+b*b-2*a*b*Math.cos(deg2rad(C)));
      result2.className='widget-result';
      result2.innerHTML = 'c² = a²+b²−2ab·cosC = <strong>'+fmt(c*c)+'</strong> → c = <strong>'+fmt(c)+'</strong>';
    });
  };

  /* ---------- 10. Pontos notáveis (quiz) ---------- */
  WIDGETS.notablePointsQuiz = function(box){
    var qs = [
      {stem:"Qual ponto é sempre equidistante dos TRÊS VÉRTICES do triângulo?", options:["Circuncentro","Incentro","Baricentro","Ortocentro"], answerIndex:0, explain:"O circuncentro é interseção das mediatrizes, LG dos pontos equidistantes de dois vértices."},
      {stem:"Qual ponto é sempre equidistante dos TRÊS LADOS do triângulo?", options:["Incentro","Circuncentro","Ortocentro","Baricentro"], answerIndex:0, explain:"O incentro é interseção das bissetrizes, LG dos pontos equidistantes de dois lados de um ângulo."},
      {stem:"Qual ponto divide cada mediana na razão 2:1 a partir do vértice?", options:["Baricentro","Ortocentro","Incentro","Circuncentro"], answerIndex:0, explain:"Propriedade característica do baricentro."},
      {stem:"O Teorema de Ceva é usado diretamente para provar a concorrência de quais dois conjuntos de cevianas nesta aula?", options:["Medianas e bissetrizes internas","Alturas e mediatrizes","Apenas as alturas","Nenhuma; Ceva não se aplica a triângulos"], answerIndex:0, explain:"Vimos essa aplicação dupla do Teorema de Ceva."}
    ];
    var container = el('div');
    box.appendChild(container);
    if(window.renderQuiz){ window.renderQuiz.__local = window.renderQuiz; }
    // renderiza usando o mesmo motor de quiz do app.js, num container isolado
    var innerId = 'npq-' + Math.random().toString(36).slice(2);
    container.id = innerId;
    if(window.renderQuiz){
      window.renderQuiz(innerId, qs, 'notable');
    }
  };

  /* ---------- 11. Euler + prisma ---------- */
  WIDGETS.eulerChecker = function(box){
    var wrap = el('div');
    wrap.appendChild(el('h4', null, 'Verificador da Relação de Euler'));
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label>Vértices (V)</label><input type="number" id="euV" value="8"></div>' +
      '<div class="widget-field"><label>Arestas (A)</label><input type="number" id="euA" value="12"></div>' +
      '<div class="widget-field"><label>Faces (F)</label><input type="number" id="euF" value="6"></div>' +
      '<button class="widget-btn" id="euCalc">Verificar</button>'
    ));
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);
    wrap.querySelector('#euCalc').addEventListener('click', function(){
      var V=parseFloat(wrap.querySelector('#euV').value), A=parseFloat(wrap.querySelector('#euA').value), F=parseFloat(wrap.querySelector('#euF').value);
      if([V,A,F].some(isNaN)){ result.className='widget-result error'; result.textContent='Preencha V, A e F.'; return; }
      var val = V-A+F;
      result.className = 'widget-result' + (val===2?'':' error');
      result.innerHTML = 'V−A+F = '+fmt(V,0)+'−'+fmt(A,0)+'+'+fmt(F,0)+' = <strong>'+fmt(val,0)+'</strong>' + (val===2 ? ' ✓ é um poliedro convexo válido!' : ' ✗ não satisfaz Euler — não pode ser um poliedro convexo.');
    });

    var wrap2 = el('div');
    wrap2.appendChild(el('h4', null, 'Volume e área lateral do prisma reto'));
    wrap2.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label>Área da base</label><input type="number" id="prS" value="20"></div>' +
      '<div class="widget-field"><label>Perímetro da base</label><input type="number" id="prP" value="24"></div>' +
      '<div class="widget-field"><label>Altura</label><input type="number" id="prH" value="9"></div>'
    ));
    var result2 = el('div','widget-result');
    wrap2.appendChild(result2);
    box.appendChild(wrap2);
    function updPrisma(){
      var S=parseFloat(wrap2.querySelector('#prS').value)||0, P=parseFloat(wrap2.querySelector('#prP').value)||0, h=parseFloat(wrap2.querySelector('#prH').value)||0;
      result2.innerHTML = 'Volume = S·h = <strong>'+fmt(S*h)+'</strong>; Área lateral = P·h = <strong>'+fmt(P*h)+'</strong>; Área total = A_lat+2S = <strong>'+fmt(P*h+2*S)+'</strong>.';
    }
    ['prS','prP','prH'].forEach(function(id){ wrap2.querySelector('#'+id).addEventListener('input', updPrisma); });
    updPrisma();
  };

  /* ---------- 12. Calculadora de volumes ---------- */
  WIDGETS.volumeCalculator = function(box){
    var wrap = el('div');
    var sel = el('select'); sel.id='vcType';
    [['piramide','Pirâmide (área da base + altura)'],['cilindro','Cilindro (raio + altura)'],['cone','Cone (raio + altura)']]
      .forEach(function(p){ var o=document.createElement('option'); o.value=p[0]; o.textContent=p[1]; sel.appendChild(o); });
    var selField = el('div','widget-field','<label>Sólido</label>'); selField.appendChild(sel);
    var controls = el('div','widget-controls'); controls.appendChild(selField);
    var fieldsHolder = el('div','widget-controls');
    var result = el('div','widget-result');
    wrap.appendChild(controls); wrap.appendChild(fieldsHolder); wrap.appendChild(result);
    box.appendChild(wrap);

    function render(){
      fieldsHolder.innerHTML='';
      var type = sel.value;
      var fields = type==='piramide' ? ['Área da base','Altura'] : ['Raio','Altura'];
      fields.forEach(function(f, idx){
        var field = el('div','widget-field','<label>'+f+'</label>');
        var inp = document.createElement('input'); inp.type='number'; inp.value= idx===0?'6':'10'; inp.dataset.idx=idx;
        field.appendChild(inp); fieldsHolder.appendChild(field);
        inp.addEventListener('input', compute);
      });
      compute();
    }
    function compute(){
      var type = sel.value;
      var inputs = fieldsHolder.querySelectorAll('input');
      var v1 = parseFloat(inputs[0].value), v2 = parseFloat(inputs[1].value);
      if(isNaN(v1)||isNaN(v2)||v1<0||v2<0){ result.className='widget-result error'; result.textContent='Preencha os dois campos.'; return; }
      result.className='widget-result';
      if(type==='piramide'){
        var V = v1*v2/3;
        result.innerHTML = 'Volume = (1/3)·S_base·h = <strong>'+fmt(V)+'</strong>';
      } else if(type==='cilindro'){
        var r=v1,h=v2;
        var V2 = Math.PI*r*r*h, Alat=2*Math.PI*r*h, Atot=Alat+2*Math.PI*r*r;
        result.innerHTML = 'Volume = π·r²·h = <strong>'+fmt(V2)+'</strong><br>Área lateral = 2πrh = <strong>'+fmt(Alat)+'</strong><br>Área total = <strong>'+fmt(Atot)+'</strong>';
      } else {
        var r2=v1,h2=v2, g=Math.sqrt(r2*r2+h2*h2);
        var V3 = Math.PI*r2*r2*h2/3, Alat2=Math.PI*r2*g, Atot2=Alat2+Math.PI*r2*r2;
        result.innerHTML = 'Geratriz g=√(r²+h²) = <strong>'+fmt(g)+'</strong><br>Volume = (1/3)πr²h = <strong>'+fmt(V3)+'</strong><br>Área lateral = πrg = <strong>'+fmt(Alat2)+'</strong><br>Área total = <strong>'+fmt(Atot2)+'</strong>';
      }
    }
    sel.addEventListener('change', render);
    render();
  };

  /* ---------- 13. Esfera ---------- */
  WIDGETS.sphereExplorer = function(box){
    var wrap = el('div');
    wrap.appendChild(el('div','widget-controls',
      '<div class="widget-field"><label>Raio da esfera (r)</label><input type="number" id="spR" value="13"></div>' +
      '<div class="widget-field"><label>Distância do centro ao plano (d)</label><input type="number" id="spD" value="5"></div>'
    ));
    var result = el('div','widget-result');
    wrap.appendChild(result);
    box.appendChild(wrap);
    function upd(){
      var r=parseFloat(wrap.querySelector('#spR').value), d=parseFloat(wrap.querySelector('#spD').value);
      if(isNaN(r)||isNaN(d)||r<=0||d<0){ result.className='widget-result error'; result.textContent='Informe r>0 e d≥0.'; return; }
      result.className='widget-result';
      if(d>=r){
        result.innerHTML = 'Como d≥r, o plano não secciona a esfera em um círculo (toca no máximo em um ponto).<br>Área da superfície esférica = 4πr² = <strong>'+fmt(4*Math.PI*r*r)+'</strong>. Volume = (4/3)πr³ = <strong>'+fmt(4/3*Math.PI*r*r*r)+'</strong>.';
        return;
      }
      var raioSecao = Math.sqrt(r*r-d*d);
      var areaSecao = Math.PI*raioSecao*raioSecao;
      result.innerHTML = 'Raio da seção = √(r²−d²) = <strong>'+fmt(raioSecao)+'</strong>; Área da seção = <strong>'+fmt(areaSecao)+'</strong>.<br>' +
        'Área da superfície esférica = 4πr² = <strong>'+fmt(4*Math.PI*r*r)+'</strong>. Volume da esfera = (4/3)πr³ = <strong>'+fmt(4/3*Math.PI*r*r*r)+'</strong>.';
    }
    ['spR','spD'].forEach(function(id){ wrap.querySelector('#'+id).addEventListener('input', upd); });
    upd();
  };

  /* ---------- inicializador genérico ---------- */
  window.initInteractiveWidget = function(name, containerId){
    var box = document.getElementById(containerId);
    if(!box) return;
    var fn = WIDGETS[name];
    if(!fn){ box.innerHTML = '<p class="widget-note">Widget indisponível.</p>'; return; }
    try{ fn(box); } catch(e){ box.innerHTML = '<p class="widget-note">Erro ao carregar o widget: '+e.message+'</p>'; console.error(e); }
  };
})();
