import React from 'react'
import '../../styles/Groups/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left-section">
          <div className="logo">
            <i className="bi bi-image-fill"></i>
            <span>Logoipsum</span>
          </div>
          <div className="search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search..."/>
          </div>
        </div>
        <div className="right-section">
          <i class="bi bi-chat-left-text"></i>
          <i class="bi bi-bell"></i>
          <i class="bi bi-person-circle"></i>
          <span>Karlie Brooks</span>
          <i class="bi bi-chevron-down"></i>
        </div>
    </div>
  )
}

export default Navbar;