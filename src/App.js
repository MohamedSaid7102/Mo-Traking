/* eslint-disable no-unused-vars */
import Header from './components/Header';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import About from './components/About';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasksFromServer = async () => {
      const res = await fetchTasks();
      setTasks(res);
    };
    fetchTasksFromServer();
  }, []);

  // fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // to set a reminder or not
  const toggleReminder = async (taskId) => {
    const taskToToggle = await fetchTask(taskId);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  // to delete the task or not
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // to Add a new Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };
  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAddTask={addTask} />}
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {tasks.length === 0 ? (
                <li>
                  <center>
                    No Tasks to show
                    <br />
                    Click Add to add some..
                  </center>
                </li>
              ) : (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggleReminder={toggleReminder}
                />
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
