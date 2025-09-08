// Toggle dark mode and save it to localStorage
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark);
}

// Apply saved dark mode on every page
window.addEventListener('DOMContentLoaded', () => {
  const darkModeOn = localStorage.getItem('darkMode') === 'true';
  if (darkModeOn) {
    document.body.classList.add('dark-mode');
  }

  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    toggle.checked = darkModeOn;
    toggle.addEventListener('change', toggleDarkMode);
  }
});
