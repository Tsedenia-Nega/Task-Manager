import React from 'react'
import { useState } from 'react'
const TaskForm = ({addTask}) => {
const [title,setTitle]= useState("");
  const [showInput, setShowInput] = useState(false); 
const handleSubmit= (e) =>{
e.preventDefault();
if(!title.trim()) return;
addTask(title);
setTitle("");
 setShowInput(false); 
};
  return (
    <div className="mb-6 flex flex-col items-end-safe">
      {!showInput && (
        <button
          onClick={() => setShowInput(true)}
          className="bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 transition font-medium "
        >
          + Add Task
        </button>
      )}

      {showInput && (
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 shadow-sm mt-2 w-full max-w-l"
        >
          <input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-teal-500
                   placeholder-gray-500"
            autoFocus
          />
          <button
            type="submit"
            className="bg-teal-500 text-white px-5 py-2 rounded-md
                   hover:bg-teal-600 transition font-medium"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
}

export default TaskForm
