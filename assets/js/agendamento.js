
const bairrosRJ = [
'Acari','Alto da Boa Vista','Anchieta','Andaraí','Anil','Bancários','Bangu','Barra da Tijuca','Barros Filho','Benfica','Bento Ribeiro','Bonsucesso','Botafogo','Brás de Pina','Cachambi','Cacuia','Campinho','Campo Grande','Cascadura','Catete','Catumbi','Cavalcanti','Centro','Cidade de Deus','Cidade Nova','Cocotá','Coelho Neto','Colégio','Copacabana','Cordovil','Cosme Velho','Cosmos','Costa Barros','Del Castilho','Deodoro','Encantado','Engenheiro Leal','Engenho da Rainha','Engenho de Dentro','Engenho Novo','Estácio','Flamengo','Freguesia','Freguesia de Jacarepaguá','Galeão','Gamboa','Gardênia Azul','Glória','Grajaú','Grumari','Guadalupe','Guaratiba','Gávea','Higienópolis','Honório Gurgel','Humaitá','Inhaúma','Inhoaíba','Ipanema','Irajá','Ilha do Governador','Itanhangá','Jacarepaguá','Jacaré','Jardim América','Jardim Botânico','Jardim Carioca','Jardim Guanabara','Lagoa','Laranjeiras','Leblon','Leme','Lins de Vasconcelos','Madureira','Magalhães Bastos','Mangueira','Manguinhos','Maracanã','Marechal Hermes','Maria da Graça','Maré','Méier','Olaria','Oswaldo Cruz','Paciência','Padre Miguel','Paquetá','Parada de Lucas','Parque Anchieta','Parque Colúmbia','Pavuna','Penha','Penha Circular','Pechincha','Pedra de Guaratiba','Pedreira','Piedade','Pilares','Portuguesa','Praça Seca','Praça da Bandeira','Quintino Bocaiúva','Ramos','Realengo','Recreio dos Bandeirantes','Ricardo de Albuquerque','Rio Comprido','Rocha','Rocha Miranda','Rocinha','Sampaio','Santa Cruz','Santa Teresa','Santíssimo','Saúde','Senador Camará','Senador Vasconcelos','Sepetiba','São Conrado','São Cristóvão','Taquara','Tijuca','Todos os Santos','Tomás Coelho','Turiaçu','Urca','Vargem Grande','Vargem Pequena','Vasco da Gama','Vicente de Carvalho','Vidigal','Vigário Geral','Vila Isabel','Vila Kosmos','Vila Militar','Vila Valqueire','Vila da Penha','Vila Kennedy','Vista Alegre','Zumbi'
].sort((a,b)=>a.localeCompare(b,'pt-BR'));

