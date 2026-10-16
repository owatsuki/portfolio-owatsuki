'use strict';

// CONFIGURAÇÃO OBRIGATÓRIA ANTES DA ENTREGA:
// Use aqui o e-mail no qual deseja receber mensagens. Será público no site.
// O FormSubmit exige ativação pelo e-mail recebido na primeira tentativa.
const CONFIG = {
  CONTACT_EMAIL: 'guccs.cina@gmail.com',
  LINKEDIN_URL: ''
};

// Datas de ordenação são PROVISÓRIAS, pois os meses exatos ainda não foram confirmados.
// Confirme-as e atualize a timeline antes da entrega final.
const PROJECTS = [
  {
    id: 'hub',
    title: 'Hub Universitário',
    sortDate: '2026-08-01',
    period: '2026',
    image: 'assets/hub-preview.svg',
    github: 'https://github.com/DanielFigues/hub-universitario',
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot'],
    description: {
      pt: 'Plataforma acadêmica para descobrir oficinas, eventos, atividades e acompanhar inscrições.',
      en: 'Academic platform for discovering workshops, events, activities and registrations.'
    },
    contribution: {
      pt: 'Contribuição: back-end, documentação, correção de bugs e testes.',
      en: 'My role: back-end, documentation, bug fixes and testing.'
    }
  },
  {
    id: 'trilho',
    title: 'Trilhô',
    sortDate: '2026-09-01',
    period: '2026',
    image: 'assets/trilho-preview.svg',
    github: 'https://github.com/ICEI-PUC-Minas-CC-TI/plu-cc-2026-2-ti2-4354100-plu-cc-2026-2-ti2-4354100-group-1',
    tags: ['JavaScript', 'HTML', 'CSS'], // confirme tecnologias exatas antes da entrega
    description: {
      pt: 'Aplicação desenvolvida em equipe para organizar e explorar experiências de trilhas.',
      en: 'Team-developed application to organize and explore hiking experiences.'
    },
    contribution: {
      pt: 'Contribuição: implementação do módulo de favoritos.',
      en: 'My role: implementation of the favorites module.'
    }
  }
];

