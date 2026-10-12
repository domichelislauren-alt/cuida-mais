
const perfisVacina = {
  crianca: {
    titulo: 'Calendário de vacinação — Criança',
    descricao: 'Vacinas organizadas com foco na faixa etária e no público indicado.',
    itens: [
      {nome:'BCG', faixa:'Ao nascer', indicacao:'Recém-nascidos', esquema:'Dose única', protecao:'Formas graves de tuberculose'},
      {nome:'Hepatite B', faixa:'Ao nascer e continuidade no calendário', indicacao:'Crianças', esquema:'Conforme esquema vacinal', protecao:'Hepatite B'},
      {nome:'Pentavalente', faixa:'2, 4 e 6 meses', indicacao:'Crianças', esquema:'3 doses', protecao:'Difteria, tétano, coqueluche, hepatite B e Hib'},
      {nome:'Poliomielite', faixa:'2, 4, 6 e reforços', indicacao:'Crianças', esquema:'Conforme calendário', protecao:'Poliomielite'}
    ]
  },
  adolescente: {
    titulo: 'Calendário de vacinação — Adolescente e jovem',
    descricao: 'Vacinas organizadas com foco na faixa etária e no público indicado.',
    itens: [
      {nome:'HPV4', faixa:'9 a 14 anos', indicacao:'Adolescentes dentro da faixa etária indicada', esquema:'1 dose, conforme histórico vacinal', protecao:'Infecções pelo HPV'},
      {nome:'Dengue tetravalente', faixa:'10 a 14 anos', indicacao:'Adolescentes dentro da faixa etária indicada', esquema:'2 doses, conforme histórico vacinal', protecao:'Dengue pelos sorotipos 1, 2, 3 e 4'},
      {nome:'Meningocócica ACWY', faixa:'11 a 14 anos', indicacao:'Adolescentes', esquema:'1 dose', protecao:'Doenças meningocócicas'},
      {nome:'Hepatite B', faixa:'10 a 24 anos', indicacao:'Jovens não vacinados ou com esquema incompleto', esquema:'3 doses, conforme histórico vacinal', protecao:'Hepatite B e D'},
      {nome:'dT', faixa:'10 a 24 anos', indicacao:'Jovens conforme histórico vacinal', esquema:'3 doses, conforme histórico vacinal', protecao:'Difteria e tétano'},
      {nome:'Tríplice viral', faixa:'10 a 24 anos', indicacao:'Jovens conforme histórico vacinal', esquema:'2 doses, conforme histórico vacinal', protecao:'Sarampo, caxumba e rubéola'}
    ]
  },
  adulto: {
    titulo: 'Calendário de vacinação — Adulto',
    descricao: 'Vacinas organizadas com foco na faixa etária e no público indicado.',
    itens: [
      {nome:'Hepatite B', faixa:'Adultos', indicacao:'Não vacinados ou com esquema incompleto', esquema:'3 doses', protecao:'Hepatite B'},
      {nome:'dT', faixa:'Adultos', indicacao:'Reforço periódico', esquema:'Conforme histórico vacinal', protecao:'Difteria e tétano'},
      {nome:'Febre amarela', faixa:'Adultos em áreas com recomendação', indicacao:'Público elegível', esquema:'Conforme orientação', protecao:'Febre amarela'},
      {nome:'Tríplice viral', faixa:'Adultos conforme faixa etária e histórico', indicacao:'Público elegível', esquema:'Conforme histórico vacinal', protecao:'Sarampo, caxumba e rubéola'}
    ]
  },
  gestante: {
    titulo: 'Calendário de vacinação — Gestante',
    descricao: 'Vacinas organizadas com foco na faixa etária e no público indicado.',
    itens: [
      {nome:'Influenza', faixa:'Durante a gestação', indicacao:'Gestantes', esquema:'Dose anual', protecao:'Gripe e complicações'},
      {nome:'COVID-19', faixa:'Durante a gestação', indicacao:'Gestantes', esquema:'Conforme orientação vigente', protecao:'COVID-19'},
      {nome:'dTpa', faixa:'A partir da 20ª semana', indicacao:'Gestantes', esquema:'1 dose a cada gestação', protecao:'Difteria, tétano e coqueluche'},
      {nome:'VSR', faixa:'A partir da 28ª semana', indicacao:'Gestantes elegíveis', esquema:'Conforme orientação', protecao:'Vírus sincicial respiratório'}
    ]
  }
};

document.getElementById('consultarVacinas').addEventListener('click', ()=>{
  const perfil = document.getElementById('perfilVacinaSelect').value;
  if(!perfil) return alert('Selecione um perfil para consultar a vacinação.');
  const data = perfisVacina[perfil];
  document.getElementById('tituloPerfilVacina').textContent = data.titulo;
  document.getElementById('perfilVacina').innerHTML = `<strong>${data.titulo}</strong><br>${data.descricao}`;
  document.getElementById('listaVacinas').innerHTML = data.itens.map(v=>`
    <article class="vaccine-item">
      <div>
        <h3>${v.nome}</h3>
        <div class="kv" style="grid-template-columns:110px 1fr; margin-top:.5rem">
          <strong>Faixa etária</strong><span>${v.faixa}</span>
          <strong>Para quem</strong><span>${v.indicacao}</span>
          <strong>Esquema</strong><span>${v.esquema}</span>
          <strong>Proteção</strong><span>${v.protecao}</span>
        </div>
      </div>
    </article>`).join('');
  document.getElementById('resultadoVacinas').classList.remove('hidden');
  document.getElementById('resultadoVacinas').scrollIntoView({behavior:'smooth'});
});