const upas = [
  {bairro:'Bangu', nome:'UPA Bangu', gestao:'Estadual', endereco:'Rua Figueiredo Camargo, s/nº - Bangu'},
  {bairro:'Botafogo', nome:'UPA Botafogo', gestao:'Estadual', endereco:'Rua São Clemente, s/nº - Botafogo'},
  {bairro:'Campinho', nome:'UPA Madureira', gestao:'Municipal', endereco:'Praça dos Lavradores, s/nº - Campinho'},
  {bairro:'Campo Grande', nome:'UPA Campo Grande I', gestao:'Estadual', endereco:'Estrada do Mendanha, s/nº - Campo Grande'},
  {bairro:'Campo Grande', nome:'UPA Campo Grande II', gestao:'Estadual', endereco:'Av. Cesário de Melo - Campo Grande'},
  {bairro:'Cidade de Deus', nome:'UPA Cidade de Deus', gestao:'Municipal', endereco:'Rua Edgar Werneck, s/nº - Cidade de Deus'},
  {bairro:'Copacabana', nome:'UPA Copacabana', gestao:'Estadual', endereco:'Rua Siqueira Campos, 129 - Copacabana'},
  {bairro:'Costa Barros', nome:'UPA Costa Barros', gestao:'Municipal', endereco:'Estrada Botafogo, s/nº - Costa Barros'},
  {bairro:'Engenho de Dentro', nome:'UPA Engenho de Dentro', gestao:'Municipal', endereco:'Rua Bernardo, s/nº - Engenho de Dentro'},
  {bairro:'Engenho Novo', nome:'UPA Engenho Novo', gestao:'Estadual', endereco:'Rua Souza Barros, 70 - Engenho Novo'},
  {bairro:'Ilha do Governador', nome:'UPA Ilha do Governador — Pediátrica', gestao:'Estadual', endereco:'Parque Poeta Manuel Bandeira, s/nº - Cocotá'},
  {bairro:'Inhaúma', nome:'UPA Del Castilho', gestao:'Municipal', endereco:'Rua Lago Verde, s/nº - Inhaúma'},
  {bairro:'Irajá', nome:'UPA Irajá', gestao:'Estadual', endereco:'Av. Monsenhor Félix, 380 - Irajá'},
  {bairro:'Magalhães Bastos', nome:'UPA Magalhães Bastos', gestao:'Municipal', endereco:'Estrada Manoel Nogueira de Sá c/ Rua Professor José Rodrigues, s/nº - Magalhães Bastos'},
  {bairro:'Manguinhos', nome:'UPA Manguinhos', gestao:'Municipal', endereco:'Av. Dom Helder Câmara, 1390 - Manguinhos'},
  {bairro:'Maré', nome:'UPA Maré', gestao:'Estadual', endereco:''},
  {bairro:'Marechal Hermes', nome:'UPA Marechal Hermes', gestao:'Estadual', endereco:''},
  {bairro:'Paciência', nome:'UPA Paciência', gestao:'Municipal', endereco:'Estrada Santa Eugênia, s/nº - Paciência'},
  {bairro:'Penha', nome:'UPA Penha', gestao:'Estadual', endereco:'Av. Lobo Júnior c/ Av. Brás de Pina, s/nº - Penha'},
  {bairro:'Ramos', nome:'UPA Alemão', gestao:'Municipal', endereco:'Estrada Itararé, 951 - Ramos'},
  {bairro:'Realengo', nome:'UPA Realengo', gestao:'Estadual', endereco:''},
  {bairro:'Ricardo de Albuquerque', nome:'UPA Ricardo de Albuquerque', gestao:'Estadual', endereco:''},
  {bairro:'Rocha Miranda', nome:'UPA Rocha Miranda', gestao:'Municipal', endereco:'Estrada do Barro Vermelho, s/nº - Rocha Miranda'},
  {bairro:'Rocinha', nome:'UPA Rocinha', gestao:'Municipal', endereco:'Estrada da Gávea, 520 - Rocinha'},
  {bairro:'Santa Cruz', nome:'UPA Santa Cruz — João XXIII', gestao:'Municipal', endereco:'Av. João XXIII, s/nº - Santa Cruz'},
  {bairro:'Santa Cruz', nome:'UPA Santa Cruz', gestao:'Estadual', endereco:'Av. Cesário de Melo, 13655 - Santa Cruz'},
  {bairro:'Senador Camará', nome:'UPA Senador Camará', gestao:'Municipal', endereco:'Av. Santa Cruz, 6486 - Senador Camará'},
  {bairro:'Sepetiba', nome:'UPA Sepetiba', gestao:'Municipal', endereco:'Rua José Fernandes, s/nº - Sepetiba'},
  {bairro:'Taquara', nome:'UPA Jacarepaguá', gestao:'Estadual', endereco:'Rua André Rocha, 20 - Taquara'},
  {bairro:'Tijuca', nome:'UPA Tijuca', gestao:'Estadual', endereco:'Rua Conde de Bonfim, s/nº - Praça Saens Peña - Tijuca'},
  {bairro:'Vila Kennedy', nome:'UPA Vila Kennedy', gestao:'Municipal', endereco:'Praça Dolomitas, s/nº - Vila Kennedy'}
];

