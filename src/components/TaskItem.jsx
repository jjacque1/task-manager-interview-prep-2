export default function TaskItem({ onDeleteTask, taskProp }) {
  return (
    <li>
      {taskProp.title}
      <br />
      {taskProp.description}
      <br />
      {taskProp.status}
      <br />
      <button onClick={() => onDeleteTask(taskProp.id)}>Delete</button>
    </li>
  );
}
