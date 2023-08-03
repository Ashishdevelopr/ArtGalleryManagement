import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="side-title">Art Gallery Management</div>
        <div className="routing-title">
            <NavLink to="/add-art" className='space'>Form</NavLink>
            <NavLink to="/art-gallery" className='space'>View</NavLink>
            </div>
    </div>
  )
}

export default Navbar