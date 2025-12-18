import React from 'react'
import { useState,useEffect } from 'react'
import TaskForm from '../components/TaskForm';
import TaskList from "../components/TaskList";
import FilterTabs from "../components/FilterTabs";
const Task = () => {
    const [tasks, setTasks]= useState([]);
    const [filter, setFilter]= useState("all");

useEffect(()=>{
    const savedTasks= JSON.parse(localStorage.getItem("tasks"));
    if(savedTasks){
        setTasks(savedTasks);
    }
},[]);

useEffect(()=>{
localStorage.setItem("tasks",JSON.stringify(tasks));

},[tasks]);

const addTask=(title)=>{
setTasks([...tasks,{
    id: Date.now(),
    title,
    completed: false,
    createdAt:Date.now()
}

])
}

const toggleTask=(id)=>{
    
    setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} :task
));
};
const editTask =(id,newTitle)=>{
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
}
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};
const filteredTasks = tasks.filter(task=>{
 if (filter ==='pending') return !task.completed;
 if(filter=== 'completed') return task.completed;
 return true;
})



 return (
   <div className="min-h-screen bg-gray-300 pt-4">
     <div className="w-full max-w-3xl min-h-[500px] mx-auto  p-3 rounded-lg shadow-md bg-gray-200">
       <div className="bg-teal-500 text-white text-center py-4 rounded-lg mb-6">
         <h1 className="text-2xl font-semibold">Todo App</h1>
       </div>

       <TaskForm addTask={addTask} />
       <FilterTabs filter={filter} setFilter={setFilter} />

       <TaskList
         tasks={filteredTasks}
         toggleTask={toggleTask}
         deleteTask={deleteTask}
         editTask={editTask}
       />
     </div>
   </div>
 );

}

export default Task
