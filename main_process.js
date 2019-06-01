// Basic init
const electron = require('electron');
const { app, BrowserWindow } = electron;

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname, {
  hardResetMethod: 'exit'
});

// To avoid being garbage collected
let mainWindow;
function createWindow () {
    mainWindow = new BrowserWindow({ 
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true
      }
    });
    mainWindow.loadURL(`file://${__dirname}/build/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }
  })