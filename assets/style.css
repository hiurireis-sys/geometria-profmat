:root{
  --bg:#f7f5f0;
  --bg-alt:#ffffff;
  --ink:#1f2937;
  --ink-soft:#4b5563;
  --brand:#7c3aed;
  --brand-dark:#5b21b6;
  --brand-soft:#ede9fe;
  --accent:#0d9488;
  --accent-soft:#ccfbf1;
  --warn:#d97706;
  --warn-soft:#fef3c7;
  --danger:#dc2626;
  --danger-soft:#fee2e2;
  --good:#16a34a;
  --good-soft:#dcfce7;
  --border:#e5e0d8;
  --radius:16px;
  --shadow:0 4px 18px rgba(31,41,55,.06);
  --shadow-hover:0 10px 28px rgba(31,41,55,.10);
  font-family:'Source Sans 3','Segoe UI',system-ui,-apple-system,sans-serif;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  background:var(--bg);
  color:var(--ink);
  line-height:1.65;
  font-size:16.5px;
}

h1,h2,h3,h4{
  font-family:'Fraunces','Georgia',serif;
  font-weight:600;
  color:var(--brand-dark);
  line-height:1.25;
}
h1{font-size:2rem;}
h2{font-size:1.5rem; margin-top:2.2rem;}
h3{font-size:1.2rem; color:var(--ink);}

a{color:var(--brand-dark);}

.wrap{max-width:920px;margin:0 auto;padding:0 20px 60px;}

