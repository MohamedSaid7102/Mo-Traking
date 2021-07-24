import { FaTimesCircle } from 'react-icons/fa';

function Task({ task, onDelete, onToggleReminder }) {
  return (
    <li 
    className={task.reminder?"task reminder" : "task"}
    onDoubleClick={()=>onToggleReminder(task.id)}
    >
      <h3> 
      { task.text } 
      <FaTimesCircle 
      className="close-batch"
      onClick={()=> onDelete(task.id)}
      />
      </h3>
      <p> { task.date }</p>
    </li>
  )
}

export default Task

