export default function TaskItem({ onDeleteTask, taskProp, onUpdateTaskStatus }) {
  return (
    <li>
      {taskProp.title}
      <br />
      {taskProp.description}
      <br />
      {taskProp.status}
      <br />
      <label>
        Status:
        <select value={taskProp.status} onChange={(event) => onUpdateTaskStatus(taskProp.id, event.target.value)}>
          <option value="pending">pending</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
        </select>
      </label>
      <button onClick={() => onDeleteTask(taskProp.id)}>Delete</button>
    </li>
  );
}
