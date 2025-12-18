import { useState } from "react";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleSave = () => {
    if (editTitle.trim() === "") return;
    editTask(task.id, editTitle);
    setIsEditing(false);
  };

  return (
    <li>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {/* VIEW MODE */}
      {!isEditing && (
        <span
          style={{
            textDecoration:
              task.completed && !isEditing ? "line-through" : "none",
          }}
        >
          {task.title}
        </span>
      )}

      {/* EDIT MODE */}
      {isEditing && (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      )}

      {/* BUTTONS */}
      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>✏️</button>
      ) : (
        <button onClick={handleSave}>💾</button>
      )}

      <button onClick={() => deleteTask(task.id)}>🗑️</button>
    </li>
  );
}

export default TaskItem;
