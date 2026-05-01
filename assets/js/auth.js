/* 
   AI ORBIT HUB - AUTHENTICATION LOGIC
   Handles Google Sign-In via Firebase
*/

import { auth } from './firebase-config.js';
import { showToast } from './ui-render.js';
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Initialize Google Provider
const provider = new GoogleAuthProvider();

/**
 * Sign in with Google Popup
 */
export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        // The signed-in user info
        const user = result.user;
        console.log("User signed in:", user.displayName);
        showToast(`Welcome, ${user.displayName}!`, "success");
    } catch (error) {
        console.error("Auth Error:", error.code, error.message);
        showToast("Failed to sign in. Please try again.", "danger");
    }
};

/**
 * Sign out
 */
export const logoutUser = async () => {
    try {
        await signOut(auth);
        showToast("Signed out successfully", "info");
    } catch (error) {
        console.error("Logout Error:", error);
    }
};

/**
 * Monitor Auth State Changes
 * Updates the UI globally based on user status
 */
export const initAuthState = (updateUICallback) => {
    onAuthStateChanged(auth, (user) => {
        const profileBtn = document.getElementById('userProfileBtn');
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const userAvatar = document.getElementById('userAvatar');
        const userNameDisplay = document.getElementById('userNameDisplay');
        const userEmailDisplay = document.getElementById('userEmailDisplay');
        const welcomeGreeting = document.getElementById('welcomeGreeting');

        if (user) {
            // User is signed in
            const name = user.displayName || "Explorer";
            const photo = user.photoURL;
            const email = user.email;

            // Update Header & Profile
            if (userAvatar) {
                userAvatar.innerHTML = photo ? `<img src="${photo}" alt="${name}" style="border-radius:50%">` : name.charAt(0);
                userAvatar.style.background = photo ? 'transparent' : 'var(--primary)';
            }
            if (userNameDisplay) userNameDisplay.textContent = name;
            if (userEmailDisplay) userEmailDisplay.textContent = email;
            if (welcomeGreeting) welcomeGreeting.textContent = `Welcome back, ${name.split(' ')[0]}!`;

            // Toggle Buttons
            if (loginBtn) loginBtn.style.display = 'none';
            if (logoutBtn) logoutBtn.style.display = 'flex';

        } else {
            // User is signed out (Guest Mode)
            if (userAvatar) {
                userAvatar.textContent = "?";
                userAvatar.style.background = "var(--glass-border)";
            }
            if (userNameDisplay) userNameDisplay.textContent = "Guest";
            if (userEmailDisplay) userEmailDisplay.textContent = "Not signed in";
            if (welcomeGreeting) welcomeGreeting.textContent = "Hello, Explorer";

            if (loginBtn) loginBtn.style.display = 'flex';
            if (logoutBtn) logoutBtn.style.display = 'none';
        }

        // Run any additional UI updates (like refreshing favorites)
        if (updateUICallback) updateUICallback(user);
    });
};

