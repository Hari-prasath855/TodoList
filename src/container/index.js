import React, { useState } from 'react';
import './style.css';

import Menu from '../image/dash-menu.png';
import Up from '../image/up-arrow.png';
import Down from '../image/down-arrow.png';
import Taskbar from '../component/task';
import Navbar from '../component/navbar';
import AddTask from '../component/addTask';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const todos = [];

export default function Container() {

    const [todo,setTodo] = useState(todos)

    const handleAddTask = (task) => {
        setTodo([...todo, task]);
    }

    const handleCheckBox = (id) => {
        const newTodo = todo.map(todo => {
            if(todo.id === id){
                return{...todo,done:!todo.done}
            }
            return todo;
        })
        setTodo(newTodo);
    }

    const handleImportantChange = (id) => {
        const newTodo = todo.map(todo => {
            if(todo.id === id){
                return{...todo,important:!todo.important}
            }
            return todo;
        })
        setTodo(newTodo);
    }

    const handleDelete = (id) => {
        const newTodo = todo.filter(task => task.id !== id);
        setTodo(newTodo);

    }

    const ascSorting = (task) => {
        const newTask = [...task];

        newTask.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0; 
    });
    
        setTodo(newTask);
    }

    const decSorting = (task) => {
        const newTask = [...task];

        newTask.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA > titleB) return -1;
        if (titleA < titleB) return 1;
        return 0; 
    });
    
        setTodo(newTask);
    }

    



    const today = new Date();

    const inCompleteTask = todo.filter(task => !task.done);
    const completedTask = todo.filter(task => task.done);

    return (
        <>
            <Navbar/>
            <div className='container'>
                <div className='header-container'>
                    <div className='header-content'>
                        <img src={Menu} />
                        <span className='header-text'>My Day</span>
                        
                        
                        <button className='button1' onClick={() => ascSorting(todo)}><img src={Up} width={'20px'} alt='Up arrow'/></button>
                        <button className='button2' onClick={() => decSorting(todo)}><img src={Down} width={'20px'} alt='Down arrow'/></button>
                    </div>
                    <div className='date-text'>
                        <span>{days[today.getDay()]}, {monthNames[today.getMonth()]} {today.getDate()}</span>
                    </div>
                </div>
                <AddTask AddTask={handleAddTask}/>
                <div className='task'>
                    {inCompleteTask.map((todo)=> <Taskbar todo={todo} handleCheckBox={handleCheckBox} handleImportantChange={handleImportantChange} removeTodo={handleDelete}/>)}
                </div>
                <div className='task'>
                    {completedTask.length === 0 ? null : (
                        <>
                            <span className='header-text'>Completed</span>
                            {completedTask.map((todo) => (
                                <Taskbar todo={todo} handleCheckBox={handleCheckBox} handleImportantChange={handleImportantChange} removeTodo={handleDelete}/>
                            ))}
                        </>
                    )}
                </div>
            </div>
                     
        </>
    )
}