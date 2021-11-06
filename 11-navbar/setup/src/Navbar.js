import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linkscontainer = useRef(null);
  const linksul = useRef(null);
  const check = () => {
    setShow(!show);
     
     
  }
  useEffect(() => {
    if (show) {
      const linksHeight = linkscontainer.current.getBoundingClientRect().height;
      
      linkscontainer.current.style.height = `${linksHeight}px`;
      console.log(linkscontainer)
    } else {
      linkscontainer.current.style.height = '0px';
      console.log(linkscontainer)
    }
  },[show])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="text" className='logo' />
          <div className='nav-toggle' onClick={() => check()}><FaBars /></div>
        </div>
        {/* <div className={`${(show ? 'links-container show-container' : 'links-container')}`} ref={linkscontainer} > */}
        <div className='links-container ' ref={linkscontainer} >
          <ul className='links' ref={linksul}>
            {links.map((link) => <li key={link.id}><a href= { link.url }>{ link.text }</a></li>)}
          </ul>
          </div>
          <ul className='social-icons'>
            {social.map((link)=> <li key={link.id}><a href= { link.url }>{ link.icon }</a></li>) }
          </ul>
       
        
      </div>
    </nav>
  )
}

export default Navbar
