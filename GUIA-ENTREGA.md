# GUIA DE ENTREGA — Portfólio DIW

## 1. Rodar localmente (até 5 minutos)

Extraia o ZIP. Abra um terminal dentro da pasta `portfolio-gustavo` e execute:

```bash
python3 -m http.server 8000
```

Em Brave ou outro navegador, acesse http://localhost:8000. Para parar, use **Ctrl+C**.

## 2. Personalizações obrigatórias

- `script.js` já contém o e-mail de destino **guccs.cina@gmail.com**, que ficará público. Confira se está correto.
- Teste o formulário, confirme o e-mail de ativação do FormSubmit e envie outro teste.
- Confira a ordem dos projetos em `PROJECTS`: `sortDate` foi preenchido provisoriamente por falta da data exata.
- Substitua as artes `assets/hub-preview.svg` e `assets/trilho-preview.svg` por capturas reais de funcionamento (pode colocar `assets/hub-real.png` e `assets/trilho-real.png`, alterando `image:` no JS).
- Opcional: configure `LINKEDIN_URL`, se quiser exibir seu LinkedIn.

## 3. Figma (sprint 01)

Abra https://figma.com, crie um arquivo novo chamado `Portfólio Profissional — DIW — Wireframes`. Importe `docs/wireframe-desktop.png` e `docs/wireframe-mobile.png`. Elas são bases de média fidelidade; organize-as em quadros e capture a URL do Figma. Acrescente a URL ao README.

**Atenção:** só importar PNG não produz componentes editáveis no Figma. Se houver tempo, redesenhe os blocos principais com retângulos, textos e frames. Não declare protótipo interativo se não houver interações.

## 4. GitHub (sprint 01)

Na interface do GitHub, crie um repositório público vazio `portfolio-gustavo`, SEM inicializar com README (o ZIP já contém um).

Na pasta descompactada, execute:

```bash
git init
git add .
git commit -m "feat: cria estrutura inicial do portfolio"
git branch -M main
git remote add origin https://github.com/owatsuki/portfolio-gustavo.git
git push -u origin main
```

**O que cada comando faz:** `git init` inicia o repositório local; `git add .` prepara arquivos; `git commit` registra a versão; `git branch -M main` escolhe o nome da branch; `git remote add origin` indica o destino remoto; `git push` envia os commits. Confira os arquivos na página do GitHub.

Caso já exista `origin`, não use `remote add` novamente; confira com `git remote -v`.

## 5. Vercel (sprint 03)

1. Entre em https://vercel.com/ com GitHub.
2. Clique **Add New → Project** e importe `portfolio-gustavo`.
3. Framework: **Other**; diretório raiz: `.`, sem build; Output Directory: `.`.
4. Clique **Deploy**, aguarde e abra a URL pública.
5. Teste o menu, idioma, projetos, imagens, formulário e layout em mobile na URL pública.
6. Substitua o placeholder da URL no README, faça `git add README.md && git commit -m "docs: adiciona URL de producao" && git push`.

## 6. Última verificação antes de enviar

- [ ] Link público da Vercel abre sem erro.
- [ ] GitHub público, README atualizado.
- [ ] Figma com os quadros de wireframe, link documentado.
- [ ] Apresentação PT/EN funciona.
- [ ] Timeline em ordem cronológica real.
- [ ] Capturas REAIS de ambos os projetos, não apenas artes ilustrativas.
- [ ] Contato envia mensagem e e-mail realmente chega.
- [ ] Layout utilizável em mobile.
- [ ] URLs e informações pessoais revisadas.

**Não perca a entrega por tentar finalizar efeitos visuais.** Priorize URL pública, README e funcionamento real.

## Depois da entrega: temas, animações e domínio `.dev`

Deixe para depois os temas alternativos (claro, 8-bit) e as animações (gato/café/games), para não atrasar a publicação. A Vercel oferece uma URL `*.vercel.app`. Um domínio `.dev` é opcional e requer posse/registro do domínio e configuração na Vercel em **Settings → Domains** com HTTPS válido.
