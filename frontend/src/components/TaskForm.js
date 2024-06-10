// frontend/src/components/TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks, editTask, setEditTask }) => {
    const [title, setTitle] = useState(editTask ? editTask.title : '');
    const [description, setDescription] = useState(editTask ? editTask.description : '');
    const [status, setStatus] = useState(editTask ? editTask.status : 'To Do');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { title, description, status };
        if (editTask) {
            await axios.put(`http://localhost:5000/api/tasks/${editTask._id}`, task);
            setEditTask(null);
        } else {
            await axios.post('http://localhost:5000/api/tasks', task);
        }
        fetchTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button type="submit">{editTask ? 'Update Task' : 'Create Task'}</button>
        </form>
    );
};

export default TaskForm;
