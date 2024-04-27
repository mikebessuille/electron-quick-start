/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})


// EXPORT FUNCTIONS FOR USE IN REACT
const { contextBridge, ipcRenderer } = require('electron');

console.log('PRELOAD!!! YAY!');
// not sure why this doesn't work, when it works in main.js...
// const { channels } = require('./src/constants');

// Expose protected methods that allow the renderer process (React) to use
// the ipcRenderer and fs (filesystem) without exposing the entire object
contextBridge.exposeInMainWorld('ElectronAPI', {
    send: (channel, data) => {
        // Whitelist channels
        //let validChannels = ['toMain'];
        //let validChannels = [channels.TEST_EVENT_MIKE, channels.TO_MAIN];
        let validChannels = ['toMain', 'test_event_mike', 'savetodo', 'loadtodo']
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receive: (channel, func) => {
        let validChannels = ['fromMain', 'todoloaded'];
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    },
});
