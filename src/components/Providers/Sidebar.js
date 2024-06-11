import React from 'react';
import '../../styles/Providers/Sidebar.css';
import SidebarItem from './SidebarItem.js';
import items from '../../utils/Sidebar.json';

const Sidebar = () => {
  return (
    <div className='main'>
        <div className="sidebar">
          {items.map((item, index) => <SidebarItem key={index} item={item}/>)}
        </div>
    </div>
  )
}

export default Sidebar;