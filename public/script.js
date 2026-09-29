const menu = document.getElementById('mobile-menu');
const menuButton = document.querySelector('.mobile-menu-btn');
function closeMobileMenu() {
  menu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  menu.hidden = !menu.hidden;
  menuButton.setAttribute('aria-expanded', String(!menu.hidden));
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
document.addEventListener('click', event => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMobileMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) {
    closeMobileMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 768px)').addEventListener('change', closeMobileMenu);

// Restore the original rotating personal descriptors.
const roles = ['UCI Student', 'Red Bull Connoisseur', 'Taekwondo Hobbyist'];
const roleElement = document.getElementById('role-text');
let roleIndex = 0;
setInterval(() => {
  if (document.hidden || !roleElement) return;
  roleIndex = (roleIndex + 1) % roles.length;
  roleElement.textContent = roles[roleIndex];
  roleElement.classList.remove('descriptor-enter');
  void roleElement.offsetWidth;
  roleElement.classList.add('descriptor-enter');
}, 2500);
