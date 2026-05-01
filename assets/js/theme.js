/* 
   AI ORBIT HUB - THEME MANAGER
   Toggles Dark/Light mode and persists preference
*/

const THEME_KEY = 'ai-orbit:theme';

/**
 * Initialize theme based on storage or system preference
 */
export const initTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    applyTheme(theme);
};

/**
 * Toggle between dark and light
 */
export const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
};

/**
 * Helper to apply theme attribute to HTML tag
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update Toggle Icon State (Aria support)
    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.setAttribute('aria-pressed', theme === 'light');
    }

        const sun = btn.querySelector('.sun-icon');
    const moon = btn.querySelector('.moon-icon');
    if(sun && moon) {
        sun.style.display = theme === 'dark' ? 'block' : 'none';
        moon.style.display = theme === 'dark' ? 'none' : 'block';
    }
}