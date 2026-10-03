const buttons = document.querySelectorAll('#theme-toggle, .theme-toggle');
const themeKey = 'portfolio-theme';
const root = document.documentElement;

function getStoredTheme() {
  try {
    return localStorage.getItem(themeKey);
  } catch (_) {
    return null;
  }
}

function setStoredTheme(value) {
  try {
    localStorage.setItem(themeKey, value);
  } catch (_) {}
}

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

setTheme(getStoredTheme() === 'dark');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const isDark = !root.classList.contains('dark-theme');
    setTheme(isDark);
    setStoredTheme(isDark ? 'dark' : 'light');
  });
});