const unidadesPrimarias = [
  {bairro:'Rocinha', nome:'Clínica da Família Maria do Socorro Silva e Souza', gestao:'Municipal', endereco:'Estrada da Gávea, 445 - Rocinha', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Rocinha', nome:'CMS Dr. Albert Sabin', gestao:'Municipal', endereco:'Estrada da Gávea, 250 - Rocinha', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Rocinha', nome:'Clínica da Família Rinaldo de Lamare', gestao:'Municipal', endereco:'Av. Niemeyer, 776 - São Conrado/Rocinha', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Botafogo', nome:'Super Centro Carioca de Vacinação', gestao:'Municipal', endereco:'Botafogo - Rio de Janeiro', categorias:['Vacinação']},
  {bairro:'Botafogo', nome:'CMS Dom Hélder Câmara', gestao:'Municipal', endereco:'Rua Voluntários da Pátria, 136 - Botafogo', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Botafogo', nome:'Clínica da Família Santa Marta', gestao:'Municipal', endereco:'Rua São Clemente, 312 - Botafogo', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Copacabana', nome:'CMS João Barros Barreto', gestao:'Municipal', endereco:'Rua Tenreiro Aranha, s/nº - Copacabana', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Copacabana', nome:'Clínica da Família Cantagalo Pavão-Pavãozinho', gestao:'Municipal', endereco:'Ladeira Saint Roman, 172 - Copacabana', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Gávea', nome:'CMS Píndaro de Carvalho Rodrigues', gestao:'Municipal', endereco:'Gávea - Rio de Janeiro', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Leme', nome:'Clínica da Família Chapéu Mangueira', gestao:'Municipal', endereco:'Leme - Rio de Janeiro', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Vidigal', nome:'CMS Rodolpho Perissé', gestao:'Municipal', endereco:'Vidigal - Rio de Janeiro', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'São Conrado', nome:'CMS Vila Canoas', gestao:'Municipal', endereco:'São Conrado - Rio de Janeiro', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Campo Grande', nome:'Super Centro Carioca de Vacinação - Campo Grande', gestao:'Municipal', endereco:'ParkShoppingCampoGrande - Campo Grande', categorias:['Vacinação']},
  {bairro:'Campo Grande', nome:'CMS Belizário Penna', gestao:'Municipal', endereco:'Rua Franklin, 29 - Campo Grande', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Penha', nome:'Clínica da Família Felippe Cardoso', gestao:'Municipal', endereco:'Avenida Nossa Senhora da Penha, 42 - Penha', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Bangu', nome:'CMS Madre Teresa de Calcutá', gestao:'Municipal', endereco:'Rua Silva Cardoso, 349 - Bangu', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Tijuca', nome:'CMS Heitor Beltrão', gestao:'Municipal', endereco:'Rua Desembargador Izidro, 144 - Tijuca', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']},
  {bairro:'Santa Teresa', nome:'CMS Ernani Agrícola', gestao:'Municipal', endereco:'Rua Constante Jardim, 8 - Santa Teresa', categorias:['Consulta clínica','Enfermagem','Vacinação','Orientação de saúde']}
];

const perfisProfissionais = {
  'Consulta clínica':'Médico(a) de Família / Clínico(a)',
  'Enfermagem':'Enfermeiro(a) da equipe',
  'Vacinação':'Equipe de Enfermagem / Sala de Vacinação',
  'Orientação de saúde':'Equipe multiprofissional',
  'Urgência / UPA 24h':'Equipe de urgência e emergência'
};

const $ = (id) => document.getElementById(id);
const sections = ['step1','step2','step3','step4'];
const horarios = Array.from({length:11}, (_,i)=>String(i+8).padStart(2,'0')+':00');

function norm(s){ return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim(); }
function showStep(n){ sections.forEach((id,i)=>$(id).classList.toggle('hidden', i !== n-1)); for(let i=1;i<=4;i++) $('s'+i).classList.toggle('active', i===n); window.scrollTo({top:0,behavior:'smooth'}); }
function formatCpf(v){ v=v.replace(/\D/g,'').slice(0,11); v=v.replace(/(\d{3})(\d)/,'$1.$2'); v=v.replace(/(\d{3})(\d)/,'$1.$2'); v=v.replace(/(\d{3})(\d{1,2})$/,'$1-$2'); return v; }
function popularBairros(){ $('bairrosLista').innerHTML = bairrosRJ.map(b=>`<option value="${b}"></option>`).join(''); }
function popularHorarios(){ $('horario').innerHTML = '<option value="">Selecione</option>' + horarios.map(h=>`<option>${h}</option>`).join(''); }
function modoUPA(){ return $('tipo').value === 'Urgência / UPA 24h'; }
function baseUnidades(){
  if(modoUPA()) return upas.map(u=>({...u,categorias:['Urgência / UPA 24h']}));
  return unidadesPrimarias.filter(u=>u.categorias.includes($('tipo').value));
}
function filtrarUnidades(){
  const q = norm($('bairro').value);
  const base = baseUnidades();
  let filtradas = !q ? base : base.filter(u => norm(u.bairro).includes(q) || q.includes(norm(u.bairro)));
  $('unidadesLista').innerHTML = filtradas.map(u=>`<option value="${u.nome}">${u.bairro} • ${u.gestao}</option>`).join('');
  $('qtdUnidades').textContent = filtradas.length ? `${filtradas.length} unidade(s) sugerida(s)` : 'Nenhuma sugestão exata — você ainda pode digitar a unidade';
  atualizarDetalheUnidade();
}
function findUnidade(){
  const nome = norm($('unidade').value);
  return [...upas, ...unidadesPrimarias].find(u => norm(u.nome) === nome) || null;
}
function atualizarDetalheUnidade(){
  const u = findUnidade();
  const box = $('unitDetail');
  if(!u){ box.classList.add('hidden'); return; }
  box.innerHTML = `<strong>${u.nome}</strong><br><span class="small">Bairro: ${u.bairro} • Gestão: ${u.gestao}${u.endereco ? ' • '+u.endereco : ''}</span>`;
  box.classList.remove('hidden');
}
function atualizarProfissional(){
  const tipo = $('tipo').value;
  $('profissionalBox').innerHTML = `<strong>Profissional / equipe prevista:</strong> ${tipo ? perfisProfissionais[tipo] : 'selecione o tipo de atendimento para visualizar.'}`;
  $('upaAviso').classList.toggle('hidden', !modoUPA());
  $('agendaCampos').classList.toggle('hidden', modoUPA());
}
function salvarAtendimento(dados){ const arr=JSON.parse(localStorage.getItem('cuidaAtendimentos')||'[]'); arr.unshift(dados); localStorage.setItem('cuidaAtendimentos',JSON.stringify(arr)); }

$('next1').addEventListener('click',()=>{ const ok=!!$('tipo').value; $('erroTipo').classList.toggle('hidden',ok); atualizarProfissional(); filtrarUnidades(); if(ok) showStep(2); });
$('tipo').addEventListener('change',()=>{ atualizarProfissional(); $('unidade').value=''; filtrarUnidades(); });
$('bairro').addEventListener('input',()=>{ $('unidade').value=''; filtrarUnidades(); });
$('unidade').addEventListener('input', atualizarDetalheUnidade);
$('back2').addEventListener('click',()=>showStep(1));
$('next2').addEventListener('click',()=>{
  const baseOk = $('bairro').value.trim() && $('unidade').value.trim();
  const agendaOk = modoUPA() ? true : ($('data').value && $('horario').value);
  const ok = baseOk && agendaOk;
  $('erroAgenda').classList.toggle('hidden',!!ok);
  if(ok) showStep(3);
});
$('cpf').addEventListener('input',e=>e.target.value=formatCpf(e.target.value));
$('back3').addEventListener('click',()=>showStep(2));
$('next3').addEventListener('click',()=>{
  const ok=$('nome').value.trim() && $('cpf').value.trim().length>=14 && $('moradia').value.trim();
  $('erroDados').classList.toggle('hidden',!!ok); if(!ok) return;
  const u=findUnidade(); const profissional=perfisProfissionais[$('tipo').value]||'-';
  const dataLinha = modoUPA() ? '' : `<strong>Data</strong><span>${new Date($('data').value+'T00:00:00').toLocaleDateString('pt-BR')}</span><strong>Horário</strong><span>${$('horario').value}</span>`;
  $('resumo').innerHTML=`<div class="kv"><strong>Atendimento</strong><span>${$('tipo').value}</span><strong>Estado</strong><span>Rio de Janeiro (RJ)</span><strong>Bairro</strong><span>${$('bairro').value}</span><strong>Unidade</strong><span>${$('unidade').value}</span>${u?.gestao?`<strong>Gestão</strong><span>${u.gestao}</span>`:''}${u?.endereco?`<strong>Endereço</strong><span>${u.endereco}</span>`:''}${dataLinha}<strong>Profissional / equipe prevista</strong><span>${profissional}</span><strong>Nome</strong><span>${$('nome').value}</span><strong>CPF</strong><span>${$('cpf').value}</span><strong>Bairro/local onde mora</strong><span>${$('moradia').value}</span></div>`;
  showStep(4);
});
$('back4').addEventListener('click',()=>showStep(3));
$('confirmar').addEventListener('click',()=>{
  const codigo=(modoUPA()?'UPA-':'AG-')+String(Math.floor(Math.random()*90000)+10000); const u=findUnidade(); const profissional=perfisProfissionais[$('tipo').value]||'-';
  salvarAtendimento({codigo,tipo:$('tipo').value,bairro:$('bairro').value,unidade:$('unidade').value,endereco:u?.endereco||'',gestao:u?.gestao||'Informada pelo usuário',data:modoUPA()?'':$('data').value,horario:modoUPA()?'24 horas':$('horario').value,profissional,nome:$('nome').value,cpf:$('cpf').value,moradia:$('moradia').value});
  $('tituloSucesso').textContent = modoUPA() ? 'Unidade selecionada' : 'Agendamento confirmado';
  $('comprovante').innerHTML=$('resumo').innerHTML+`<hr><strong>Código:</strong> ${codigo}`;
  $('step4').classList.add('hidden'); $('sucesso').classList.remove('hidden'); $('sucesso').focus();
});

popularBairros(); popularHorarios(); atualizarProfissional(); filtrarUnidades();
