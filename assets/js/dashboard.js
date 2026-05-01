/* 
   AI ORBIT HUB - DASHBOARD CONTROLLER
   Main orchestration logic
*/

import { AI_TOOLS, CATEGORIES } from './tools-data.js';
import { renderTools, renderCategories, showToast } from './ui-render.js';
import { getFilteredTools, getCurrentState } from './search-filter.js';
import { toggleFavorite, addRecent, getFavorites, getRecents, saveNotes, getNotes } from './storage.js';

export const initDashboard = () => {
    // 1. Initial Render
    refreshUI();
    renderCategories(CATEGORIES, 'categoryTabs', 'all');
    
    // 2. Setup Notes
    const notesInput = document.getElementById('notesInput');
    if (notesInput) {
        notesInput.value = getNotes();
        notesInput.addEventListener('input', (e) => saveNotes(e.target.value));
    }

    // 3. Category Filter Clicks
    document.getElementById('categoryTabs').addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-pill');
        if (!btn) return;
        
        const cat = btn.dataset.cat;
        document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filtered = getFilteredTools({ activeCategory: cat });
        renderTools(filtered, 'toolsGrid');
    });

    // 4. Global Search
    document.getElementById('globalSearch').addEventListener('input', (e) => {
        const filtered = getFilteredTools({ searchQuery: e.target.value });
        renderTools(filtered, 'toolsGrid');
    });

        // 5. Sort Tools
    document.getElementById('sortTools').addEventListener('change', (e) => {
        const filtered = getFilteredTools({ sortBy: e.target.value });
        renderTools(filtered, 'toolsGrid');
    });

    // 5. Tool Card Actions (Delegation)
    document.addEventListener('click', (e) => {
        // Favorite Button
        const favBtn = e.target.closest('.fav-btn');
        if (favBtn) {
            const id = favBtn.dataset.favId;
            toggleFavorite(id);
            favBtn.classList.toggle('active');
            updateStats();
            return;
        }

        // Open Tool Button
        const openBtn = e.target.closest('.open-tool-btn');
        if (openBtn) {
            const id = openBtn.dataset.id;
            const url = openBtn.dataset.url;
            addRecent(id);
            window.open(url, '_blank');
            updateStats();
            showToast(`Opening ${id.toUpperCase()}...`, 'success');
        }
    });

    // 6. Sidebar Tab Switching
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
                        // UI Toggle
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            const gridContainer = document.querySelector('.grid-container');
            const notesSection = document.getElementById('notesSection');
            const heroSection = document.querySelector('.hero-section');
            const infoPanel = document.querySelector('.info-panel');

            if (tab === 'all' || tab === 'favorites' || tab === 'recent') {
                notesSection.style.display = 'none';
                gridContainer.style.display = 'block';
                if (infoPanel) infoPanel.style.display = (tab === 'all') ? 'block' : 'none';
                heroSection.style.display = (tab === 'all') ? 'block' : 'none';
                
                if (tab === 'all') {
                    document.getElementById('sectionTitle').textContent = 'Discovery';
                    refreshUI();
                } else if (tab === 'favorites') {
                    document.getElementById('sectionTitle').textContent = 'Your Favorites';
                    const favIds = getFavorites();
                    renderTools(AI_TOOLS.filter(t => favIds.includes(t.id)), 'toolsGrid');
                } else if (tab === 'recent') {
                    document.getElementById('sectionTitle').textContent = 'Recently Opened';
                    const recentIds = getRecents();
                    renderTools(AI_TOOLS.filter(t => recentIds.includes(t.id)), 'toolsGrid');
                }
            } else if (tab === 'notes') {
                gridContainer.style.display = 'none';
                heroSection.style.display = 'none';
                if (infoPanel) infoPanel.style.display = 'none';
                notesSection.style.display = 'block';
                notesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    updateStats();
};

function refreshUI() {
    const filtered = getFilteredTools();
    renderTools(filtered, 'toolsGrid');
    updateStats();
}

function updateStats() {
    const totalCount = AI_TOOLS.length;
    const favsCount = getFavorites().length;
    const recentsCount = getRecents().length;
    const catsCount = CATEGORIES.length;

    if (document.getElementById('count-total')) document.getElementById('count-total').textContent = totalCount;
    if (document.getElementById('count-favs')) document.getElementById('count-favs').textContent = favsCount;
    
    // Detailed stats in main grid
    if (document.getElementById('totalToolsStat')) document.getElementById('totalToolsStat').textContent = totalCount;
    if (document.getElementById('favoritesStat')) document.getElementById('favoritesStat').textContent = favsCount;
    if (document.getElementById('recentsStat')) document.getElementById('recentsStat').textContent = recentsCount;
    if (document.getElementById('categoriesStat')) document.getElementById('categoriesStat').textContent = catsCount;
}