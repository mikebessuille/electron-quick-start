import React, { useState, useEffect } from 'react';
import { channels } from './constants';



const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');


    // Get loaded data from electron
    useEffect(() => {
        // ask Electron to load the todo list
        window.ElectronAPI.send(channels.LOAD_TODO, 'this is unused');

        // receive the result...
        window.ElectronAPI.receive(channels.TODO_LOADED, (data) => {
            console.log(`Todolist.js: Received data from main process: ${data}`);
            // Update the react component:
            setTodos(data);
        });
      }, []); 

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
            window.ElectronAPI.send(channels.SAVE_TODO, [...todos, newTodo]);
            setNewTodo('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Enter a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoList;