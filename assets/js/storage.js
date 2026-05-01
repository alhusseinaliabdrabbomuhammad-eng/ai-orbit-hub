/* 
   AI ORBIT HUB - STORAGE ENGINE
   Handles localStorage for Favorites, Recents, and Notes
*/

const KEYS = {
    FAVORITES: 'ai-orbit:favorites',
    RECENTS: 'ai-orbit:recents',
    NOTES: 'ai-orbit:notes'
};

/** --- Favorites Logic --- **/
export const getFavorites = () => JSON.parse(localStorage.getItem(KEYS.FAVORITES)) || [];

export const toggleFavorite = (toolId) => {
    let favs = getFavorites();
    if (favs.includes(toolId)) {
        favs = favs.filter(id => id !== toolId);
    } else {
        favs.push(toolId);
    }
    localStorage.setItem(KEYS.FAVORITES, JSON.stringify(favs));
    return favs;
};

export const isFavorite = (toolId) => getFavorites().includes(toolId);

/** --- Recently Used Logic --- **/
export const getRecents = () => JSON.parse(localStorage.getItem(KEYS.RECENTS)) || [];

export const addRecent = (toolId) => {
    let recents = getRecents();
    // Remove if exists to move it to top
    recents = recents.filter(id => id !== toolId);
    recents.unshift(toolId);
    // Keep only last 10
    if (recents.length > 10) recents.pop();
    localStorage.setItem(KEYS.RECENTS, JSON.stringify(recents));
    return recents;
};

/** --- Quick Notes Logic --- **/
export const saveNotes = (text) => {
    localStorage.setItem(KEYS.NOTES, text);
};

export const getNotes = () => localStorage.getItem(KEYS.NOTES) || "";