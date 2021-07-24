import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [text, setTask] = useState('');
  const [date, setDay] = useState('');
  const [reminder, setreminder] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if(!text){
      alert('Pleas, Enter a valid task!');
      return; 
    }
    if(!date){
      alert('Please, Enter a valid date!');
      return;
    }
    const id = Math.floor(Math.random()*1000);
    onAddTask({id, text, date, reminder });
    setTask('');
    setDay('');
    setreminder(false);
  }

  return (
    <form onSubmit={addTask}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Task"
          value={text}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          placeholder="Day"
          value={date}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label htmlFor="CheckBox">Set reminder</label>
        <input
          id="CheckBox"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setreminder(e.target.checked)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
