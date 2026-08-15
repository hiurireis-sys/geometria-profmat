# -*- coding: utf-8 -*-
import json

TOPIC_TO_AULA = {
    "Paralelismo e quadriláteros": 4,
    "Relações métricas no triângulo retângulo e Pitágoras": 6,
    "Círculo": 7,
    "Áreas de figuras planas": 8,
    "Polígonos regulares e trigonometria (Lei dos Senos/Cossenos)": 9,
    "Pontos notáveis e lugares geométricos": 10,
    "Esfera e sólidos de revolução": 13,
}

# override aulaOrder per (exame, questao) for items whose default topic tag
# ("Pirâmides, cilindros e cones") needs to be split between aula 11
# (poliedros/prismas/Euler) and aula 12 (pirâmides/cilindros/cones)
OVERRIDE_AULA = {
    ("ENQ 2021.1", 2): 12,
    ("ENQ 2022.2", 1): 11,
    ("ENQ 2022.1", 7): 11,
    ("ENQ 2025.1", 6): 12,
    ("ENQ 2024.1", 6): 12,
    ("ENQ 2021.2", 6): 12,
    ("ENQ 2024.2", 3): 12,
    ("ENQ 2025.2", 1): 12,
    ("ENQ 2026.1", 6): 12,
}

# manually-authored multiple-choice options (correct option first in list;
# the build script will fix answerIndex=0 and shuffle deterministically per id)
OPTIONS = {
    ("ENQ 2021.1", 2): [
        "(a) 135°; (b) V = a³/24",
        "(a) 120°; (b) V = a³/24",
        "(a) 135°; (b) V = a³/12",
        "(a) 90°; (b) V = a³/48",
    ],
    ("ENQ 2021.1", 7): [
        "Concorrem em ambos os casos, pois o produto das razões vale 1 pelo Teorema de Ceva",
        "As medianas concorrem, mas as bissetrizes internas não concorrem necessariamente",
        "Concorrem apenas se o triângulo for isósceles",
        "O Teorema de Ceva não se aplica a bissetrizes, só a medianas",
    ],
    ("ENQ 2022.2", 1): [
        "(a) aresta = √2/2 cm; (b) V = 1/6 cm³",
        "(a) aresta = 1/2 cm; (b) V = 1/8 cm³",
        "(a) aresta = √2/2 cm; (b) V = 1/3 cm³",
        "(a) aresta = 1 cm; (b) V = 1/6 cm³",
    ],
    ("ENQ 2022.2", 8): [
        "Área = 10√6",
        "Área = 12√6",
        "Área = 10√5",
        "Área = 20√6",
    ],
    ("ENQ 2022.1", 4): [
        "PA·PB = PC·PD em ambos os casos, provado por semelhança AA de triângulos",
        "PA·PB = PC·PD apenas quando P é exterior ao círculo",
        "PA·PD = PB·PC em ambos os casos, provado por congruência de triângulos",
        "A igualdade só vale quando as duas retas são perpendiculares",
    ],
    ("ENQ 2022.1", 7): [
        "V = (56√2 − 56)/3 cm³",
        "V = (56√2 − 56)/6 cm³",
        "V = (28√2 − 28)/3 cm³",
        "V = 8 − 8√2 cm³",
    ],
    ("ENQ 2025.1", 1): [
        "(a) 60°; (b) sen β=4√3/7, sen γ=5√3/14; (c) R=7√3/3",
        "(a) 60°; (b) sen β=5√3/14, sen γ=4√3/7; (c) R=7√3/3",
        "(a) 45°; (b) sen β=4√3/7, sen γ=5√3/14; (c) R=7/√3",
        "(a) 60°; (b) sen β=4√3/7, sen γ=5√3/14; (c) R=7/3",
    ],
    ("ENQ 2025.1", 6): [
        "AI = AJ = 1/√2 e AK = 1/2",
        "AI = AJ = 1/2 e AK = 1/√2",
        "AI = AJ = AK = 1/√2",
        "AI = AJ = 1/√2 e AK = 1/4",
    ],
    ("ENQ 2024.1", 1): [
        "(a) área(ABF)=x, área(CDB)=y, área(EFD)=z; (b) ambas valem S−x−y−z",
        "(a) área(ABF)=y, área(CDB)=z, área(EFD)=x; (b) ambas valem S−x−y−z",
        "(a) área(ABF)=x, área(CDB)=y, área(EFD)=z; (b) as áreas são sempre diferentes",
        "(a) área(ABF)=2x, área(CDB)=2y, área(EFD)=2z; (b) ambas valem S−x−y−z",
    ],
    ("ENQ 2024.1", 6): [
        "(a) h=√6/3; (b) razão = √3/6",
        "(a) h=√6/3; (b) razão = 1/6",
        "(a) h=2√6/3; (b) razão = √3/6",
        "(a) h=√6/3; (b) razão = √3/3",
    ],
    ("ENQ 2021.2", 3): [
        "Demonstrado via triângulo retângulo inscrito com diâmetro BD, usando ângulos inscritos",
        "Demonstrado apenas para triângulos retângulos",
        "A lei dos senos só vale se o triângulo for isósceles",
        "Demonstrado via Teorema de Pitágoras diretamente, sem usar ângulo inscrito",
    ],
    ("ENQ 2021.2", 5): [
        "(a) ℓₙ=2rₙ; (b) P=4ℓ(2+√2); (c) A=πℓ²/2",
        "(a) ℓₙ=2rₙ; (b) P=4ℓ(1+√2); (c) A=πℓ²/2",
        "(a) ℓₙ=rₙ; (b) P=4ℓ(2+√2); (c) A=πℓ²/4",
        "(a) ℓₙ=2rₙ; (b) P=2ℓ(2+√2); (c) A=πℓ²",
    ],
    ("ENQ 2021.2", 6): [
        "V = a³/6",
        "V = a³/3",
        "V = a³/12",
        "V = a²/6",
    ],
    ("ENQ 2023.1", 2): [
        "As três implicações se confirmam: a²+c²=b²+d² ⇔ θ=90°",
        "Só a implicação (a)⇒ é verdadeira; a recíproca falha",
        "A igualdade a²+c²=b²+d² nunca implica θ=90°",
        "θ=90° apenas se o quadrilátero for um losango",
    ],
    ("ENQ 2023.1", 6): [
        "(a) PT=√(d²−r²); (b) círculo de centro H (OH=r²/d) e raio r√(d²−r²)/d",
        "(a) PT=√(d²+r²); (b) círculo de centro H (OH=r²/d) e raio r√(d²−r²)/d",
        "(a) PT=√(d²−r²); (b) o lugar geométrico é uma reta, não um círculo",
        "(a) PT=d−r; (b) círculo de centro O e raio r",
    ],
    ("ENQ 2023.1", 7): [
        "(a) S(θ)=(25/2)senθ; (b) área máx = 25/2 em θ=π/2, x=5√2",
        "(a) S(θ)=25senθ; (b) área máx = 25 em θ=π/2, x=5√2",
        "(a) S(θ)=(25/2)senθ; (b) área máx = 25/2 em θ=π/3, x=5",
        "(a) S(θ)=(25/2)cosθ; (b) área máx = 25/2 em θ=0",
    ],
    ("ENQ 2024.2", 2): [
        "(a) demonstrado; (b) sen15°=(√6−√2)/4, cos15°=(√6+√2)/4, tg15°=2−√3",
        "(a) demonstrado; (b) sen15°=(√6+√2)/4, cos15°=(√6−√2)/4, tg15°=2+√3",
        "(a) demonstrado; (b) sen15°=1/4, cos15°=√15/4, tg15°=1/√15",
        "(a) demonstrado; (b) sen15°=(√6−√2)/4, cos15°=(√6+√2)/4, tg15°=2+√3",
    ],
    ("ENQ 2024.2", 3): [
        "AE = 1/3",
        "AE = 1/2",
        "AE = 2/3",
        "AE = 1/9",
    ],
    ("ENQ 2025.2", 1): [
        "(a) aresta de MNPQ = a/3; (b) razão de volumes = 1/27",
        "(a) aresta de MNPQ = a/2; (b) razão de volumes = 1/8",
        "(a) aresta de MNPQ = a/3; (b) razão de volumes = 1/9",
        "(a) aresta de MNPQ = a/9; (b) razão de volumes = 1/27",
    ],
    ("ENQ 2025.2", 5): [
        "(a) AC=2√(ac); (b) AB=2√(ab), BC=2√(bc); (c) b=ac/(a+2√(ac)+c)",
        "(a) AC=2√(ac); (b) AB=2√(ab), BC=2√(bc); (c) b=(a+c)/2",
        "(a) AC=a+c; (b) AB=a+b, BC=b+c; (c) b=√(ac)",
        "(a) AC=√(ac); (b) AB=√(ab), BC=√(bc); (c) b=ac/(a+2√(ac)+c)",
    ],
    ("ENQ 2023.2", 3): [
        "Área = 5π",
        "Área = 9π",
        "Área = 4π",
        "Área = 25π",
    ],
    ("ENQ 2023.2", 7): [
        "(a) a=√(4r²−ℓ²)/2; (b) demonstrado; (c) L=r√(2−√3)",
        "(a) a=√(4r²−ℓ²); (b) demonstrado; (c) L=r√(2−√3)",
        "(a) a=√(4r²−ℓ²)/2; (b) demonstrado; (c) L=r√(2+√3)",
        "(a) a=(4r²−ℓ²)/2; (b) demonstrado; (c) L=r(2−√3)",
    ],
    ("ENQ 2026.1", 2): [
        "As quatro relações métricas (ah=bc, c²=am, b²=an, a²=b²+c², h²=mn) demonstradas por semelhança",
        "Apenas a relação de Pitágoras a²=b²+c² pode ser provada por semelhança",
        "As relações valem apenas se o triângulo for isósceles",
        "h²=mn não decorre da semelhança, precisa de área",
    ],
    ("ENQ 2026.1", 6): [
        "(a) demonstrado; (b) DE=4√3; (c) V=48",
        "(a) demonstrado; (b) DE=4√3; (c) V=96",
        "(a) demonstrado; (b) DE=2√3; (c) V=48",
        "(a) demonstrado; (b) DE=4√3; (c) V=24",
    ],
}

