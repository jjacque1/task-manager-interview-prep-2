import TaskItem from "./TaskItem";

export default function TaskList({ onDeleteTask, taskProp }) {
  return (
    <ul>
      {taskProp.map((task) => (
        <TaskItem
          key={task.id}
          onDeleteTask={onDeleteTask}
          taskProp={task}
        />
      ))}
    </ul>
  );
}
