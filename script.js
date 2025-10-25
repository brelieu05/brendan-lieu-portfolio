// Role rotation functionality
const roles = [
  "Full Stack Developer",
  "UCI Student", 
  "Redbull Connoisseur",
  "Taekwondo Hobbyist"
];
let roleIndex = 0;
const roleElement = document.getElementById('role-text');

function updateRole() {
  roleElement.textContent = roles[roleIndex];
  roleElement.classList.add('animate-fade-up');
  setTimeout(() => {
    roleElement.classList.remove('animate-fade-up');
  }, 500);
  roleIndex = (roleIndex + 1) % roles.length;
}

// Start role rotation
setInterval(updateRole, 2500);

// Mobile menu functionality
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.querySelector('.mobile-menu-btn');
  const isHidden = menu.classList.contains('hidden');
  
  menu.classList.toggle('hidden');
  button.setAttribute('aria-expanded', !isHidden);
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.querySelector('.mobile-menu-btn');
  
  menu.classList.add('hidden');
  button.setAttribute('aria-expanded', 'false');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobile-menu');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
