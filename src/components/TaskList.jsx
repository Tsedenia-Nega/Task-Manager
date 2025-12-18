import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask,editTask }) {
  if (tasks.length === 0) {
    return <p className="text-center font-bold">No tasks here </p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
