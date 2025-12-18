import { useState } from "react";
import { IconButton, Checkbox, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleSave = () => {
    if (editTitle.trim() === "") return;
    editTask(task.id, editTitle);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center gap-2 p-2 border-b">
      {/* Checkbox */}
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        color="primary"
      />

      {/* Task Title or Edit Input */}
      {!isEditing ? (
        <span
          className={`flex-1 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      ) : (
        <TextField
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          size="small"
          fullWidth
        />
      )}

      {/* Edit / Save Button */}
      {!isEditing ? (
        <IconButton color="primary" onClick={() => setIsEditing(true)}>
          <EditIcon />
        </IconButton>
      ) : (
        <IconButton color="success" onClick={handleSave}>
          <CheckIcon />
        </IconButton>
      )}

      {/* Delete Button */}
      <IconButton color="error" onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

export default TaskItem;
