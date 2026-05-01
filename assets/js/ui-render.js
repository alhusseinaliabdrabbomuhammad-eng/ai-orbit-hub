/* 
   AI ORBIT HUB - UI RENDER ENGINE
   Generates HTML components dynamically
*/

import { isFavorite } from './storage.js';

/**
 * Create HTML for a single Tool Card
 */
export const createToolCard = (tool) => {
    const activeClass = isFavorite(tool.id) ? 'active' : '';
    // استخراج الدومين لجلب الأيقونة
    const domain = new URL(tool.url).hostname;
    const iconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
    
    return `
        <div class="tool-card glass-panel reveal-anim" data-id="${tool.id}">
            <div class="tool-header">
                <div class="tool-icon-box" style="border-color: ${tool.color}40">
                    <img src="${iconUrl}" alt="${tool.name}" class="tool-brand-icon" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <span style="display:none; color: ${tool.color}; font-weight: 800; font-size: 1.2rem;">
                        ${tool.name.charAt(0)}
                    </span>
                </div>
                <button class="fav-btn ${activeClass}" data-fav-id="${tool.id}" title="Toggle Favorite">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <div class="tool-body">
                <h3>${tool.name}</h3>
                <p>${tool.desc}</p>
            </div>
            <div class="tool-footer">
                <span class="cat-tag" style="color: ${tool.color}; border-color: ${tool.color}40">
                    ${tool.cat}
                </span>
                <button class="button-sm glow-on-hover open-tool-btn" data-url="${tool.url}" data-id="${tool.id}">
                    Open Tool
                </button>
            </div>
        </div>
    `;
};

/**
 * Render a list of tools into a container
 */
export const renderTools = (tools, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (tools.length === 0) {
        container.innerHTML = '';
        document.getElementById('emptyState')?.removeAttribute('hidden');
    } else {
        document.getElementById('emptyState')?.setAttribute('hidden', '');
        container.innerHTML = tools.map(tool => createToolCard(tool)).join('');
    }
};

/**
 * Render Category Filter Pills
 */
export const renderCategories = (categories, containerId, activeCategory) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <button class="cat-pill ${activeCategory === 'all' ? 'active' : ''}" data-cat="all">All Tools</button>
        ${categories.map(cat => `
            <button class="cat-pill ${activeCategory === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>
        `).join('')}
    `;
};

/**
 * Global Toast Notification System
 */
export const showToast = (message, type = 'info') => {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast glass-panel ${type}`;
    toast.innerHTML = `
        <div class="toast-content" style="display: flex; align-items: center; gap: 10px; padding: 12px 20px;">
            <div class="toast-indicator" style="width: 4px; height: 20px; border-radius: 2px; background: var(--${type === 'danger' ? 'danger' : 'primary'})"></div>
            <span>${message}</span>
        </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};