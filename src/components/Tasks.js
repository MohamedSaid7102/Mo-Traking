import Task from "./Task"

function Tasks({ tasks, onDelete, onToggleReminder }) {
  return (
    <ul>
      {
       tasks.map(task => 
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

