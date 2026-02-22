import { useState } from "react";

export default function TaskItem({
  onDeleteTask,
  taskProp,
  onUpdateTaskStatus,
  onEditTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(taskProp.title);
  const [editDescription, setEditDescription] = useState(taskProp.description);

  function handleSave() {
    const trimmedEditTitle = editTitle.trim();
    const trimmedEditDescription = editDescription.trim();

    if (!trimmedEditTitle || !trimmedEditDescription) return;

    onEditTask(taskProp.id, trimmedEditTitle, trimmedEditDescription);

    setIsEditing(false);
  }

  function handleCancle() {
    setEditTitle(taskProp.title);
    setEditDescription(taskProp.description);
    setIsEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
          />
          <input
            type="text"
            value={editDescription}
            onChange={(event) => setEditDescription(event.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancle}>Cancle</button>
        </>
      ) : (
        <>
          {taskProp.title}
          <br />
          {taskProp.description}
          <br />
          {taskProp.status}
          <br />
          <label>
            Status:
            <select
              value={taskProp.status}
              onChange={(event) =>
                onUpdateTaskStatus(taskProp.id, event.target.value)
              }
            >
              <option value="pending">pending</option>
              <option value="in-progress">in-progress</option>
              <option value="done">done</option>
            </select>
          </label>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteTask(taskProp.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
