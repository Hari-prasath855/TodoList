import React from 'react';
import './style.css';
import Delete from '../../image/delete.png'
import Important from '../../image/important.png'
import NotImportant from '../../image/not.png'

export default function Taskbar(props) {
    const{todo , handleCheckBox, handleImportantChange, removeTodo} = props;

    const handleChange = () => {
        handleCheckBox(todo.id);
    }

    const handleIconChange = () => {
        handleImportantChange(todo.id, !todo.important);
    }

    return (
        <div className='taskbar-container'>
            <div className='taskbar-box'>
                <input 
                type='checkbox' 
                onChange={handleChange}
                checked={todo.done}/>
                <div>
                    <span style={todo.done ?{textDecoration:'line-through'}: null} className='taskbar-title-1'>{todo.title}</span>
                    <span className='taskbar-title-2'>Tasks</span>
                </div>
            </div>
            <div className='taskbar-star-box'>
            {todo.important ? (
                    <img
                        src={Important}
                        alt='important'
                        onClick={handleIconChange}
                        style={{cursor:'pointer'}}
                    />
                ) : (
                    <img
                        src={NotImportant}
                        alt='important'
                        onClick={handleIconChange}
                        style={{cursor:'pointer'}}
                    />
                )}
            </div>
            <div className='taskbar-delete-box'>
                <img 
                    src={Delete} 
                    alt='Delete'
                    onClick={() => removeTodo(todo.id)}
                    style={{cursor:'pointer'}}
                    />
            </div>
        </div>
    );
}
