# Geometria — MA13 PROFMAT — site de revisão pós-aula

Site estático (13 aulas + índice) para fixação de conteúdo, treino de exercícios
e revisão para o ENQ, feito para uso pós-aula por alunos do PROFMAT.

## O que tem em cada aula
- Teoria **completa e autossuficiente**: conceitos primitivos, definições, postulados/axiomas,
  teoremas com demonstração completa e exemplos resolvidos — cobrindo todo o roteiro detalhado da
  disciplina (o aluno deve conseguir estudar só pelo material, sem precisar do livro). Renderizada em
  LaTeX via MathJax (requer internet).
- **Aplicativo interativo por aula**: um widget diferente em cada uma das 13 aulas (sliders, SVG
  dinâmico ou calculadoras) para tornar o estudo mais dinâmico — ex.: explorador de ângulos opostos
  pelo vértice, verificador da desigualdade triangular, transversal de paralelas animada, calculadora
  de relações métricas do triângulo retângulo, ângulo inscrito x central ao vivo, calculadora de
  áreas/volumes, verificador da Relação de Euler, etc. (arquivo `assets/interactives.js`).
- Exercícios interativos de fixação (múltipla escolha e resposta numérica, com feedback imediato).
- **Quadro do professor**: reflexão pessoal (como ensina, dificuldades dos alunos, visão sobre o
  conteúdo) — fica salva no navegador do aluno (localStorage) e só é enviada a você se o aluno
  clicar em "Enviar feedback".
- **Mini-simulado ENQ cumulativo**: questões reais de geometria de 11 provas ENQ (2021.1–2026.1),
  cumulativas (semana atual + semanas anteriores).
- **Pesquisa da aula (projeto DesignMat)** + botão de envio de feedback, que também manda
  automaticamente: acertos/erros nos exercícios e tempo que o aluno ficou logado na página.

## ⚠️ Passo obrigatório antes de publicar: configurar o recebimento do feedback

Você escolheu receber o feedback via **Formspree**. Falta um passo de configuração de ~2 minutos:

1. Acesse https://formspree.io e crie uma conta gratuita usando **hiuri_reis@ufg.br**.
2. Clique em "New Form", dê um nome (ex.: "Geometria PROFMAT — feedback") e confirme o e-mail deles.
3. Copie o ID do formulário — aparece na URL do painel, algo como `https://formspree.io/f/abcdwxyz`
   (o ID é o trecho depois de `/f/`).
4. Abra o arquivo `assets/app.js` e troque a linha:
   ```js
   window.FORMSPREE_FORM_ID = "SEU_FORM_ID";
   ```
   pelo ID copiado, por exemplo:
   ```js
   window.FORMSPREE_FORM_ID = "abcdwxyz";
   ```
5. Salve e publique novamente (se já tiver publicado no GitHub Pages, um novo commit/push já resolve).

**Enquanto esse passo não for feito**, o botão "Enviar feedback da aula" funciona normalmente, mas
usa o método alternativo: abre o cliente de e-mail do aluno com tudo pré-preenchido, endereçado a
hiuri_reis@ufg.br. Ou seja, o site já funciona sem o Formspree — o Formspree só evita depender do
aluno ter e-mail configurado no aparelho.

## Como publicar (GitHub Pages)

1. Crie um repositório novo no GitHub (pode ser privado ou público).
2. Suba todo o conteúdo desta pasta (`profmat-geometria-site/`) para a raiz do repositório
   (não precisa da subpasta `build/`, que é só o gerador — pode remover ou deixar, não afeta o site).
3. Em Settings → Pages, escolha a branch principal e a pasta raiz (`/`).
4. Em alguns minutos o site estará em `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.
5. Compartilhe esse link com a turma.

## Estrutura de arquivos

```
profmat-geometria-site/
  index.html              → página inicial (hub com as 13 aulas)
  aula-01.html ... aula-13.html
  assets/
    style.css             → visual do site
    app.js                → lógica interativa geral (quizzes, cronômetro, quadro do professor, feedback)
    interactives.js       → os 13 aplicativos/widgets interativos (um por aula)
    fixation_bank.js       → banco de exercícios de fixação (52 questões)
    enq_bank.js             → banco de questões de geometria do ENQ (24 questões, 2021.1–2026.1)
  build/                  → scripts geradores (Python + Jinja2) — não precisa subir para o site,
                             só use se quiser editar o conteúdo e regerar os HTMLs
  enq_geometria.json      → dados brutos extraídos dos gabaritos oficiais do ENQ
```

## Como editar o conteúdo

O conteúdo teórico de cada aula está em `build/content_source.py` (uma lista de dicionários com
título, objetivos e HTML). Os exercícios de fixação estão em `build/fixation_source.py`. Depois de
editar, rode (com Python 3 e a biblioteca `jinja2` instaladas):

```
python3 build/content_source.py    # gera build/content_data.json (rode isso OU importe direto)
python3 build/fixation_source.py    # gera assets/fixation_bank.js
python3 build/render.py             # gera todos os arquivos .html a partir dos templates
```

## Fontes usadas na criação do conteúdo
- Antonio Caminha Muniz Neto, *Geometria* (Coleção PROFMAT, SBM) — estrutura e rigor das demonstrações.
- Osvaldo Dolce & José Nicolau Pompeo, *Fundamentos de Matemática Elementar*, vols. 9 (Geometria
  Plana) e 10 (Geometria Espacial) — sumário e notação de referência.
- Onze provas ENQ oficiais (gabaritos com pautas de correção), de 2021.1 a 2026.1 — todas as
  questões de geometria (plana e espacial) foram extraídas e usadas no mini-simulado cumulativo.
