import React from 'react'
import './style.css'

import DotMenu from '../../image/dots-menu.png'

export default function Navbar() {
    return (
        <>
        <div className='navbar'>
            <img className='nav-img' src={DotMenu}/>
            <h3 className='nav-h3'>To Do</h3>
            {/* <input /> */}
        </div>
        </>
    )
}