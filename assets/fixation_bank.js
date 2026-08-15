// Exercícios de fixação por aula (independentes do banco ENQ)
window.FIXATION_BANK = {
  "1": [
    {
      "type": "mc",
      "stem": "Dois ângulos são suplementares. Um deles mede 35°. Quanto mede o outro?",
      "options": [
        "145°",
        "55°",
        "65°",
        "215°"
      ],
      "answerIndex": 0,
      "explain": "Suplementares somam 180°: 180° − 35° = 145°.",
      "id": "fix-1-1"
    },
    {
      "type": "mc",
      "stem": "Se dois ângulos são opostos pelo vértice, o que podemos afirmar?",
      "options": [
        "São sempre congruentes",
        "São sempre complementares",
        "São sempre suplementares",
        "Nada pode ser afirmado sem mais dados"
      ],
      "answerIndex": 0,
      "explain": "É exatamente o Teorema 1.1 desta aula.",
      "id": "fix-1-2"
    },
    {
      "type": "numeric",
      "stem": "Um ângulo mede o dobro do seu complemento. Qual a medida desse ângulo (em graus)?",
      "answer": [
        "60"
      ],
      "explain": "x = 2(90−x) ⇒ x=180−2x ⇒ 3x=180 ⇒ x=60°.",
      "id": "fix-1-3"
    },
    {
      "type": "mc",
      "stem": "Qual das afirmações abaixo é um postulado (não uma proposição demonstrada)?",
      "options": [
        "Por dois pontos distintos passa uma única reta",
        "Ângulos opostos pelo vértice são congruentes",
        "A soma dos ângulos internos de um triângulo é 180°",
        "Em todo triângulo isósceles os ângulos da base são congruentes"
      ],
      "answerIndex": 0,
      "explain": "As demais são teoremas demonstrados a partir dos postulados.",
      "id": "fix-1-4"
    }
  ],
  "2": [
    {
      "type": "mc",
      "stem": "Para usar o caso ALA na comparação de dois triângulos, o que precisamos verificar?",
      "options": [
        "Dois ângulos e o lado compreendido entre eles",
        "Três lados",
        "Dois lados e um ângulo qualquer",
        "Um ângulo e dois lados não adjacentes a ele"
      ],
      "answerIndex": 0,
      "explain": "ALA exige o lado *entre* os dois ângulos congruentes.",
      "id": "fix-2-1"
    },
    {
      "type": "mc",
      "stem": "Em um triângulo isósceles ABC (AB=AC), a bissetriz do ângulo do vértice A é também:",
      "options": [
        "mediana e altura relativas à base",
        "apenas mediana, nunca altura",
        "apenas altura, nunca mediana",
        "bissetriz de B e de C também"
      ],
      "answerIndex": 0,
      "explain": "Consequência direta do Teorema 2.1, via congruência ABM ≡ ACM.",
      "id": "fix-2-2"
    },
    {
      "type": "numeric",
      "stem": "Num triângulo isósceles, o ângulo do vértice mede 40°. Quanto mede cada ângulo da base?",
      "answer": [
        "70"
      ],
      "explain": "Base: (180−40)/2 = 70° cada.",
      "id": "fix-2-3"
    },
    {
      "type": "mc",
      "stem": "Qual NÃO é um caso válido de congruência de triângulos?",
      "options": [
        "LLA (Lado-Lado-Ângulo, ângulo não compreendido)",
        "LAL",
        "ALA",
        "LLL"
      ],
      "answerIndex": 0,
      "explain": "LLA em geral não garante congruência (podem existir dois triângulos não congruentes com essas medidas).",
      "id": "fix-2-4"
    }
  ],
  "3": [
    {
      "type": "mc",
      "stem": "Um triângulo tem lados 5, 9 e x. Quais valores x NÃO pode assumir?",
      "options": [
        "x ≤ 4 ou x ≥ 14",
        "x ≤ 5 ou x ≥ 9",
        "x ≤ 9 ou x ≥ 5",
        "Nenhuma restrição"
      ],
      "answerIndex": 0,
      "explain": "Desigualdade triangular: 9−5 < x < 9+5, ou seja 4<x<14.",
      "id": "fix-3-1"
    },
    {
      "type": "mc",
      "stem": "O ângulo externo de um triângulo, em relação a um vértice, é sempre:",
      "options": [
        "maior que cada ângulo interno não adjacente",
        "menor que cada ângulo interno não adjacente",
        "igual à soma dos três ângulos internos",
        "igual ao ângulo interno adjacente"
      ],
      "answerIndex": 0,
      "explain": "Teorema do Ângulo Externo (3.1).",
      "id": "fix-3-2"
    },
    {
      "type": "mc",
      "stem": "Em um triângulo ABC, AB=7 e AC=10. Qual afirmação é verdadeira?",
      "options": [
        "Ĉ > B̂ (o ângulo oposto ao maior lado é maior)",
        "B̂ > Ĉ",
        "B̂ = Ĉ",
        "Não é possível comparar sem saber BC"
      ],
      "answerIndex": 0,
      "explain": "Ao maior lado (AC=10) opõe-se o maior ângulo (B̂)... atenção: o ângulo oposto a AC é B̂. Como AC>AB, B̂>Ĉ é o que o Teorema 3.2 garante — revise com cuidado qual ângulo se opõe a qual lado.",
      "id": "fix-3-3"
    },
    {
      "type": "numeric",
      "stem": "Dois lados de um triângulo medem 8 e 8 (isósceles). Qual o MAIOR valor inteiro possível para o terceiro lado?",
      "answer": [
        "15"
      ],
      "explain": "Precisa ser menor que 8+8=16, logo o maior inteiro é 15.",
      "id": "fix-3-4"
    }
  ],
  "4": [
    {
      "type": "mc",
      "stem": "Duas retas paralelas cortadas por uma transversal formam ângulos alternos internos de 72° e (2x)°. Qual x?",
      "options": [
        "36",
        "72",
        "54",
        "18"
      ],
      "answerIndex": 0,
      "explain": "Alternos internos são congruentes: 2x=72 ⇒ x=36.",
      "id": "fix-4-1"
    },
    {
      "type": "numeric",
      "stem": "Num triângulo, dois ângulos medem 55° e 65°. Quanto mede o terceiro?",
      "answer": [
        "60"
      ],
      "explain": "180−55−65=60°.",
      "id": "fix-4-2"
    },
    {
      "type": "mc",
      "stem": "Em um paralelogramo, o que é sempre verdade?",
      "options": [
        "As diagonais se bissectam",
        "As diagonais são congruentes",
        "As diagonais são perpendiculares",
        "Os quatro ângulos são retos"
      ],
      "answerIndex": 0,
      "explain": "Teorema 4.3. As demais só valem em casos particulares (retângulo, losango).",
      "id": "fix-4-3"
    },
    {
      "type": "numeric",
      "stem": "Num triângulo, a base média mede 6 cm. Quanto mede o lado ao qual ela é paralela?",
      "answer": [
        "12"
      ],
      "explain": "Base média = metade do lado correspondente (Teorema 4.4), logo o lado mede 12 cm.",
      "id": "fix-4-4"
    }
  ],
  "5": [
    {
      "type": "mc",
      "stem": "Qual critério de semelhança pede apenas dois pares de ângulos congruentes?",
      "options": [
        "AA",
        "LAL~",
        "LLL~",
        "Nenhum, sempre precisa de lados"
      ],
      "answerIndex": 0,
      "explain": "Teorema 5.2 — o terceiro ângulo já fica determinado pela soma 180°.",
      "id": "fix-5-1"
    },
    {
      "type": "numeric",
      "stem": "Em ABC, AB=9, AC=12, e a bissetriz de  divide BC=14 em BD e DC. Quanto mede DC?",
      "answer": [
        "8"
      ],
      "explain": "BD/DC = 9/12 = 3/4. BD+DC=14 ⇒ DC = 14·4/7 = 8.",
      "id": "fix-5-2"
    },
    {
      "type": "mc",
      "stem": "Se um feixe de retas paralelas corta duas transversais, os segmentos determinados são:",
      "options": [
        "proporcionais",
        "sempre congruentes",
        "sempre perpendiculares entre si",
        "não relacionados"
      ],
      "answerIndex": 0,
      "explain": "É o Teorema de Tales (5.1).",
      "id": "fix-5-3"
    },
    {
      "type": "numeric",
      "stem": "Dois triângulos semelhantes têm razão de semelhança 3. Se o menor tem perímetro 20, qual o perímetro do maior?",
      "answer": [
        "60"
      ],
      "explain": "Perímetros escalam na mesma razão que os lados: 20×3=60.",
      "id": "fix-5-4"
    }
  ],
  "6": [
    {
      "type": "numeric",
      "stem": "Num triângulo retângulo, os catetos medem 6 e 8. Quanto mede a hipotenusa?",
      "answer": [
        "10"
      ],
      "explain": "Pitágoras: √(36+64)=√100=10.",
      "id": "fix-6-1"
    },
    {
      "type": "numeric",
      "stem": "Na hipotenusa de um triângulo retângulo, m=4 e n=9 (projeções dos catetos). Quanto mede a altura h relativa à hipotenusa?",
      "answer": [
        "6"
      ],
      "explain": "h²=mn=36 ⇒ h=6.",
      "id": "fix-6-2"
    },
    {
      "type": "mc",
      "stem": "A relação c² = a·m (c cateto, a hipotenusa, m projeção de c) vem de qual semelhança?",
      "options": [
        "ABC ~ HBA",
        "ABC ~ HAC",
        "HBA ~ HAC",
        "Nenhuma; é axioma"
      ],
      "answerIndex": 0,
      "explain": "Ver demonstração do Teorema 6.2.",
      "id": "fix-6-3"
    },
    {
      "type": "numeric",
      "stem": "Um triângulo tem lados 9, 12 e 15. Ele é retângulo? Responda 'sim' ou 'nao'.",
      "answer": [
        "sim"
      ],
      "explain": "9²+12²=81+144=225=15². Vale Pitágoras, logo é retângulo (recíproca).",
      "id": "fix-6-4"
    }
  ],
  "7": [
    {
      "type": "numeric",
      "stem": "Um ângulo central mede 80°. Quanto mede o ângulo inscrito que subtende o mesmo arco?",
      "answer": [
        "40"
      ],
      "explain": "Ângulo inscrito = metade do central (Teorema 7.1): 80/2=40°.",
      "id": "fix-7-1"
    },
    {
      "type": "mc",
      "stem": "Um ângulo inscrito que subtende um diâmetro mede sempre:",
      "options": [
        "90°",
        "180°",
        "45°",
        "depende do raio"
      ],
      "answerIndex": 0,
      "explain": "O ângulo central correspondente é raso (180°), logo o inscrito é 90°.",
      "id": "fix-7-2"
    },
    {
      "type": "numeric",
      "stem": "De um ponto P externo a uma circunferência, PA=4 e PB=9 (secante). O segmento tangente PT mede quanto?",
      "answer": [
        "6"
      ],
      "explain": "PT²=PA·PB=36 ⇒ PT=6.",
      "id": "fix-7-3"
    },
    {
      "type": "mc",
      "stem": "No caso de P interno à circunferência (duas cordas se cruzando em P), a Potência de Ponto usa qual critério de semelhança na demonstração?",
      "options": [
        "AA (ângulos inscritos no mesmo arco + opostos pelo vértice)",
        "LAL (lados proporcionais e ângulo compreendido)",
        "LLL",
        "Não usa semelhança, usa Pitágoras"
      ],
      "answerIndex": 0,
      "explain": "Ver demonstração do Teorema 7.2, caso interno.",
      "id": "fix-7-4"
    }
  ],
  "8": [
    {
      "type": "numeric",
      "stem": "Um triângulo tem lados AB=8, AC=10 e ângulo A=30°. Qual sua área? (use sen30°=1/2)",
      "answer": [
        "20"
      ],
      "explain": "S=(8·10·0,5)/2=20.",
      "id": "fix-8-1"
    },
    {
      "type": "mc",
      "stem": "Se a razão de semelhança entre dois triângulos é 4, qual a razão entre suas áreas?",
      "options": [
        "16",
        "4",
        "8",
        "2"
      ],
      "answerIndex": 0,
      "explain": "Razão de áreas = quadrado da razão de semelhança: 4²=16.",
      "id": "fix-8-2"
    },
    {
      "type": "numeric",
      "stem": "Um trapézio tem bases 10 e 6, e altura 5. Qual sua área?",
      "answer": [
        "40"
      ],
      "explain": "S=((10+6)·5)/2=40.",
      "id": "fix-8-3"
    },
    {
      "type": "mc",
      "stem": "A fórmula S=(ab·senC)/2 é útil principalmente porque:",
      "options": [
        "dispensa conhecer a altura do triângulo",
        "só funciona em triângulos retângulos",
        "substitui a fórmula de Heron sempre",
        "exige conhecer os três lados"
      ],
      "answerIndex": 0,
      "explain": "Basta dois lados e o ângulo entre eles — não precisa calcular a altura separadamente.",
      "id": "fix-8-4"
    }
  ],
  "9": [
    {
      "type": "numeric",
      "stem": "Num triângulo, a=10, B=60° e C=70°. Qual o valor de A (em graus)?",
      "answer": [
        "50"
      ],
      "explain": "180−60−70=50°.",
      "id": "fix-9-1"
    },
    {
      "type": "mc",
      "stem": "A Lei dos Cossenos é uma generalização de qual teorema, quando o ângulo é 90°?",
      "options": [
        "Teorema de Pitágoras",
        "Lei dos Senos",
        "Teorema da Bissetriz",
        "Teorema de Ceva"
      ],
      "answerIndex": 0,
      "explain": "cos90°=0, restando a²=b²+c².",
      "id": "fix-9-2"
    },
    {
      "type": "numeric",
      "stem": "Num triângulo com a=6 e A=30°, qual o raio R do círculo circunscrito? (use sen30°=1/2)",
      "answer": [
        "6",
        "6.0"
      ],
      "explain": "2R=a/senA=6/(1/2)=12 ⇒ R=6.",
      "id": "fix-9-3"
    },
    {
      "type": "mc",
      "stem": "O apótema de um polígono regular é:",
      "options": [
        "a distância do centro a um lado",
        "a distância do centro a um vértice",
        "o próprio lado do polígono",
        "metade da diagonal"
      ],
      "answerIndex": 0,
      "explain": "Definição usada na Aula 9.",
      "id": "fix-9-4"
    }
  ],
  "10": [
    {
      "type": "mc",
      "stem": "O incentro de um triângulo é o ponto de encontro de:",
      "options": [
        "bissetrizes internas",
        "medianas",
        "mediatrizes",
        "alturas"
      ],
      "answerIndex": 0,
      "explain": "Por definição — é também centro da circunferência inscrita.",
      "id": "fix-10-1"
    },
    {
      "type": "numeric",
      "stem": "No baricentro G, a mediana AM tem AG = 2·GM. Se GM=5, quanto mede AM?",
      "answer": [
        "15"
      ],
      "explain": "AG=10, AM=AG+GM=15.",
      "id": "fix-10-2"
    },
    {
      "type": "mc",
      "stem": "O Teorema de Ceva é usado para provar que três cevianas concorrem quando:",
      "options": [
        "o produto de três razões de segmentos vale 1",
        "a soma de três ângulos vale 180°",
        "os três lados são proporcionais",
        "nenhuma das anteriores"
      ],
      "answerIndex": 0,
      "explain": "Enunciado do Teorema de Ceva desta aula.",
      "id": "fix-10-3"
    },
    {
      "type": "mc",
      "stem": "A mediatriz de um segmento é o lugar geométrico dos pontos:",
      "options": [
        "equidistantes das duas extremidades",
        "que estão sobre o segmento",
        "equidistantes de duas retas",
        "a uma distância fixa do ponto médio"
      ],
      "answerIndex": 0,
      "explain": "Definição de mediatriz como LG.",
      "id": "fix-10-4"
    }
  ],
  "11": [
    {
      "type": "numeric",
      "stem": "Um poliedro convexo tem 8 vértices e 12 arestas. Quantas faces tem, pela Relação de Euler?",
      "answer": [
        "6"
      ],
      "explain": "V−A+F=2 ⇒ 8−12+F=2 ⇒ F=6 (é um cubo!).",
      "id": "fix-11-1"
    },
    {
      "type": "mc",
      "stem": "Quantos poliedros de Platão (regulares) existem?",
      "options": [
        "5",
        "4",
        "6",
        "infinitos"
      ],
      "answerIndex": 0,
      "explain": "Tetraedro, cubo, octaedro, dodecaedro, icosaedro.",
      "id": "fix-11-2"
    },
    {
      "type": "numeric",
      "stem": "Um prisma reto tem base de área 15 cm² e altura 7 cm. Qual seu volume?",
      "answer": [
        "105"
      ],
      "explain": "V=S_base·h=15×7=105 cm³.",
      "id": "fix-11-3"
    },
    {
      "type": "mc",
      "stem": "O Princípio de Cavalieri compara volumes usando:",
      "options": [
        "áreas de seções por planos paralelos a uma base comum",
        "apenas as arestas dos sólidos",
        "somente o número de faces",
        "a razão entre alturas apenas"
      ],
      "answerIndex": 0,
      "explain": "Definição do princípio usada nesta aula.",
      "id": "fix-11-4"
    }
  ],
  "12": [
    {
      "type": "numeric",
      "stem": "Uma pirâmide tem base de área 24 cm² e altura 9 cm. Qual seu volume?",
      "answer": [
        "72"
      ],
      "explain": "V=(1/3)·24·9=72 cm³.",
      "id": "fix-12-1"
    },
    {
      "type": "mc",
      "stem": "Se dois tetraedros compartilham a mesma base, a razão de seus volumes é igual à razão:",
      "options": [
        "das alturas relativas a essa base",
        "dos quadrados das alturas",
        "dos cubos das alturas",
        "das áreas das bases opostas"
      ],
      "answerIndex": 0,
      "explain": "Mesma base ⇒ V proporcional à altura (Teorema 12.1).",
      "id": "fix-12-2"
    },
    {
      "type": "numeric",
      "stem": "Um cone tem raio 3 e altura 4. Qual sua geratriz?",
      "answer": [
        "5"
      ],
      "explain": "g=√(3²+4²)=5 (Pitágoras).",
      "id": "fix-12-3"
    },
    {
      "type": "mc",
      "stem": "Se um tetraedro menor é obtido do maior por uma semelhança de razão 1/2, a razão dos volumes é:",
      "options": [
        "1/8",
        "1/2",
        "1/4",
        "1/16"
      ],
      "answerIndex": 0,
      "explain": "Razão de volumes = (razão linear)³ = (1/2)³=1/8.",
      "id": "fix-12-4"
    }
  ],
  "13": [
    {
      "type": "numeric",
      "stem": "Uma esfera tem raio 10. Um plano corta a 6 do centro. Qual o raio do círculo-seção?",
      "answer": [
        "8"
      ],
      "explain": "√(10²−6²)=√64=8.",
      "id": "fix-13-1"
    },
    {
      "type": "mc",
      "stem": "A área da superfície de uma esfera de raio r é:",
      "options": [
        "4πr²",
        "πr²",
        "2πr²",
        "(4/3)πr³"
      ],
      "answerIndex": 0,
      "explain": "Fórmula desta aula.",
      "id": "fix-13-2"
    },
    {
      "type": "numeric",
      "stem": "Uma esfera tem raio 3. Qual seu volume, em termos de π? (escreva como 'Nπ', ex: '36pi')",
      "answer": [
        "36pi",
        "36π",
        "(4/3)pi*27",
        "36 pi"
      ],
      "explain": "V=(4/3)π(3³)=(4/3)π·27=36π.",
      "id": "fix-13-3"
    },
    {
      "type": "mc",
      "stem": "Se PT é tangente a uma esfera de raio r a partir de um ponto P com PO=d, então PT vale:",
      "options": [
        "√(d²−r²)",
        "d−r",
        "√(d²+r²)",
        "d/r"
      ],
      "answerIndex": 0,
      "explain": "Pitágoras no triângulo retângulo OPT (Teorema 13's aplicação, Aula 13).",
      "id": "fix-13-4"
    }
  ]
};
