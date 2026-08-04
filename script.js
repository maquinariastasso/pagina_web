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

document.querySelector('#quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = 'Solicitud de cotización — Maquinarias Tasso';
  const body = [
    `Nombre: ${data.get('nombre')}`,
    `Teléfono: ${data.get('telefono')}`,
    `Comuna: ${data.get('comuna')}`,
    '',
    'Trabajo solicitado:',
    data.get('mensaje')
  ].join('\n');
  window.location.href = `mailto:aaadrianlazo@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