/* topbar */
.topbar{
  background:linear-gradient(120deg,var(--brand-dark),var(--brand) 60%,#a855f7);
  color:#fff;
  padding:14px 20px;
  position:sticky;top:0;z-index:50;
  box-shadow:var(--shadow);
}
.topbar-inner{max-width:920px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;}
.topbar a{color:#fff;text-decoration:none;font-weight:600;opacity:.95;}
.topbar a:hover{opacity:1;text-decoration:underline;}
.brand-title{display:flex;flex-direction:column;gap:1px;}
.brand-title small{font-weight:400;opacity:.85;font-size:.78rem;}
.progress-track{flex:1 1 160px;height:8px;background:rgba(255,255,255,.25);border-radius:8px;overflow:hidden;min-width:100px;max-width:220px;}
.progress-fill{height:100%;background:#fde047;border-radius:8px;transition:width .3s;}

/* lesson nav */
.lesson-nav{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:22px 0;flex-wrap:wrap;}
.lesson-nav .tag{
  background:var(--brand-soft);color:var(--brand-dark);
  padding:4px 12px;border-radius:999px;font-weight:700;font-size:.85rem;
}
.nav-buttons{display:flex;gap:8px;flex-wrap:wrap;}
.btn{
  display:inline-flex;align-items:center;gap:6px;
  background:var(--brand);color:#fff;border:none;
  padding:10px 18px;border-radius:999px;font-weight:600;font-size:.92rem;
  cursor:pointer;text-decoration:none;transition:.15s transform,.15s box-shadow,.15s background;
  box-shadow:var(--shadow);
}
.btn:hover{transform:translateY(-1px);box-shadow:var(--shadow-hover);background:var(--brand-dark);}
.btn.secondary{background:var(--bg-alt);color:var(--brand-dark);border:1.5px solid var(--brand-soft);}
.btn.secondary:hover{background:var(--brand-soft);}
.btn.accent{background:var(--accent);}
.btn.accent:hover{background:#0b7d73;}
.btn:disabled{opacity:.4;cursor:not-allowed;transform:none;box-shadow:none;}

/* cards / sections */
.card{
  background:var(--bg-alt);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:22px 26px;
  margin-bottom:22px;
  box-shadow:var(--shadow);
}
.hero{
  background:radial-gradient(circle at 20% 20%, #ede9fe, #f7f5f0 70%);
  border-radius:var(--radius);
  padding:32px;
  margin:26px 0;
  border:1px solid var(--border);
}
.hero h1{margin-top:0;}
.pill-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;}
.pill{background:var(--accent-soft);color:#0b6b62;padding:4px 12px;border-radius:999px;font-size:.82rem;font-weight:600;}

/* objectives */
.objectives ul{margin:0;padding-left:1.2em;}
.objectives li{margin-bottom:4px;}

/* theorem box */
.theorem{
  border-left:5px solid var(--brand);
  background:var(--brand-soft);
  border-radius:0 12px 12px 0;
  padding:16px 20px;
  margin:18px 0;
}
.theorem .label{font-weight:700;color:var(--brand-dark);text-transform:uppercase;font-size:.78rem;letter-spacing:.04em;}
.theorem h4{margin:4px 0 8px;color:var(--brand-dark);}
.proof-toggle{
  margin-top:10px;background:none;border:1.5px dashed var(--brand);color:var(--brand-dark);
  padding:6px 14px;border-radius:999px;font-weight:600;cursor:pointer;font-size:.85rem;
}
.proof-toggle:hover{background:#fff;}
.proof{display:none;margin-top:12px;padding:14px 16px;background:#fff;border-radius:10px;border:1px dashed var(--border);}
.proof.open{display:block;}
.proof p{margin:.5em 0;}
.qed{text-align:right;font-weight:700;color:var(--brand-dark);}

.example{
  border-left:5px solid var(--accent);
  background:var(--accent-soft);
  border-radius:0 12px 12px 0;
  padding:16px 20px;margin:18px 0;
}
.example .label{font-weight:700;color:#0b6b62;text-transform:uppercase;font-size:.78rem;letter-spacing:.04em;}

.note{
  border-left:5px solid var(--warn);
  background:var(--warn-soft);
  border-radius:0 12px 12px 0;
  padding:14px 18px;margin:16px 0;font-size:.95rem;
}

/* quiz */
.quiz-item{border:1px solid var(--border);border-radius:12px;padding:16px 18px;margin-bottom:14px;background:var(--bg-alt);}
.quiz-item .stem{font-weight:600;margin-bottom:10px;}
.quiz-options{display:flex;flex-direction:column;gap:8px;}
.quiz-option{
  display:flex;align-items:center;gap:10px;
  border:1.5px solid var(--border);border-radius:10px;padding:9px 14px;
  cursor:pointer;transition:.12s;background:#fff;
}
.quiz-option:hover{border-color:var(--brand);}
.quiz-option.selected{border-color:var(--brand);background:var(--brand-soft);}
.quiz-option.correct{border-color:var(--good);background:var(--good-soft);}
.quiz-option.incorrect{border-color:var(--danger);background:var(--danger-soft);}
.quiz-feedback{margin-top:10px;font-weight:600;font-size:.92rem;}
.quiz-feedback.correct{color:var(--good);}
.quiz-feedback.incorrect{color:var(--danger);}
.quiz-explain{margin-top:8px;font-size:.9rem;color:var(--ink-soft);background:#faf9f6;border-radius:8px;padding:10px 12px;display:none;}
.quiz-explain.open{display:block;}
.numeric-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
.numeric-row input{
  border:1.5px solid var(--border);border-radius:8px;padding:8px 12px;font-size:1rem;width:160px;
}
.check-btn{
  background:var(--accent);color:#fff;border:none;padding:8px 16px;border-radius:999px;
  font-weight:600;cursor:pointer;font-size:.88rem;
}
.check-btn:hover{background:#0b7d73;}

.score-bar{
  display:flex;align-items:center;gap:12px;background:var(--brand-soft);
  border-radius:12px;padding:12px 18px;margin:14px 0;font-weight:700;color:var(--brand-dark);
  flex-wrap:wrap;
}

/* teacher board */
.teacher-board textarea{
  width:100%;min-height:80px;border:1.5px solid var(--border);border-radius:10px;
  padding:10px 12px;font-family:inherit;font-size:.95rem;resize:vertical;margin-top:6px;
}
.teacher-board label{font-weight:600;display:block;margin-top:14px;}
.saved-flag{color:var(--good);font-weight:600;font-size:.88rem;margin-left:8px;display:none;}
.saved-flag.show{display:inline;}

/* survey */
.likert{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;}
.likert label{
  display:flex;flex-direction:column;align-items:center;gap:4px;font-size:.78rem;color:var(--ink-soft);
  cursor:pointer;background:#fff;border:1.5px solid var(--border);border-radius:10px;padding:8px 10px;flex:1;min-width:60px;text-align:center;
}
.likert input{accent-color:var(--brand);}
.likert label:has(input:checked){border-color:var(--brand);background:var(--brand-soft);color:var(--brand-dark);}
.survey-q{margin-bottom:20px;}
.survey-q > .q-text{font-weight:600;}

.feedback-status{margin-top:14px;font-weight:600;padding:10px 14px;border-radius:10px;display:none;}
.feedback-status.show{display:block;}
.feedback-status.ok{background:var(--good-soft);color:#0a5c2b;}
.feedback-status.err{background:var(--danger-soft);color:#8f1d1d;}

/* index page */
.lesson-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;margin-top:20px;}
.lesson-card{
  background:var(--bg-alt);border:1px solid var(--border);border-radius:var(--radius);
  padding:18px 20px;text-decoration:none;color:var(--ink);box-shadow:var(--shadow);
  transition:.15s transform,.15s box-shadow;display:flex;flex-direction:column;gap:6px;position:relative;
}
.lesson-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover);}
.lesson-card .num{
  font-family:'Fraunces',serif;font-size:1.6rem;color:var(--brand);font-weight:700;
}
.lesson-card .lt{font-weight:700;color:var(--ink);}
.lesson-card .ld{font-size:.86rem;color:var(--ink-soft);}
.lesson-card .freq{position:absolute;top:14px;right:16px;font-size:.72rem;font-weight:700;padding:3px 9px;border-radius:999px;}
.freq.high{background:var(--danger-soft);color:#8f1d1d;}
.freq.mid{background:var(--warn-soft);color:#8a5a00;}
.freq.low{background:var(--accent-soft);color:#0b6b62;}

footer.site-footer{text-align:center;color:var(--ink-soft);font-size:.85rem;padding:30px 20px;}

table.enq-table{width:100%;border-collapse:collapse;margin:16px 0;font-size:.92rem;}
table.enq-table th, table.enq-table td{border:1px solid var(--border);padding:8px 10px;text-align:left;}
table.enq-table th{background:var(--brand-soft);color:var(--brand-dark);}

.timer-chip{
  position:fixed;bottom:16px;right:16px;background:var(--ink);color:#fff;
  padding:8px 14px;border-radius:999px;font-size:.78rem;opacity:.85;z-index:40;font-weight:600;
}
@media (max-width:600px){
  .timer-chip{display:none;}
  h1{font-size:1.6rem;}
}

/* ---- Definições (dl) ---- */
.def-list{margin:14px 0;}
.def-list dt{font-weight:700;color:var(--brand-dark);margin-top:10px;}
.def-list dd{margin:2px 0 0 0;color:var(--ink);}

/* ---- Widget interativo ---- */
.widget-card{border:2px solid var(--brand-soft);}
.widget-slot{margin:16px 0;}
.widget-box{background:#faf9f6;border:1px dashed var(--border);border-radius:12px;padding:18px;margin-top:10px;}
.widget-controls{display:flex;flex-wrap:wrap;gap:14px;align-items:flex-end;margin-bottom:14px;}
.widget-field{display:flex;flex-direction:column;gap:4px;font-size:.85rem;font-weight:600;color:var(--ink-soft);}
.widget-field input[type="number"], .widget-field input[type="text"], .widget-field select{
  border:1.5px solid var(--border);border-radius:8px;padding:7px 10px;font-size:.95rem;width:120px;font-family:inherit;
}
.widget-field input[type="range"]{width:200px;accent-color:var(--brand);}
.widget-btn{
  background:var(--brand);color:#fff;border:none;padding:9px 18px;border-radius:999px;
  font-weight:600;cursor:pointer;font-size:.9rem;height:fit-content;
}
.widget-btn:hover{background:var(--brand-dark);}
.widget-result{
  margin-top:12px;background:#fff;border-radius:10px;border:1px solid var(--border);
  padding:12px 16px;font-size:.92rem;min-height:20px;
}
.widget-result strong{color:var(--brand-dark);}
.widget-result.error{color:var(--danger);border-color:var(--danger-soft);background:var(--danger-soft);}
.widget-svg-wrap{display:flex;justify-content:center;margin:10px 0;}
.widget-svg-wrap svg{max-width:100%;height:auto;}
.widget-note{font-size:.82rem;color:var(--ink-soft);margin-top:8px;}
