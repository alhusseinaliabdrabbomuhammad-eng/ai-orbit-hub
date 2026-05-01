/* 
   AI ORBIT HUB - MAIN APPLICATION ENTRY
   Integrates Auth, Dashboard, Theme, and PWA
*/

import { initTheme, toggleTheme } from './theme.js';
import { initAuthState, loginWithGoogle, logoutUser } from './auth.js';
import { initDashboard } from './dashboard.js';
import { initCommandPalette } from './command-palette.js';
import { addRecent } from './storage.js';
import { showToast } from './ui-render.js';

/**
 * Main Application Bootstrap
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 AI Orbit Hub: Initializing Premium Experience...");

    // 1. Initialize Theme (Dark/Light)
    initTheme();

    // 2. Initialize Dashboard Logic (Grid, Filters, Stats)
    initDashboard();

    // 3. Initialize Authentication State
    initAuthState();

    // 4. Initialize Command Palette (Ctrl + K)
    initCommandPalette((tool) => {
        // Callback when a tool is selected via command palette
        addRecent(tool.id);
        window.open(tool.url, '_blank');
        showToast(`Launching ${tool.name}...`, 'success');
    });

    // 5. Global Event Listeners
    setupEventListeners();

    // 6. Register Service Worker (PWA)
    registerServiceWorker();
});

/**
 * Connect UI Buttons to Logic
 */
function setupEventListeners() {
    // Theme Toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Login Button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', loginWithGoogle);
    }

    // Logout Button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logoutUser);
    }

    // Profile Dropdown Toggle
    const profileBtn = document.getElementById('userProfileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    
    // --- استبدل الجزء القديم بهذا الكود الاحترافي ---
if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // يمنع انتشار الضغطة لباقي الصفحة
        profileDropdown.classList.toggle('active');
    });

    // منع انغلاق القائمة عند الضغط داخلها (عشان تعرف تضغط على Login)
    profileDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // غلق القائمة عند الضغط في أي مكان آخر
    document.addEventListener('click', (e) => {
        if (!profileBtn.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });
}
    // "Open Command Palette" Button in Hero
    const heroCmdBtn = document.getElementById('openCommandButton');
    if (heroCmdBtn) {
        heroCmdBtn.addEventListener('click', () => {
            // Trigger Ctrl+K programmatically
            window.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'k',
                ctrlKey: true,
                bubbles: true
            }));
        });
    }
}

/**
 * Register Service Worker for Offline & Install support
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(reg => console.log('✅ Service Worker Registered'))
                .catch(err => console.error('❌ SW Registration Failed:', err));
        });
    }
}

/**
 * CRITICAL REMINDER FOR FIREBASE CONFIG
 * Make sure your /assets/js/firebase-config.js file ends with:
 * 
 * export { app, auth };
 */