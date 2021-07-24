/* eslint-disable no-unused-vars */
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go to the dentist',
      date: new Date().toLocaleDateString(),
      reminder: true,
    },
    {
      id: 2,
      text: 'make your bed',
      date: new Date().toLocaleDateString(),
      reminder: false,
    },
    {
      id: 3,
      text: 'sleep till 7:00 am',
      date: new Date().toLocaleDateString(),
      reminder: true,
    },
    {
      id: 4,
      text: 'find your toies, play with your little finger',
      date: new Date().toLocaleDateString(),
      reminder: false,
    },
  ]);
  // to set a reminder or not
  const toggleReminder = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  // to delete the task or not
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // to Add a new Task
  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {
        showAddTask && <AddTask onAddTask={addTask} />
      }
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggleReminder={toggleReminder}
      />
    </div>
  );
}

export default App;
