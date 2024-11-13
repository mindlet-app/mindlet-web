const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200, // Largeur de la fenêtre
    height: 800, // Hauteur de la fenêtre
    webPreferences: {
      nodeIntegration: true, // Permet d'utiliser Node.js dans le code de l'application
      contextIsolation: false, // Utile pour tester rapidement (à activer en prod)
    },
  });

  // Charger la page HTML générée par Astro
  mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));

  // Ouvre les DevTools de Chromium pour le debug
  // mainWindow.webContents.openDevTools();
}

// Créer la fenêtre lorsque l'application est prête
app.on('ready', createWindow);

// Fermer l'application lorsque toutes les fenêtres sont fermées (sauf sur macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Recréer une fenêtre si l'icône de l'application est cliquée sur macOS
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
