// TodoFileSystem.js
const fs = require('fs');
const path = require('path');
const userDataPath = require('electron').app.getPath('userData');
const todoFilePath = path.join(userDataPath, 'todos.json');
const { ipcMain } = require('electron');
const { channels } = require('./src/constants');


function saveTodoList(todos) {
    console.log('Saving todo list');
    fs.writeFileSync(todoFilePath, JSON.stringify(todos));
}

function loadTodoList() {
    console.log('Loading todo list');
    try {
        const data = fs.readFileSync(todoFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

module.exports = { saveTodoList, loadTodoList };