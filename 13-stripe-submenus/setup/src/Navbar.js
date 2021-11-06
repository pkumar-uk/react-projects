import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSubmenu, openSidebar, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tmpbtn = e.target.getBoundingClientRect();
    const center = (tmpbtn.right + tmpbtn.left) / 2;
    const bottom = tmpbtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  }
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="logo" />
          <button className='btn toggle-btn' onClick={openSidebar}><FaBars/></button>
        </div>
        <ul className='nav-links'>
          <li><button className='link-btn' onMouseOver={displaySubmenu}>products</button></li>
          <li><button className='link-btn' onMouseOver={displaySubmenu}>developers</button></li>
          <li><button className='link-btn' onMouseOver={displaySubmenu}>company</button></li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
