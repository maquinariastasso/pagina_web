const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const quoteForm = document.querySelector('#quote-form');

function buildQuoteMessage(form) {
  const data = new FormData(form);
  return [
    `Nombre: ${data.get('nombre')}`,
    `Teléfono: ${data.get('telefono')}`,
    `Comuna: ${data.get('comuna')}`,
    '',
    'Trabajo solicitado:',
    data.get('mensaje')
  ].join('\n');
}

quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const subject = 'Solicitud de cotización — Maquinarias Tasso';
  const body = buildQuoteMessage(event.currentTarget);
  window.location.href = `mailto:maquinariastasso@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#whatsapp-submit')?.addEventListener('click', () => {
  if (!quoteForm?.reportValidity()) return;
  const message = ['Hola, quiero solicitar una cotización a Maquinarias Tasso.', '', buildQuoteMessage(quoteForm)].join('\n');
  window.open(`https://wa.me/56933220593?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelector('#year').textContent = new Date().getFullYear();
