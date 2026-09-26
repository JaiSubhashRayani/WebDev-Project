const buttons = document.querySelectorAll('#theme-toggle, .theme-toggle');
const themeKey = 'portfolio-theme';
const root = document.documentElement;

function setTheme(isDark) {
  root.classList.toggle('dark-theme', isDark);

  buttons.forEach((button) => {
    button.setAttribute(
      'aria-label',
      isDark ? 'Switch to light theme' : 'Switch to dark theme'
    );
    button.setAttribute('aria-pressed', String(isDark));
  });
}

setTheme(localStorage.getItem(themeKey) === 'dark');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const isDark = !root.classList.contains('dark-theme');
    setTheme(isDark);
    try {
      localStorage.setItem(themeKey, isDark ? 'dark' : 'light');
    } catch (_) {
  
    }
  });
});

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}