import React, { useState } from 'react';
import './style.css';

export default function AddTask(props) {
    const {AddTask} = props

    const val = 0;

    const[task,setTask] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        const newTask = {id:Math.random(),title:task,done:false,important:false}
        AddTask(newTask)
        setTask('')
    }

    return (
        <>
        <form className='add-task-container' onSubmit={handleSubmit}>
            <button style={{ color: '#2564ce', fontSize: '2rem', cursor: 'pointer',outline:'none',border:'none',backgroundColor:'transparent',margin :'0px 18px' }}>+</button>
            <input 
            style={{width: '100%' }} 
            placeholder='Add a task' 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required />
        </form>
        </>
    );
}