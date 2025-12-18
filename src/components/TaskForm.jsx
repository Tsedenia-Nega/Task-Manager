import React from 'react'
import { useState } from 'react'
const TaskForm = ({addTask}) => {
const [title,setTitle]= useState("")
const handleSubmit= (e) =>{
e.preventDefault();
if(!title.trim()) return;
addTask(title);
setTitle("");
};
  return (
    <div>
      
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='What needs to be done ?' value={title}  onChange={(e)=>setTitle(e.target.value)}/>
             <button type='submit'>Add</button>
        </form>


    
    </div>
  )
}

export default TaskForm
