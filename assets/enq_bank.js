// Banco de questões de geometria extraídas dos gabaritos oficiais do ENQ (2021.1 a 2026.1)
// Gerado automaticamente a partir de enq_geometria.json (opções embaralhadas)
window.ENQ_BANK = [
  {
    "id": "enq-ENQ20231-Q2",
    "exame": "ENQ 2023.1",
    "questao": 2,
    "enunciado": "Considere o quadrilátero convexo abaixo, representado com suas diagonais. As letras correspondem às medidas dos segmentos e 0 < θ ≤ 90° representa um dos ângulos entre as diagonais. [figura: quadrilátero convexo com as diagonais divididas em segmentos a, x, w, b, y, z, d, c pelo ponto de interseção, e o ângulo θ entre as diagonais] (a) Se θ = 90°, prove que a² + c² = b² + d². (b) Se a² + c² = b² + d², prove que (xw+yz)cos(θ) = −(xy+zw)cos(θ). (c) Se a² + c² = b² + d², prove que θ = 90°.",
    "options": [
      "θ=90° apenas se o quadrilátero for um losango",
      "Só a implicação (a)⇒ é verdadeira; a recíproca falha",
      "As três implicações se confirmam: a²+c²=b²+d² ⇔ θ=90°",
      "A igualdade a²+c²=b²+d² nunca implica θ=90°"
    ],
    "answerIndex": 2,
    "resposta_final": "Demonstradas as três implicações, concluindo que a² + c² = b² + d² se, e somente se, θ = 90°.",
    "resumo_solucao": "(a) Aplica-se o Teorema de Pitágoras nos quatro triângulos retângulos formados pelas diagonais perpendiculares e soma-se as igualdades. (b) Usa-se a Lei dos Cossenos nos quatro triângulos formados pelas diagonais (com ângulos θ e 180°−θ) e a hipótese a²+c²=b²+d² para chegar à igualdade envolvendo cossenos. (c) Da igualdade anterior conclui-se que cos θ = 0, logo θ=90°.",
    "topico": "Paralelismo e quadriláteros",
    "aulaOrder": 4
  },
  {
    "id": "enq-ENQ20222-Q8",
    "exame": "ENQ 2022.2",
    "questao": 8,
    "enunciado": "Na figura, AB é um diâmetro da circunferência de centro O e raio 5. O ponto C pertence à circunferência, P pertence ao raio OC, BP̂C = 90° e OP = 1. Determine a área do triângulo ABC. [figura: circunferência de centro O e raio 5, diâmetro AB, ponto C na circunferência, P sobre o raio OC com ângulo BPC reto e OP=1]",
    "options": [
      "Área = 20√6",
      "Área = 10√6",
      "Área = 12√6",
      "Área = 10√5"
    ],
    "answerIndex": 1,
    "resposta_final": "Área = 10√6.",
    "resumo_solucao": "No triângulo retângulo OPB (cateto OP=1, hipotenusa OB=5), obtém-se BP=√24. No triângulo retângulo BPC (catetos BP=√24 e PC=4, pois PC=OC−OP=5−1=4), obtém-se BC=√40. Como AB é diâmetro, o triângulo ABC é retângulo em C; por Pitágoras encontra-se AC=√60, e a área é (√40·√60)/2 = 10√6.",
    "topico": "Relações métricas no triângulo retângulo e Pitágoras",
    "aulaOrder": 6
  },
  {
    "id": "enq-ENQ20261-Q2",
    "exame": "ENQ 2026.1",
    "questao": 2,
    "enunciado": "Seja ABC um triângulo retângulo em A, com catetos AB = c, AC = b e hipotenusa BC = a. Sendo H o pé da altura relativa à hipotenusa, considere AH = h, BH = m e HC = n. [figura: triângulo retângulo ABC com ângulo reto em A, altura AH=h relativa à hipotenusa BC=a, dividindo-a em BH=m e HC=n; catetos AB=c e AC=b] Usando semelhança de triângulos, prove que: (a) a·h = b·c. (b) c² = a·m e b² = a·n. (c) a² = b²+c². (d) h² = m·n.",
    "options": [
      "As relações valem apenas se o triângulo for isósceles",
      "Apenas a relação de Pitágoras a²=b²+c² pode ser provada por semelhança",
      "h²=mn não decorre da semelhança, precisa de área",
      "As quatro relações métricas (ah=bc, c²=am, b²=an, a²=b²+c², h²=mn) demonstradas por semelhança"
    ],
    "answerIndex": 3,
    "resposta_final": "Demonstradas as quatro relações métricas do triângulo retângulo.",
    "resumo_solucao": "Os triângulos BAC, BHA e AHC são semelhantes entre si (todos retângulos com os mesmos ângulos agudos). Das proporções entre lados correspondentes obtém-se c/m=a/c (dando c²=am), b/n=a/b (dando b²=an) e a·h=b·c. Somando c²+b²=am+an=a(m+n)=a² prova-se Pitágoras, e combinando b²c²=a²mn com (ah)²=(bc)² obtém-se h²=mn.",
    "topico": "Relações métricas no triângulo retângulo e Pitágoras",
    "aulaOrder": 6
  },
  {
    "id": "enq-ENQ20221-Q4",
    "exame": "ENQ 2022.1",
    "questao": 4,
    "enunciado": "Nos dois casos abaixo, demonstre a conhecida relação métrica PA·PB = PC·PD, também chamada de 'potência de ponto no círculo': (a) P exterior ao círculo (Figura 1). (b) P interior ao círculo (Figura 2). [figura 1: ponto P externo ao círculo com duas secantes PAB e PCD; figura 2: ponto P interno ao círculo com duas cordas AB e CD que se cruzam em P]",
    "options": [
      "PA·PB = PC·PD apenas quando P é exterior ao círculo",
      "PA·PD = PB·PC em ambos os casos, provado por congruência de triângulos",
      "PA·PB = PC·PD em ambos os casos, provado por semelhança AA de triângulos",
      "A igualdade só vale quando as duas retas são perpendiculares"
    ],
    "answerIndex": 2,
    "resposta_final": "Demonstrado que PA·PB = PC·PD em ambos os casos, via semelhança de triângulos (caso AA).",
    "resumo_solucao": "(a) Traçando AD e BC, os triângulos APD e CPB são semelhantes por AA (ângulo comum e ângulos inscritos que subtendem o mesmo arco AC), donde PA/PC = PD/PB. (b) Traçando AC e BD, os triângulos APC e DPB são semelhantes por AA (ângulos opostos pelo vértice e ângulos inscritos no mesmo arco BC), donde PA/PD = PC/PB. Em ambos os casos segue PA·PB = PC·PD.",
    "topico": "Círculo",
    "aulaOrder": 7
  },
  {
    "id": "enq-ENQ20242-Q2",
    "exame": "ENQ 2024.2",
    "questao": 2,
    "enunciado": "Considere um círculo de centro A e raio 1, e um triângulo retângulo ABC conforme a figura abaixo. Denotemos por θ o ângulo BÂC. [figura: círculo de centro A e raio 1, com um triângulo retângulo ABC cuja hipotenusa AC=1 é raio do círculo, cateto AB e ângulo θ no vértice A] (a) Use o Teorema do ângulo inscrito para mostrar que tg(θ/2) = senθ/(1+cosθ). (b) Calcule seno, cosseno e tangente de 15°.",
    "options": [
      "(a) demonstrado; (b) sen15°=(√6+√2)/4, cos15°=(√6−√2)/4, tg15°=2+√3",
      "(a) demonstrado; (b) sen15°=(√6−√2)/4, cos15°=(√6+√2)/4, tg15°=2−√3",
      "(a) demonstrado; (b) sen15°=(√6−√2)/4, cos15°=(√6+√2)/4, tg15°=2+√3",
      "(a) demonstrado; (b) sen15°=1/4, cos15°=√15/4, tg15°=1/√15"
    ],
    "answerIndex": 1,
    "resposta_final": "(a) demonstrado; (b) sen15° = (√6−√2)/4, cos15° = (√6+√2)/4, tg15° = 2−√3.",
    "resumo_solucao": "Toma-se o ponto M diametralmente oposto a B; o ângulo AM̂C é o ângulo inscrito correspondente ao ângulo central θ, valendo θ/2. No triângulo retângulo BMC, tg(θ/2)=BC/MB=senθ/(1+cosθ). Aplicando isso com θ=30°, calcula-se MC=√(2+2cos30°) e a partir daí sen15°, cos15° e tg15°.",
    "topico": "Círculo",
    "aulaOrder": 7
  },
  {
    "id": "enq-ENQ20252-Q5",
    "exame": "ENQ 2025.2",
    "questao": 5,
    "enunciado": "Considere três círculos, de raios a, b e c (dois a dois distintos), tangentes exteriormente dois a dois e todos tangentes a uma reta s nos pontos A, B e C, respectivamente, como mostra a figura abaixo. [figura: reta s com três círculos de raios a, b, c, cada um tangente à reta e tangentes exteriormente entre si dois a dois, tocando a reta nos pontos A, B, C, com B entre A e C] (a) Prove que AC = 2√(ac). (b) Dê o valor de AB em função de a e b e o valor de BC em função de b e c. (c) Determine b em função de a e c.",
    "options": [
      "(a) AC=a+c; (b) AB=a+b, BC=b+c; (c) b=√(ac)",
      "(a) AC=√(ac); (b) AB=√(ab), BC=√(bc); (c) b=ac/(a+2√(ac)+c)",
      "(a) AC=2√(ac); (b) AB=2√(ab), BC=2√(bc); (c) b=(a+c)/2",
      "(a) AC=2√(ac); (b) AB=2√(ab), BC=2√(bc); (c) b=ac/(a+2√(ac)+c)"
    ],
    "answerIndex": 3,
    "resposta_final": "(a) AC=2√(ac); (b) AB=2√(ab), BC=2√(bc); (c) b = ac/(a+2√(ac)+c).",
    "resumo_solucao": "Usando os centros dos círculos e o Teorema de Pitágoras num triângulo retângulo formado pela soma/diferença dos raios e a distância entre os pontos de tangência, mostra-se que AC²=4ac. O mesmo raciocínio dá AB=2√(ab) e BC=2√(bc). Como AC=AB+BC (pontos colineares na reta s), obtém-se uma equação em b que, resolvida, fornece b=ac/(a+2√(ac)+c).",
    "topico": "Círculo",
    "aulaOrder": 7
  },
  {
    "id": "enq-ENQ20212-Q5",
    "exame": "ENQ 2021.2",
    "questao": 5,
    "enunciado": "Na figura abaixo, a partir de um quadrado de lado ℓ forma-se uma sequência de quadrados e círculos em que cada quadrado é formado unindo os pontos médios do quadrado imediatamente anterior e todos os círculos estão inscritos em algum quadrado. Sejam ℓn o lado do n-ésimo quadrado e rn o raio do n-ésimo círculo. [figura: sequência de quadrados encaixados (cada um formado ligando os pontos médios do anterior), cada um com um círculo inscrito] (a) Determine a relação entre ℓn e rn. (b) Encontre a soma P dos perímetros dos infinitos quadrados em função de ℓ. (c) Obtenha a soma A das áreas dos infinitos círculos em função de ℓ.",
    "options": [
      "(a) ℓₙ=2rₙ; (b) P=2ℓ(2+√2); (c) A=πℓ²",
      "(a) ℓₙ=2rₙ; (b) P=4ℓ(2+√2); (c) A=πℓ²/2",
      "(a) ℓₙ=rₙ; (b) P=4ℓ(2+√2); (c) A=πℓ²/4",
      "(a) ℓₙ=2rₙ; (b) P=4ℓ(1+√2); (c) A=πℓ²/2"
    ],
    "answerIndex": 1,
    "resposta_final": "(a) ℓn = 2rn; (b) P = 4ℓ(2+√2); (c) A = πℓ²/2.",
    "resumo_solucao": "Como o círculo n está inscrito no quadrado n, seu diâmetro é igual ao lado, ℓn=2rn. O lado do quadrado seguinte é metade da diagonal do anterior, ℓn+1 = ℓn√2/2, formando uma PG de razão √2/2 para os lados (e portanto para os perímetros), cuja soma infinita dá P=4ℓ(2+√2). As áreas dos círculos formam uma PG de razão 1/2 (quadrado da razão dos raios), cuja soma infinita dá A=πℓ²/2.",
    "topico": "Áreas de figuras planas",
    "aulaOrder": 8
  },
  {
    "id": "enq-ENQ20231-Q7",
    "exame": "ENQ 2023.1",
    "questao": 7,
    "enunciado": "Considere um triângulo isósceles ABC, representado pela figura abaixo, cujos lados congruentes AB e AC medem 5. Assuma que o terceiro lado e o ângulo oposto a este lado sejam variáveis, medindo BC = x e  = θ, respectivamente. [figura: triângulo isósceles ABC com AB=AC=5, ângulo no vértice A igual a θ, base BC=x] (a) Encontre a função que expressa a área do triângulo ABC em relação ao ângulo θ, indicando o domínio e a expressão da função. (b) Calcule a área máxima do triângulo. Quais as medidas de x e θ neste caso?",
    "options": [
      "(a) S(θ)=(25/2)senθ; (b) área máx = 25/2 em θ=π/3, x=5",
      "(a) S(θ)=(25/2)cosθ; (b) área máx = 25/2 em θ=0",
      "(a) S(θ)=25senθ; (b) área máx = 25 em θ=π/2, x=5√2",
      "(a) S(θ)=(25/2)senθ; (b) área máx = 25/2 em θ=π/2, x=5√2"
    ],
    "answerIndex": 3,
    "resposta_final": "(a) S(θ) = (25/2)sen(θ), domínio ]0,π[; (b) área máxima = 25/2, atingida quando θ=π/2 e x=5√2.",
    "resumo_solucao": "Traçando a altura relativa à base (que coincide com a mediana e a bissetriz no triângulo isósceles), obtém-se x=10sen(θ/2) e h=5cos(θ/2); a área S(θ)=25 sen(θ/2)cos(θ/2)=(25/2)sen(θ). Como 0<senθ≤1 no intervalo ]0,π[, o máximo ocorre em θ=π/2 (triângulo retângulo isósceles), dando área 25/2 e, por Pitágoras, x=5√2.",
    "topico": "Áreas de figuras planas",
    "aulaOrder": 8
  },
  {
    "id": "enq-ENQ20241-Q1",
    "exame": "ENQ 2024.1",
    "questao": 1,
    "enunciado": "No hexágono convexo ABCDEF da figura, AB é paralelo a FC, CD é paralelo a BE, e EF é paralelo a DA. [figura: hexágono convexo ABCDEF com as diagonais AC, CE, EA formando um triângulo interno, e os pares de lados/diagonais indicados paralelos] (a) Se as áreas dos triângulos ABC, CDE e EFA são, respectivamente, x, y e z, determine as áreas dos triângulos ABF, CDB e EFD, em função de x, y e z. (b) Mostre que as áreas dos triângulos ACE e BDF são iguais.",
    "options": [
      "(a) área(ABF)=2x, área(CDB)=2y, área(EFD)=2z; (b) ambas valem S−x−y−z",
      "(a) área(ABF)=x, área(CDB)=y, área(EFD)=z; (b) ambas valem S−x−y−z",
      "(a) área(ABF)=x, área(CDB)=y, área(EFD)=z; (b) as áreas são sempre diferentes",
      "(a) área(ABF)=y, área(CDB)=z, área(EFD)=x; (b) ambas valem S−x−y−z"
    ],
    "answerIndex": 1,
    "resposta_final": "(a) área(ABF) = x, área(CDB) = y, área(EFD) = z; (b) ambas as áreas de ACE e BDF valem S − x − y − z, onde S é a área do hexágono.",
    "resumo_solucao": "Como AB é paralelo a FC, os triângulos ABC e ABF têm a mesma base AB e a mesma altura, logo mesma área x; de modo análogo para os outros dois pares (CD∥BE e EF∥DA). A área do hexágono se decompõe de duas formas equivalentes, S = área(ACE)+x+y+z = área(BDF)+x+y+z, o que dá área(ACE)=área(BDF)=S−x−y−z.",
    "topico": "Áreas de figuras planas",
    "aulaOrder": 8
  },
  {
    "id": "enq-ENQ20212-Q3",
    "exame": "ENQ 2021.2",
    "questao": 3,
    "enunciado": "Considere um triângulo ABC de lados a, b e c, conforme a figura, e seja r o raio do círculo circunscrito a este triângulo. Prove a lei dos senos: a/senÂ = b/senB̂ = c/senĈ = 2r. [figura: triângulo ABC inscrito em uma circunferência de centro O e raio r, com lados a, b, c opostos aos respectivos ângulos]",
    "options": [
      "A lei dos senos só vale se o triângulo for isósceles",
      "Demonstrado via Teorema de Pitágoras diretamente, sem usar ângulo inscrito",
      "Demonstrado via triângulo retângulo inscrito com diâmetro BD, usando ângulos inscritos",
      "Demonstrado apenas para triângulos retângulos"
    ],
    "answerIndex": 2,
    "resposta_final": "Demonstrado que a/senÂ = b/senB̂ = c/senĈ = 2r.",
    "resumo_solucao": "Constrói-se o triângulo BCD com BD diâmetro; os ângulos  e D̂ são congruentes por serem ângulos inscritos que subtendem o mesmo arco BC, e o triângulo BCD é retângulo em C (ângulo inscrito em semicircunferência), donde senÂ = a/(2r). Procedendo de modo análogo para os outros dois ângulos e lados, obtém-se a lei dos senos.",
    "topico": "Polígonos regulares e trigonometria (Lei dos Senos/Cossenos)",
    "aulaOrder": 9
  },
  {
    "id": "enq-ENQ20232-Q7",
    "exame": "ENQ 2023.2",
    "questao": 7,
    "enunciado": "Sejam ℓ e L os comprimentos dos lados de polígonos regulares de n e 2n lados, respectivamente, inscritos em um círculo de raio r. (a) Determine o comprimento a do apótema do polígono de n lados em função de r e ℓ. Lembre que o apótema é a menor distância do centro a um lado do polígono. (b) Mostre que L² = 2r² − r√(4r²−ℓ²). (c) Use o item (b) para determinar a medida do lado do polígono regular de 12 lados inscrito em um círculo de raio r.",
    "options": [
      "(a) a=√(4r²−ℓ²)/2; (b) demonstrado; (c) L=r√(2+√3)",
      "(a) a=(4r²−ℓ²)/2; (b) demonstrado; (c) L=r(2−√3)",
      "(a) a=√(4r²−ℓ²)/2; (b) demonstrado; (c) L=r√(2−√3)",
      "(a) a=√(4r²−ℓ²); (b) demonstrado; (c) L=r√(2−√3)"
    ],
    "answerIndex": 2,
    "resposta_final": "(a) a = √(4r²−ℓ²)/2; (b) demonstrado; (c) L = r√(2−√3).",
    "resumo_solucao": "Considerando vértices consecutivos A, B, C do polígono de 2n lados (com AC=ℓ, lado do polígono de n lados), o apótema a é a altura do triângulo isósceles OAC, obtida por Pitágoras. Aplicando Pitágoras no triângulo BCP (P ponto médio de AC), com BP=r−a, chega-se à fórmula de L² em função de r e ℓ. Para o dodecágono usa-se ℓ=r (lado do hexágono regular), resultando em L=r√(2−√3).",
    "topico": "Polígonos regulares e trigonometria (Lei dos Senos/Cossenos)",
    "aulaOrder": 9
  },
  {
    "id": "enq-ENQ20251-Q1",
    "exame": "ENQ 2025.1",
    "questao": 1,
    "enunciado": "Considere o triângulo ABC tal que AB = 5, BC = 7 e AC = 8. (a) Determine a medida do ângulo α = BÂC. (b) Obtenha o seno dos ângulos β = ABĈ e γ = AĈB. (c) Determine o raio do círculo circunscrito ao triângulo ABC.",
    "options": [
      "(a) 60°; (b) sen β=5√3/14, sen γ=4√3/7; (c) R=7√3/3",
      "(a) 45°; (b) sen β=4√3/7, sen γ=5√3/14; (c) R=7/√3",
      "(a) 60°; (b) sen β=4√3/7, sen γ=5√3/14; (c) R=7/3",
      "(a) 60°; (b) sen β=4√3/7, sen γ=5√3/14; (c) R=7√3/3"
    ],
    "answerIndex": 3,
    "resposta_final": "(a) α=60°; (b) sen β = 4√3/7, sen γ = 5√3/14; (c) R = 7√3/3.",
    "resumo_solucao": "Usa-se a Lei dos Cossenos para obter cos α = 1/2, logo α=60°. Com sen α = √3/2, aplica-se a Lei dos Senos (AC/senβ = AB/senγ = BC/senα) para achar sen β e sen γ. O raio circunscrito vem de 2R = BC/senα = 14/√3, logo R = 7√3/3.",
    "topico": "Polígonos regulares e trigonometria (Lei dos Senos/Cossenos)",
    "aulaOrder": 9
  },
  {
    "id": "enq-ENQ20211-Q7",
    "exame": "ENQ 2021.1",
    "questao": 7,
    "enunciado": "Um segmento que tem um vértice de um triângulo como uma de suas extremidades e a outra extremidade sobre o lado oposto a esse vértice é chamado de ceviana interna do triângulo. O Teorema de Ceva afirma que, em um triângulo ABC, as cevianas internas AA', BB' e CC' se intersectam em um mesmo ponto se, e somente se, (BA'/A'C)·(CB'/B'A)·(AC'/C'B) = 1. [figura: triângulo ABC com as três cevianas AA', BB', CC' concorrentes em um ponto] Prove, utilizando o Teorema de Ceva, que em um triângulo ABC: (a) as três medianas de um triângulo concorrem em um mesmo ponto. (b) as três bissetrizes internas de um triângulo concorrem em um mesmo ponto.",
    "options": [
      "As medianas concorrem, mas as bissetrizes internas não concorrem necessariamente",
      "O Teorema de Ceva não se aplica a bissetrizes, só a medianas",
      "Concorrem apenas se o triângulo for isósceles",
      "Concorrem em ambos os casos, pois o produto das razões vale 1 pelo Teorema de Ceva"
    ],
    "answerIndex": 3,
    "resposta_final": "Demonstração: em ambos os casos o produto das razões vale 1, logo pelo Teorema de Ceva as cevianas (medianas / bissetrizes) concorrem.",
    "resumo_solucao": "(a) Como A', B', C' são pontos médios dos lados, cada uma das razões BA'/A'C, CB'/B'A, AC'/C'B vale 1, logo o produto é 1 e as medianas concorrem. (b) Pelo teorema da bissetriz interna, BA'/A'C = AB/AC, CB'/B'A = BC/AB e AC'/C'B = AC/BC; o produto dessas três razões é 1, logo as bissetrizes concorrem.",
    "topico": "Pontos notáveis e lugares geométricos",
    "aulaOrder": 10
  },
  {
    "id": "enq-ENQ20221-Q7",
    "exame": "ENQ 2022.1",
    "questao": 7,
    "enunciado": "Um sólido é produzido a partir de um cubo de madeira com 2cm de aresta, retirando-se um tetraedro a partir de cada vértice do cubo, como mostrado na figura abaixo. Seis faces do sólido resultante são octógonos regulares, e as outras oito faces são triângulos equiláteros. [figura: cubo de aresta 2 com os oito cantos cortados, formando um sólido com 6 faces octogonais regulares e 8 faces triangulares equiláteras] Calcule o volume do sólido.",
    "options": [
      "V = (56√2 − 56)/6 cm³",
      "V = (28√2 − 28)/3 cm³",
      "V = (56√2 − 56)/3 cm³",
      "V = 8 − 8√2 cm³"
    ],
    "answerIndex": 2,
    "resposta_final": "V = (56√2 − 56)/3 cm³.",
    "resumo_solucao": "Sendo a o lado do octógono e x a aresta lateral dos tetraedros cortados, tem-se a + 2x = 2 e, por Pitágoras (triângulo retângulo isósceles), a = x√2; resolvendo, x = 2 − √2. Cada tetraedro cortado tem volume x³/6, e o volume do sólido resultante é o volume do cubo menos 8 desses tetraedros: V = 2³ − 8·(x³/6) = (56√2−56)/3.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 11
  },
  {
    "id": "enq-ENQ20222-Q1",
    "exame": "ENQ 2022.2",
    "questao": 1,
    "enunciado": "Um octaedro regular está inscrito em um cubo de aresta 1 cm de modo que seus vértices são os centros das faces do cubo, como apresentado na figura abaixo. [figura: cubo de aresta 1 com octaedro regular inscrito cujos vértices são os centros das 6 faces do cubo] Determine: (a) a medida da aresta do octaedro. (b) o volume do octaedro.",
    "options": [
      "(a) aresta = 1 cm; (b) V = 1/6 cm³",
      "(a) aresta = 1/2 cm; (b) V = 1/8 cm³",
      "(a) aresta = √2/2 cm; (b) V = 1/6 cm³",
      "(a) aresta = √2/2 cm; (b) V = 1/3 cm³"
    ],
    "answerIndex": 2,
    "resposta_final": "(a) aresta = √2/2 cm; (b) V = 1/6 cm³.",
    "resumo_solucao": "A seção do octaedro pelo plano médio do cubo é um quadrado cujas diagonais medem 1 (diagonais das faces do cubo), logo seu lado (aresta do octaedro) é √2/2. O octaedro equivale à união de duas pirâmides de base quadrada de lado √2/2 e altura 1/2, dando V = 2·(1/3)·(√2/2)²·(1/2) = 1/6.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 11
  },
  {
    "id": "enq-ENQ20211-Q2",
    "exame": "ENQ 2021.1",
    "questao": 2,
    "enunciado": "O cubo ABCDEFGH da figura tem aresta igual a a. Os pontos M, N e P são os centros das faces AFED, DEHC e CBGH, respectivamente. [figura: cubo ABCDEFGH com M, N, P centros de três faces adjacentes a um vértice comum, formando com o vértice A o tetraedro AMPN] (a) Determine o ângulo entre as faces MPA e MPN do tetraedro AMPN. (b) Determine o volume do tetraedro AMPN.",
    "options": [
      "(a) 135°; (b) V = a³/24",
      "(a) 120°; (b) V = a³/24",
      "(a) 135°; (b) V = a³/12",
      "(a) 90°; (b) V = a³/48"
    ],
    "answerIndex": 0,
    "resposta_final": "(a) 135°; (b) V = a³/24.",
    "resumo_solucao": "O plano MNP é paralelo às faces ABCD e FGHE do cubo; usando o ponto médio I de ED, o ângulo procurado é o ângulo AM̂I = 135°, obtido observando que AM está na diagonal de uma face e MI é paralelo a AD. Para o volume, toma-se MNP como base (área a²/4) e MJ = a/2 como altura (J ponto médio de AD), resultando em V = (1/3)(a²/4)(a/2) = a³/24.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 12
  },
  {
    "id": "enq-ENQ20212-Q6",
    "exame": "ENQ 2021.2",
    "questao": 6,
    "enunciado": "Dois triângulos ABC e BCD são isósceles, retângulos em B e contidos em planos perpendiculares, conforme figura. Determine o volume do sólido ABCD em função da medida a do segmento AB. [figura: dois triângulos retângulos isósceles ABC e BCD, ambos com ângulo reto em B, compartilhando o lado BC, situados em planos perpendiculares entre si, formando um tetraedro ABCD]",
    "options": [
      "V = a³/12",
      "V = a²/6",
      "V = a³/6",
      "V = a³/3"
    ],
    "answerIndex": 2,
    "resposta_final": "V = a³/6.",
    "resumo_solucao": "Como os planos são perpendiculares e BA, BD são perpendiculares à reta de interseção BC, o ângulo ABD é reto, logo BD é perpendicular ao plano da base ABC e serve de altura da pirâmide. Sendo os triângulos isósceles retângulos, BC=AB=a e BD=a; a área da base ABC é a²/2, e o volume é V=(1/3)(a²/2)(a)=a³/6.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 12
  },
  {
    "id": "enq-ENQ20241-Q6",
    "exame": "ENQ 2024.1",
    "questao": 6,
    "enunciado": "O tetraedro regular ABCD tem arestas medindo 2√3. Sobre a aresta AD, toma-se o ponto E tal que AE mede 1. a) Determine a altura do tetraedro ABCE em relação à base ABC. b) Determine a razão entre o volume do tetraedro ABCE e o volume do tetraedro ABCD.",
    "options": [
      "(a) h=√6/3; (b) razão = √3/3",
      "(a) h=√6/3; (b) razão = 1/6",
      "(a) h=2√6/3; (b) razão = √3/6",
      "(a) h=√6/3; (b) razão = √3/6"
    ],
    "answerIndex": 3,
    "resposta_final": "(a) altura h = √6/3; (b) razão V1/V2 = √3/6.",
    "resumo_solucao": "Traça-se a altura AM do triângulo equilátero ABC (AM=3, por Pitágoras) e a altura do tetraedro OD=2√2 (O centro da base, AO=(2/3)AM=2). Por semelhança entre os triângulos ADO e AEP (P pé da altura de E), a altura h de E satisfaz h/OD = AE/AD = 1/(2√3), dando h=√6/3. Como as bases ABC coincidem, a razão de volumes é a razão das alturas h/OD = √3/6.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 12
  },
  {
    "id": "enq-ENQ20242-Q3",
    "exame": "ENQ 2024.2",
    "questao": 3,
    "enunciado": "Sobre a aresta AD de um tetraedro ABCD não necessariamente regular, toma-se um ponto E. Sabendo que AD = 1 e que o volume do tetraedro ABCE é 1/3 do volume do tetraedro ABCD, determine AE. [figura: tetraedro ABCD com ponto E sobre a aresta AD]",
    "options": [
      "AE = 2/3",
      "AE = 1/9",
      "AE = 1/3",
      "AE = 1/2"
    ],
    "answerIndex": 2,
    "resposta_final": "AE = 1/3.",
    "resumo_solucao": "Como os tetraedros ABCE e ABCD compartilham a mesma base ABC, a razão entre os volumes é a razão entre as alturas relativas a essa base, isto é, hE = hD/3. Usando semelhança entre triângulos formados pelas alturas (ou o Teorema de Tales entre planos paralelos à base passando por D e E), conclui-se AE/AD = hE/hD = 1/3, logo AE=1/3.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 12
  },
  {
    "id": "enq-ENQ20251-Q6",
    "exame": "ENQ 2025.1",
    "questao": 6,
    "enunciado": "Considere que o cubo ABCDEFGH da figura abaixo tem volume 1. O sólido da figura é formado retirando-se um tetraedro, a partir do vértice A, de forma que: o semiplano contendo a face IJK forme um ângulo de 135° com o semiplano contendo a face IJDCB, JA = IA, o volume do sólido resultante é 23/24. Determine AI, AJ e AK. [figura: cubo ABCDEFGH de volume 1 com um tetraedro AIJK cortado no vértice A, sendo I e J em duas arestas que partem de A e K na terceira aresta que parte de A]",
    "options": [
      "AI = AJ = 1/√2 e AK = 1/2",
      "AI = AJ = 1/2 e AK = 1/√2",
      "AI = AJ = AK = 1/√2",
      "AI = AJ = 1/√2 e AK = 1/4"
    ],
    "answerIndex": 0,
    "resposta_final": "AI = AJ = 1/√2 e AK = 1/2.",
    "resumo_solucao": "Sendo x=AI=AJ, o triângulo AIJ é retângulo isósceles com IJ=x√2. Usando o ângulo diedro de 135° entre as faces IJK e IJDCB, mostra-se que o triângulo ALK (L ponto médio de IJ) é retângulo isósceles com AL̂K=45°, logo AK=AL=x√2/2. O volume do tetraedro AIJK é x³√2/12, que deve ser igual a 1 − 23/24 = 1/24, resultando em x=1/√2 e AK=1/2.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 12
  },
  {
    "id": "enq-ENQ20252-Q1",
    "exame": "ENQ 2025.2",
    "questao": 1,
    "enunciado": "ABCD é um tetraedro regular de arestas de medida a. Sejam M, N, P e Q os baricentros das faces ABC, DBC, DCA e DAB, respectivamente. [figura: tetraedro regular ABCD com os baricentros M, N, P, Q de suas quatro faces marcados, formando um tetraedro menor MNPQ] (a) Determine a medida da aresta do tetraedro regular MNPQ em função de a. (b) Sabendo que o volume de um tetraedro regular de aresta de medida x é dado por V = x³√2/12, determine a razão entre os volumes dos tetraedros MNPQ e ABCD.",
    "options": [
      "(a) aresta de MNPQ = a/3; (b) razão de volumes = 1/9",
      "(a) aresta de MNPQ = a/3; (b) razão de volumes = 1/27",
      "(a) aresta de MNPQ = a/9; (b) razão de volumes = 1/27",
      "(a) aresta de MNPQ = a/2; (b) razão de volumes = 1/8"
    ],
    "answerIndex": 1,
    "resposta_final": "(a) aresta de MNPQ = a/3; (b) razão dos volumes = 1/27.",
    "resumo_solucao": "Usando o ponto médio R de AB, os baricentros M (de ABC) e Q (de ABD) estão sobre as medianas CR e DR, a 1/3 do ponto R; por semelhança dos triângulos RQM e RDC (razão 1/3), obtém-se MQ = a/3. Como a razão de semelhança entre os tetraedros é 1/3, a razão de volumes é (1/3)³=1/27.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 12
  },
  {
    "id": "enq-ENQ20261-Q6",
    "exame": "ENQ 2026.1",
    "questao": 6,
    "enunciado": "Um tetraedro possui como base um triângulo equilátero de lados medindo 4√3 e arestas laterais iguais medindo 8. (a) Mostre que o pé da altura do tetraedro cai no centro da base. (b) Calcule a altura do tetraedro relativa à base. (c) Calcule o volume deste tetraedro.",
    "options": [
      "(a) demonstrado; (b) DE=2√3; (c) V=48",
      "(a) demonstrado; (b) DE=4√3; (c) V=24",
      "(a) demonstrado; (b) DE=4√3; (c) V=48",
      "(a) demonstrado; (b) DE=4√3; (c) V=96"
    ],
    "answerIndex": 2,
    "resposta_final": "(a) demonstrado; (b) altura DE = 4√3; (c) volume = 48.",
    "resumo_solucao": "Como as arestas laterais DA=DB=DC=8 são iguais, os triângulos retângulos DEA, DEB, DEC (E pé da altura) são congruentes, logo EA=EB=EC e E é o circuncentro (centro) do triângulo equilátero da base. Calcula-se AE=(2/3) da altura da base = 4, e por Pitágoras no triângulo DEA, DE=√(8²−4²)=√48=4√3. O volume é (1/3)·área da base(12√3)·altura(4√3)=48.",
    "topico": "Pirâmides, cilindros e cones",
    "aulaOrder": 12
  },
  {
    "id": "enq-ENQ20231-Q6",
    "exame": "ENQ 2023.1",
    "questao": 6,
    "enunciado": "Sejam dados, no espaço, uma esfera E(O;r) de centro no ponto O e raio r, e um ponto P, com PO = d > r. [figura: esfera E de centro O e raio r, e ponto externo P, com um ponto T na esfera tal que a reta PT é tangente à esfera] (a) Para T ∈ E, mostre que a reta PT é tangente a E se, e somente se, PT = √(d²−r²). (b) Mostre que o lugar geométrico dos pontos T ∈ E tais que PT é tangente a E está contido em um círculo, determinando seu centro, raio e o plano em que está contido.",
    "options": [
      "(a) PT=d−r; (b) círculo de centro O e raio r",
      "(a) PT=√(d²−r²); (b) o lugar geométrico é uma reta, não um círculo",
      "(a) PT=√(d²−r²); (b) círculo de centro H (OH=r²/d) e raio r√(d²−r²)/d",
      "(a) PT=√(d²+r²); (b) círculo de centro H (OH=r²/d) e raio r√(d²−r²)/d"
    ],
    "answerIndex": 2,
    "resposta_final": "(a) PT = √(d²−r²); (b) o lugar geométrico está contido no círculo de centro H (com OH=r²/d) e raio r√(d²−r²)/d, situado no plano perpendicular a OP que passa por H.",
    "resumo_solucao": "(a) OT é raio da esfera, e PT tangente equivale a OT⊥PT, ou seja, o triângulo OPT é retângulo em T, dando PT²+r²=d². (b) Traçando a altura TH do triângulo OPT relativa à hipotenusa OP, obtém-se OH=r²/d (independente de T) e HT=r√(d²−r²)/d; como TH é perpendicular a OP, T pertence ao plano perpendicular a OP que passa por H, e ao círculo de centro H e raio HT.",
    "topico": "Esfera e sólidos de revolução",
    "aulaOrder": 13
  },
  {
    "id": "enq-ENQ20232-Q3",
    "exame": "ENQ 2023.2",
    "questao": 3,
    "enunciado": "Na figura, o plano β contém o centro O da esfera de raio 3, e faz ângulo θ com o plano α. A reta t é a interseção de α e β e sua distância a O é 5. Determine a área do círculo de centro C dado pela interseção de α com a esfera, sabendo que senθ = 2/5. [figura: esfera de raio 3 com centro O contido no plano β; o plano α faz ângulo θ com β; a reta t = α∩β está a distância 5 de O; a interseção de α com a esfera é um círculo de centro C]",
    "options": [
      "Área = 9π",
      "Área = 5π",
      "Área = 4π",
      "Área = 25π"
    ],
    "answerIndex": 1,
    "resposta_final": "Área = 5π.",
    "resumo_solucao": "Constrói-se um triângulo retângulo com hipotenusa OA=5 (distância de O à reta t) e ângulo θ, obtendo o cateto OC = 5·senθ = 2 (ângulo reto em C). Aplicando Pitágoras no triângulo retângulo OCB (B na esfera, OB=3=raio da esfera), obtém-se o raio do círculo de interseção BC²=3²−2²=5, logo BC=√5 e a área do círculo é π·BC²=5π.",
    "topico": "Esfera e sólidos de revolução",
    "aulaOrder": 13
  }
];
