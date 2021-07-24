import Task from "./Task"

function Tasks({ tasks, onDelete, onToggleReminder }) {
  return (
    <ul>
      {
        tasks.length === 0
        ? <li><center>No Tasks to show<br/>Click Add to add some..</center></li>
        : tasks.map(task => 
        <Task 
        key={ task.id } 
        task={ task } 
        onDelete={onDelete}
        onToggleReminder={onToggleReminder}
        />)
      }
    </ul>
    )
}
export default Tasks

