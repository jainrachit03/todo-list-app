"use client"
import React, { useState } from 'react';

const Page = () => {
  const [tasks, setTasks] = useState("")
  const [description, setDescription] = useState("")
  const [mainTasks, setMainTasks] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTasks([...mainTasks,{tasks, description}])

    setTasks("")
    setDescription("")
  }

  const handleDelete = (i) => {
   let copyTask = [...mainTasks];
   copyTask.splice(i, 1);
    setMainTasks(copyTask)
  }

  let renderTasks = <h2> No Task Added</h2>;

  if (mainTasks.length > 0) {
    renderTasks = mainTasks.map((t, i) => {
      return(
        <li key={i} className='flex justify-between items-center mb-5'>
          <div className='flex justify-between items-center mb-1 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.tasks}</h5>
          <h6  className='text-xl font-semibold'>{t.description}</h6>
        </div>
        <button 
        onClick={() => handleDelete(i)}
        className='bg-red-400 text-white px-3 py-1 rounded font-bold' > Delete </button>

        </li>
      )
    })
  }
  return (
   <>
    <h1 className='bg-black text-white text-3xl p-4 text-center font-bold '>My Todo list ☀️</h1>

    <form onSubmit={handleSubmit} >
    <input className='text-2xl border-zinc-800 border-2 m-8 px-2 py-3' type="text" placeholder='Enter task here'
    value={tasks}
    onChange={(e) => {
      setTasks(e.target.value)
    }}
    
    />
    
    <input className='text-2xl border-zinc-800 border-2 mx-8 px-2 py-3' type="text" placeholder='Enter description here'
    
    value={description}
    onChange={(e) => {
      setDescription(e.target.value)
    }}
    
    />

    <button className='bg-black text-amber-50 px-3 py-2 font-medium mx-33 my-9'> Add task </button>

    
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
      <ul>
        {renderTasks}
      </ul>
      </div>
      </>
  );
}
export default Page;