def main():
    with open('/sessions/laughing-nifty-albattani/mnt/outputs/enq_geometria.json', encoding='utf-8') as f:
        items = json.load(f)

    bank = []
    for it in items:
        key = (it['exame'], it['questao'])
        aula = OVERRIDE_AULA.get(key, TOPIC_TO_AULA.get(it['topico']))
        if aula is None:
            raise SystemExit(f"Sem aula mapeada para {key} / {it['topico']}")
        opts = OPTIONS.get(key)
        if opts is None:
            raise SystemExit(f"Sem opções para {key}")
        qid = (it['exame'] + '-Q' + str(it['questao'])).replace(' ', '').replace('.', '')
        bank.append({
            "id": "enq-" + qid,
            "exame": it['exame'],
            "questao": it['questao'],
            "enunciado": it['enunciado'],
            "options": opts,
            "answerIndex": 0,
            "resposta_final": it['resposta_final'],
            "resumo_solucao": it['resumo_solucao'],
            "topico": it['topico'],
            "aulaOrder": aula,
        })

    bank.sort(key=lambda x: (x['aulaOrder'], x['exame']))
    js = "// Banco de questões de geometria extraídas dos gabaritos oficiais do ENQ (2021.1 a 2026.1)\n"
    js += "// Gerado automaticamente a partir de enq_geometria.json\n"
    js += "window.ENQ_BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";\n"
    out_path = '/sessions/laughing-nifty-albattani/mnt/outputs/profmat-geometria-site/assets/enq_bank.js'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js)
    print("Escrito:", out_path, "| total questões:", len(bank))
    from collections import Counter
    c = Counter(x['aulaOrder'] for x in bank)
    print("Distribuição por aula:", dict(sorted(c.items())))

if __name__ == '__main__':
    main()
