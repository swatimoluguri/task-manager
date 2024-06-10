import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);

    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:5000/api/tasks');
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm fetchTasks={fetchTasks} editTask={editTask} setEditTask={setEditTask} />
            <TaskList tasks={tasks} fetchTasks={fetchTasks} setEditTask={setEditTask} />
        </div>
    );
}

export default App;
