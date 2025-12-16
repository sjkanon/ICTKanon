document.getElementById('year').textContent = new Date().getFullYear();

const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 400 ? 'grid' : 'none';
});
toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
// Close menu when clicking a link (mobile)
document.querySelectorAll('.site-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
