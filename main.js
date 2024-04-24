
// MRB:  This is the Electron application.  It loads the React application which is defined under \src

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, contextBridge } = require('electron');
const path = require('node:path');
const fs = require('fs');
const { channels } = require('./src/constants');

// Global reference to the window object so we can reference it elsewhere...
let mainWindow;

function createWindow () {
  // Create the browser window.
  // Was: const mainWindow = ...   but now it's defined above globally
  mainWindow = new BrowserWindow({
    width: 700,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // TODO: make this false, per https://stackoverflow.com/questions/62433323/using-the-electron-ipcrenderer-from-a-front-end-javascript-file
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  // and load the index.html of the app.  (This loaded the static html file from the electron quickstart example)
  // if you uncomment this line, and comment the block below that loads the main window from the startURL, 
  // then the electron app will correctly call the cppaddon.
  // mainWindow.loadFile('index.html')

  // Load the react app that is already running (from "npm start").  (From an example I found:)
  // mainWindow.loadURL('http://localhost:3000'); 

  // Modified based on https://medium.com/free-code-camp/building-an-electron-application-with-create-react-app-97945861647c
  // We will load the running localhost app if it's development, but for production we'll load the static index.html
  // file that was generated when we run "npm run build"
  
  const startUrl = process.env.ELECTRON_START_URL || 
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    });
  mainWindow.loadURL(startUrl);


  // Open the DevTools.
  mainWindow.webContents.openDevTools({ mode: 'detach' });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


// MRB: code to handle events from React sent to Electron
// TODO ; don't have this working yet...
ipcMain.on(channels.TEST_EVENT_MIKE, (event, arg) => 
{
  const { product } = arg;
  console.log(product);
});

ipcMain.on(channels.TO_MAIN, (event, arg) => 
{
  console.log('toMain Message received!');
});


// Function I want to access on the frontend
// per https://stackoverflow.com/questions/62433323/using-the-electron-ipcrenderer-from-a-front-end-javascript-file
// TODO: fill this in...
//ipcMain.handle('')