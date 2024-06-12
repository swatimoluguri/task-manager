import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks, setEditTask }) => {
    const deleteTask = async () => {
        await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
        fetchTasks();
    };

    return (
        <div className={task.status.split(" ").join("")}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <div className="actions">
                <button className="edit" onClick={() => setEditTask(task)}>Edit</button>
                <button className="delete" onClick={deleteTask}>Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;