const UI = {
  pt: {
    navAbout:'Sobre',navProjects:'Projetos',navExperience:'Experiências',navContact:'Contato',heroKicker:'PORTFÓLIO / 2026',heroHello:'Olá, eu sou',heroRole:'Estudante de Ciência da Computação · PUC Minas',heroDesc:'Gosto de entender problemas, construir soluções e transformar boas ideias em software. Entre código, aprendizado e novos projetos.',viewProjects:'Ver projetos',getInTouch:'Entrar em contato',heroMeta:'Desenvolvimento · Tecnologia · Criatividade',scrollDown:'ROLAR PARA EXPLORAR',sectionAbout:'SOBRE MIM',aboutEyebrow:'UM POUCO SOBRE MIM',aboutTitle:'Curiosidade que vira <em>solução.</em>',aboutP1:'Sou estudante de Ciência da Computação na PUC Minas, com interesse especial em desenvolvimento de software e back-end.',aboutP2:'Nos projetos acadêmicos, venho trabalhando com implementação de funcionalidades, documentação técnica, correção de bugs e criação de testes. Busco evoluir construindo aplicações úteis e compreendendo suas decisões técnicas.',note1:'Código limpo e manutenção',note2:'Aprendizado contínuo',note3:'Colaboração e resolução de problemas',aboutQuote:'Uma boa ideia fica melhor quando alguém consegue transformá-la em algo que funciona.',sectionProjects:'PROJETOS',projectEyebrow:'CÓDIGO NA PRÁTICA',projectsTitle:'Projetos <em>selecionados.</em>',projectsIntro:'Algumas experiências de desenvolvimento, apresentadas em ordem cronológica — do mais antigo ao mais recente.',projectsFootnote:'Imagens ilustrativas, não capturas reais. Substitua-as por prints ou GIFs das aplicações para cumprir integralmente o enunciado.',viewSource:'Ver repositório',previewAlt:'Prévia ilustrativa do projeto',sectionExperience:'EXPERIÊNCIAS',experienceEyebrow:'EM CONSTRUÇÃO',experienceTitle:'Minha <em>trajetória.</em>',experienceIntro:'Uma combinação de formação acadêmica, desenvolvimento colaborativo e evolução técnica.',ongoing:'Em andamento',exp1Title:'Bacharelado em Ciência da Computação',exp1Desc:'Formação acadêmica em programação, estruturas de dados, desenvolvimento de interfaces e fundamentos de computação.',exp2Title:'Colaboração no Hub Universitário',exp2Place:'Projeto de desenvolvimento de software',exp2Desc:'Atuação em documentação técnica, back-end, correção de bugs e desenvolvimento de testes.',exp3Title:'Projeto acadêmico Trilhô',exp3Place:'Trabalho de equipe',exp3Desc:'Participação no desenvolvimento do módulo de favoritos, com foco na interação do usuário e integração com os dados do projeto.',sectionContact:'CONTATO',contactEyebrow:'UM NOVO CAPÍTULO?',contactTitle:'Vamos criar algo <em>interessante.</em>',contactIntro:'Quer conversar sobre código, projetos ou oportunidades? Envie uma mensagem ou me encontre nos links abaixo.',fieldName:'Seu nome',fieldEmail:'Seu e-mail',fieldMessage:'Sua mensagem',namePlaceholder:'Como posso chamar você?',emailPlaceholder:'voce@exemplo.com',messagePlaceholder:'Escreva sua mensagem...',sendMessage:'Enviar mensagem',sending:'Enviando...',footer:'Feito com curiosidade, código e café. © 2026',missingEmail:'O formulário ainda precisa de um e-mail de destino. Configure CONTACT_EMAIL em script.js.',invalidForm:'Preencha os campos corretamente (mensagem com pelo menos 10 caracteres).',sent:'Solicitação processada. Na primeira utilização, ative o FormSubmit pelo e-mail de confirmação; depois teste o recebimento da mensagem.',failed:'Não foi possível enviar agora. Verifique a conexão e tente novamente.',networkError:'Não foi possível conectar ao serviço de envio. Tente novamente.'
  },
  en: {
    navAbout:'About',navProjects:'Projects',navExperience:'Experience',navContact:'Contact',heroKicker:'PORTFOLIO / 2026',heroHello:'Hi, I’m',heroRole:'Computer Science Student · PUC Minas',heroDesc:'I enjoy understanding problems, building solutions and turning good ideas into software. Always coding, learning and exploring new projects.',viewProjects:'View projects',getInTouch:'Get in touch',heroMeta:'Development · Technology · Creativity',scrollDown:'SCROLL TO EXPLORE',sectionAbout:'ABOUT ME',aboutEyebrow:'A LITTLE ABOUT ME',aboutTitle:'Curiosity meets <em>solutions.</em>',aboutP1:'I am a Computer Science student at PUC Minas, especially interested in software development and back-end engineering.',aboutP2:'In academic projects, I have worked on features, technical documentation, bug fixes and tests. I aim to grow by building useful applications and understanding the decisions behind them.',note1:'Clean code and maintenance',note2:'Continuous learning',note3:'Collaboration and problem solving',aboutQuote:'A good idea gets even better when someone can turn it into something that works.',sectionProjects:'PROJECTS',projectEyebrow:'CODE IN PRACTICE',projectsTitle:'Selected <em>projects.</em>',projectsIntro:'Selected software development projects in chronological order, from oldest to newest.',projectsFootnote:'Illustrative images, not actual screenshots. Replace them with real project screenshots or GIFs to fully meet the assignment.',viewSource:'View repository',previewAlt:'Illustrative preview of project',sectionExperience:'EXPERIENCE',experienceEyebrow:'WORK IN PROGRESS',experienceTitle:'My <em>journey.</em>',experienceIntro:'Academic education, collaborative development and technical growth.',ongoing:'Ongoing',exp1Title:'BSc in Computer Science',exp1Desc:'Academic studies in programming, data structures, interface development and computer science fundamentals.',exp2Title:'Hub Universitário collaboration',exp2Place:'Software development project',exp2Desc:'Worked on technical documentation, back-end development, bug fixes and testing.',exp3Title:'Trilhô academic project',exp3Place:'Team project',exp3Desc:'Contributed to the favorites feature, focusing on user interaction and integration with project data.',sectionContact:'CONTACT',contactEyebrow:'A NEW CHAPTER?',contactTitle:'Let’s build something <em>interesting.</em>',contactIntro:'Want to talk about code, projects or opportunities? Send a message or find me using the links below.',fieldName:'Your name',fieldEmail:'Your email',fieldMessage:'Your message',namePlaceholder:'What should I call you?',emailPlaceholder:'you@example.com',messagePlaceholder:'Write your message...',sendMessage:'Send message',sending:'Sending...',footer:'Built with curiosity, code and coffee. © 2026',missingEmail:'The form needs a destination email. Set CONTACT_EMAIL in script.js.',invalidForm:'Please complete the fields correctly (at least 10 characters in the message).',sent:'Request processed. On first use, activate FormSubmit via the confirmation email, then verify actual delivery.',failed:'Could not send your message. Check your connection and try again.',networkError:'Could not connect to the delivery service. Please try again.'
  }
};

let currentLang = 'pt';
const $ = (selector) => document.querySelector(selector);

