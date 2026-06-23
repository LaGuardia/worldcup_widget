/**
 * ==========================================================================
 * FIFA 2026 World Cup Widget - Electron Main Process
 * ==========================================================================
 */

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let widgetWindow = null;

function createWidgetWindow() {
  widgetWindow = new BrowserWindow({
    width: 960,         // Matches your layout-horizontal width
    height: 480,        // Matches your layout-horizontal height
    frame: false,       // Removes OS window titlebar and borders
    transparent: true,  // Allows css glassmorphic blur to render with transparency
    resizable: false,   // Keeps widget dimensions locked
    show: false,        // Avoid white flash while launching
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Load the web application index
  widgetWindow.loadFile(path.join(__dirname, 'index.html'));

  // Once rendering is ready, display window
  widgetWindow.once('ready-to-show', () => {
    widgetWindow.show();
  });

  // Handle IPC layouts toggling dynamic resizing
  ipcMain.on('toggle-layout', (event, layout) => {
    if (!widgetWindow) return;
    
    if (layout === 'vertical') {
      widgetWindow.setSize(480, 800);
      widgetWindow.setResizable(false); // Reinforce locking
    } else {
      widgetWindow.setSize(960, 480);
      widgetWindow.setResizable(false); // Reinforce locking
    }
  });
}

// Startup hooks
app.whenReady().then(() => {
  createWidgetWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWidgetWindow();
  });
});

// App close behaviors
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
