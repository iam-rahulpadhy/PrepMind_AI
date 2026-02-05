// Theme toggle functionality
const THEME_KEY = 'prepmind-theme';

// Get saved theme or default to 'light'
const getSavedTheme = () => {
    return localStorage.getItem(THEME_KEY) || 'light';
};

// Apply theme to document
const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    // Update toggle button icon if it exists
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = theme === 'dark'
            ? '☀️' // Sun icon for switching to light
            : '🌙'; // Moon icon for switching to dark
    }
};

// Toggle between themes
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
};

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);

    // Add event listener to toggle button
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleTheme, applyTheme, getSavedTheme };
}
