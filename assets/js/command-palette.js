/* 
   AI ORBIT HUB - COMMAND PALETTE
   Global quick-action overlay (Ctrl + K)
*/

import { AI_TOOLS } from './tools-data.js';

/**
 * Initialize Command Palette Event Listeners
 */
export const initCommandPalette = (onToolSelect) => {
    const modal = document.getElementById('commandModal');
    const input = document.getElementById('commandInput');
    const resultsContainer = document.getElementById('commandResults');

    // Toggle Modal on Keyboard Shortcut
    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            togglePalette(true);
        }
        if (e.key === 'Escape') {
            togglePalette(false);
        }
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) togglePalette(false);
    });

    // Handle Input
    input.addEventListener('input', (e) => {
        renderCommandResults(e.target.value, resultsContainer, onToolSelect);
    });

    function togglePalette(show) {
        modal.classList.toggle('active', show);
        if (show) {
            input.value = '';
            input.focus();
            renderCommandResults('', resultsContainer, onToolSelect);
        }
    }
};

/**
 * Render list inside command palette
 */
function renderCommandResults(query, container, onToolSelect) {
    const filtered = AI_TOOLS.filter(t => 
        t.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6); // Limit to top 6

    if (filtered.length === 0) {
        container.innerHTML = `<p style="padding: 20px; color: var(--text-muted); text-align: center;">No tools found...</p>`;
        return;
    }

    container.innerHTML = filtered.map(tool => `
        <div class="command-item" data-id="${tool.id}">
            <div class="cmd-icon" style="background: ${tool.color}20; color: ${tool.color}">
                ${tool.name.charAt(0)}
            </div>
            <div class="cmd-info">
                <strong>${tool.name}</strong>
                <span>Open ${tool.name} in new tab</span>
            </div>
            <kbd>Enter</kbd>
        </div>
    `).join('');

    // Click behavior
    container.querySelectorAll('.command-item').forEach(item => {
        item.addEventListener('click', () => {
            const toolId = item.dataset.id;
            const tool = AI_TOOLS.find(t => t.id === toolId);
            if (tool) onToolSelect(tool);
            document.getElementById('commandModal').classList.remove('active');
        });
    });
}