function renderProjects() {
  const items = [...PROJECTS].sort((a,b) => a.sortDate.localeCompare(b.sortDate));
  const parent = $('#projects-list');
  parent.replaceChildren();
  items.forEach((project,index) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    const art = document.createElement('div'); art.className = 'project-preview';
    const image = document.createElement('img'); image.src = project.image; image.alt = `${UI[currentLang].previewAlt} ${project.title}`; image.loading = 'lazy'; image.width=720; image.height=360;
    const number = document.createElement('span'); number.className='project-index'; number.textContent=String(index+1).padStart(2,'0')+' / '+project.period;
    art.append(image,number);
    const content = document.createElement('div');content.className='project-body';
    const h3=document.createElement('h3');h3.textContent=project.title;
    const desc=document.createElement('p');desc.textContent=project.description[currentLang];
    const role=document.createElement('p');role.className='project-role';role.textContent=project.contribution[currentLang];
    const tags=document.createElement('div');tags.className='project-tags';project.tags.forEach(label=>{const span=document.createElement('span');span.textContent=label;tags.append(span)});
    const link=document.createElement('a');link.className='project-link';link.href=project.github;link.target='_blank';link.rel='noopener noreferrer';link.textContent=UI[currentLang].viewSource+' ↗';link.setAttribute('aria-label',UI[currentLang].viewSource+' '+project.title+' (nova aba)');
    content.append(h3,desc,role,tags,link);card.append(art,content);parent.append(card);
  });
}

function updateLanguage(nextLang){
  if(!UI[nextLang])return;
  currentLang=nextLang;
  document.documentElement.lang=nextLang==='pt'?'pt-BR':'en';
  document.querySelectorAll('[data-i18n]').forEach(element=>{
    const value=UI[nextLang][element.dataset.i18n];
    if(value===undefined)return;
    if(['aboutTitle','projectsTitle','experienceTitle','contactTitle'].includes(element.dataset.i18n))element.innerHTML=value; // somente conteúdo estático local, nunca dados de usuário
    else element.textContent=value;
  });
  document.querySelectorAll('[data-placeholder]').forEach(element=>{element.placeholder=UI[nextLang][element.dataset.placeholder]||element.placeholder});
  $('#language-toggle').setAttribute('aria-label',nextLang==='pt'?'Change language to English':'Mudar idioma para português');
  $('#language-toggle').innerHTML=nextLang==='pt'?'PT <span class="lang-divider">/</span> EN':'EN <span class="lang-divider">/</span> PT';
  renderProjects();
  $('#form-status').textContent='';
}

$('#language-toggle').addEventListener('click',()=>updateLanguage(currentLang==='pt'?'en':'pt'));
const menuToggle=$('.menu-toggle');
menuToggle.addEventListener('click',()=>{
  const open=$('#nav-links').classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
});
document.querySelectorAll('#nav-links a').forEach(link=>link.addEventListener('click',()=>{$('#nav-links').classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  document.querySelectorAll('#nav-links a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));
}),{rootMargin:'-20% 0px -65% 0px'});
document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));

if(CONFIG.CONTACT_EMAIL && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.CONTACT_EMAIL)){
  $('#email-link').href=`mailto:${CONFIG.CONTACT_EMAIL}`;
} else {
  $('#email-link').href='#contact-form';
}
if(CONFIG.LINKEDIN_URL && /^https:\/\/[^\s]+$/.test(CONFIG.LINKEDIN_URL)){
  $('#linkedin-link').href=CONFIG.LINKEDIN_URL;
  $('#linkedin-link').target='_blank';$('#linkedin-link').rel='noopener noreferrer';$('#linkedin-link').hidden=false;
}

const form=$('#contact-form'),status=$('#form-status'),submitButton=$('#submit-button');
form.addEventListener('submit',async event=>{
  event.preventDefault();
  status.classList.remove('error');
  const T=UI[currentLang];
  const name=$('#contact-name').value.trim(),email=$('#contact-email').value.trim(),message=$('#contact-message').value.trim();
  if(!name||name.length<2||!email||!$('#contact-email').validity.valid||message.length<10){status.classList.add('error');status.textContent=T.invalidForm;form.reportValidity();return}
  if(!CONFIG.CONTACT_EMAIL||!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(CONFIG.CONTACT_EMAIL)){
    status.classList.add('error');status.textContent=T.missingEmail;return;
  }
  if($('#website').value)return;
  submitButton.disabled=true;submitButton.querySelector('[data-i18n]').textContent=T.sending;
  try{
    const response=await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONFIG.CONTACT_EMAIL)}`,{
      method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({name,email,message,_subject:'Nova mensagem do portfólio de Gustavo Macedo',_captcha:'true'})
    });
    const body=await response.json();
    if(!response.ok || body.success===false || body.success==='false')throw new Error('Service rejected the submission');
    status.textContent=T.sent;form.reset();
  }catch(error){console.error('Falha no envio:',error);status.classList.add('error');status.textContent=T.networkError}
  finally{submitButton.disabled=false;submitButton.querySelector('[data-i18n]').textContent=T.sendMessage}
});
updateLanguage('pt');
