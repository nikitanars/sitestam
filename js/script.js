window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Toggle theme and persist it
function toggleTheme() {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Page transition effect
document.querySelectorAll('a').forEach(link => {
  if (link.getAttribute('href') && link.getAttribute('href').includes('.html')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => window.location = link.getAttribute('href'), 300);
    });
  }
});