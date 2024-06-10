// frontend/src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, fetchTasks, setEditTask }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} setEditTask={setEditTask} />
            ))}
        </div>
    );
};

export default TaskList;
