/* 
   AI ORBIT HUB - SEARCH & FILTER ENGINE
   Handles real-time filtering and sorting of tools
*/

import { AI_TOOLS } from './tools-data.js';

let state = {
    searchQuery: '',
    activeCategory: 'all',
    activeTab: 'all', // 'all', 'favorites', 'recent'
    sortBy: 'name'    // 'name', 'popular'
};

/**
 * Update the state and return filtered results
 */
export const getFilteredTools = (newState = {}) => {
    state = { ...state, ...newState };

    let results = [...AI_TOOLS];

    // 1. Category Filter
    if (state.activeCategory !== 'all') {
        results = results.filter(tool => tool.cat === state.activeCategory);
    }

    // 2. Tab Filter (Favorites/Recent logic handled in ui-render)
    // Here we handle the global search query across current list
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        results = results.filter(tool => 
            tool.name.toLowerCase().includes(query) || 
            tool.desc.toLowerCase().includes(query) ||
            tool.cat.toLowerCase().includes(query)
        );
    }

    // 3. Sorting
    if (state.sortBy === 'name') {
        results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sortBy === 'popular') {
        results.sort((a, b) => (b.popular === a.popular) ? 0 : b.popular ? 1 : -1);
    }

    return results;
};

export const getCurrentState = () => state;