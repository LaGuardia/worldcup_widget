/**
 * ==========================================================================
 * FIFA 2026 World Cup Widget - Electron Preload Script
 * ==========================================================================
 */

const { contextBridge, ipcRenderer } = require('electron');

// Expose secure API bindings to app.js window scope
contextBridge.exposeInMainWorld('electronAPI', {
  toggleLayout: (layout) => ipcRenderer.send('toggle-layout', layout)
});
