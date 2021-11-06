import React, { useState } from 'react'
import logo from './logo.svg'
import { FaTimes , FaBars} from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { issidebaropen, closeSidebar } = useGlobalContext();

  return (
    
      
      
      <aside className={`${issidebaropen ? 'sidebar show-sidebar' : 'sidebar'}`} >
        <div className='sidebar-header'>
          <img src={logo} alt="logo" />
          <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
          
        </div>
        
        <ul className='links'>
          {links.map((link) =>
            <li key={link.id} ><a href={link.url}>{link.icon} { link.text}</a></li>
          )}
        </ul>
        <ul className='social-icons'>
          {social.map((s) =>
            <li key={s.id}><a href={s.url}>{s.icon}</a></li>
            )}
        </ul>
      </aside>
    
      )
    
}

export default Sidebar
