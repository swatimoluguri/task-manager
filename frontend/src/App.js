import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Default filter is 'all'

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
    setFilteredTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to filter tasks based on status
  const filterTasks = (status) => {
    if (status === 'all') {
      setFilter('all');
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter(task => task.status === status);
      setFilteredTasks(filteredTasks);
      setFilter(status);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <hr/>
      <div className="main">
        <div className="taskform">
          <TaskForm
            fetchTasks={fetchTasks}
            editTask={editTask}
            setEditTask={setEditTask}
          />
        </div>
        <div className="tasklist">
        <div className="filter-buttons">
            <p>Filter Tasks</p>
            <button onClick={() => filterTasks('all')} className={`allButton ${filter === 'all' ? 'active' : ''}`}>All</button>
            <button  onClick={() => filterTasks('To Do')} className={`todoButton ${filter === 'To Do' ? 'active' : ''}`}>To Do</button>
            <button  onClick={() => filterTasks('In Progress')} className={`inProgressButton ${filter === 'In Progress' ? 'active' : ''}`}>In Progress</button>
            <button  onClick={() => filterTasks('Done')} className={`doneButton ${filter === 'Done' ? 'active' : ''}`}>Done</button>
          </div>
          <TaskList
            tasks={filteredTasks}
            fetchTasks={fetchTasks}
            setEditTask={setEditTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
