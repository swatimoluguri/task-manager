// frontend/src/components/TaskItem.js
import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks, setEditTask }) => {
    const deleteTask = async () => {
        await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
        fetchTasks();
    };

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => setEditTask(task)}>Edit</button>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
};

export default TaskItem;
