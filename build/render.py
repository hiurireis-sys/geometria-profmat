# -*- coding: utf-8 -*-
import json, os
from jinja2 import Environment, FileSystemLoader

BASE = '/sessions/laughing-nifty-albattani/mnt/outputs/profmat-geometria-site'

with open(os.path.join(BASE, 'build', 'content_data.json'), encoding='utf-8') as f:
    aulas = json.load(f)

with open(os.path.join(BASE, 'assets', 'fixation_bank.js'), encoding='utf-8') as f:
    fx_js = f.read()
    fx_json_str = fx_js.split('=', 1)[1].strip().rstrip(';')
    fixation_bank = json.loads(fx_json_str)

env = Environment(loader=FileSystemLoader(os.path.join(BASE, 'templates')), autoescape=False)

aula_tpl = env.get_template('aula.html.j2')
index_tpl = env.get_template('index.html.j2')

for i, aula in enumerate(aulas):
    prev_aula = aulas[i-1] if i > 0 else None
    next_aula = aulas[i+1] if i < len(aulas)-1 else None
    fixation_count = len(fixation_bank.get(str(aula['id']), []))
    html = aula_tpl.render(aula=aula, prev_aula=prev_aula, next_aula=next_aula, fixation_count=fixation_count)
    out_path = os.path.join(BASE, aula['slug'] + '.html')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('gerado:', out_path)

index_html = index_tpl.render(aulas=aulas)
with open(os.path.join(BASE, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_html)
print('gerado: index.html')
