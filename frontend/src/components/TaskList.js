import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, fetchTasks, setEditTask }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div className="task-item" key={task._id}>
                    <TaskItem 
                        task={task} 
                        fetchTasks={fetchTasks} 
                        setEditTask={setEditTask} 
                    />
                </div>
            ))}
        </div>
    );
};

export default TaskList;
