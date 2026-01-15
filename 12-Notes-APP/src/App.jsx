import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDeatils] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDeatils('')
  }
  const deleteNote=(idx)=>{
    const delTask=[...task];
    delTask.splice(idx,1);
    setTask(delTask)

  }

  return (
    <div className='h-screen bg-black text-white'>
      <h1 className='text-2xl p-5'>Add Notes</h1>

      <form
        onSubmit={submitHandler}
        className='flex p-10 flex-col items-start'
      >
        <input
          type="text"
          placeholder='Enter Task Heading'
          className='px-5 py-2 border-2 rounded mb-5 w-full text-white border-white'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder='Enter Details'
          className='px-5 py-2 border-2 rounded h-20 w-full text-white border-white'
          value={details}
          onChange={(e) => setDeatils(e.target.value)}
        />

        <button className='bg-white text-black px-5 py-2 rounded mt-5'>
          Add Note
        </button>
      </form>

      <div className='flex flex-wrap p-10 gap-5'>
        <h1 className='w-full text-xl'>Recent Notes</h1>

        {task.map((elem, idx) => {
          return (
         
            <div
              key={idx}
              className='h-32 w-48 rounded-2xl bg-white text-black p-3'
            >
                 <button className='bg-red-300' onClick={(idx)=>{deleteNote(idx)}}>Cancel</button>
              <h2 className='font-bold'>{elem.title}</h2>
              <p className='text-sm mt-2'>{elem.details}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
