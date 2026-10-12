
const teleChecks = [...document.querySelectorAll('.tele-check')];
const feedback = document.getElementById('teleFeedback');
const acesso = document.getElementById('acessoTele');
document.getElementById('validarTele').addEventListener('click', () => {
  const ok = teleChecks.every(c => c.checked);
  feedback.classList.remove('hidden','success');
  if(ok){
    feedback.textContent = 'Checklist concluído. Você já pode seguir para o atendimento remoto.';
    feedback.classList.add('success');
    acesso.classList.remove('hidden');
    acesso.scrollIntoView({behavior:'smooth'});
  } else {
    feedback.textContent = 'Ainda há itens pendentes. Confira todos os requisitos antes de continuar.';
    acesso.classList.add('hidden');
  }
});
document.getElementById('meetLink').addEventListener('click', () => {
  document.getElementById('teleResultado').classList.remove('hidden');
});
