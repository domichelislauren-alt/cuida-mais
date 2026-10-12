
function getAtendimentos(){ try{return JSON.parse(localStorage.getItem('cuidaAtendimentos')||'[]')}catch(e){return[]} }
function passoPosAtendimento(tipo){
  const mapa={
    'Consulta clínica':'Após o atendimento, a equipe poderá orientar retorno, renovação de receita ou encaminhamento para outros serviços.',
    'Enfermagem':'Após o atendimento, a equipe poderá registrar orientações de cuidado, curativo, aferição e acompanhamento.',
    'Vacinação':'Após o atendimento, a sala de vacinação poderá orientar sobre registro no cartão vacinal e próximas doses, se houver.',
    'Orientação de saúde':'Após o atendimento, a equipe poderá indicar autocuidado, retorno programado ou procura por outro serviço, se necessário.',
    'Urgência / UPA 24h':'Na UPA, o atendimento ocorre por classificação de risco. Após a avaliação, a equipe poderá liberar, observar, medicar ou encaminhar para outro ponto da rede.'
  }; return mapa[tipo]||'Siga as orientações passadas pela unidade de saúde.';
}
const lista=document.getElementById('listaAtendimentos'); const sem=document.getElementById('semAtendimentos'); const arr=getAtendimentos();
if(arr.length){ sem.classList.add('hidden'); lista.innerHTML=arr.map(a=>{
  let status='Registrado'; let dataTexto='Atendimento 24 horas';
  if(a.data){ const agData=new Date(a.data+'T'+(a.horario||'00:00')+':00'); status=new Date()>agData?'Concluído':'Agendado'; dataTexto=`${new Date(a.data+'T00:00:00').toLocaleDateString('pt-BR')} às ${a.horario}`; }
  return `<div class="item"><strong>${a.tipo}</strong><br><span class="small">${a.unidade}</span><br>${a.gestao?`<span class="small">Gestão: ${a.gestao}</span><br>`:''}${a.endereco?`<span class="small">${a.endereco}</span><br>`:''}<span class="small">${dataTexto}</span><br><span class="small"><strong>Profissional / equipe prevista:</strong> ${a.profissional}</span><br><span class="small"><strong>Status:</strong> ${status}</span><br><span class="small"><strong>Próximos passos:</strong> ${passoPosAtendimento(a.tipo)}</span></div>`;
}).join(''); }
