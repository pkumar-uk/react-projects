import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { page, coord, isSubmenuOpen, closeSubmenu } = useGlobalContext();
  const pageref = useRef(null);
  console.log(page)
  useEffect(() => {
    const container = pageref.current;
    const { center, bottom } = coord;
    container.style.left = `${center}px`;
    container.style.top = `${bottom}px`;
    
  },[page,coord])
  return (
    <aside className='submenu show' ref={pageref}>
      <section>
        <h4>{page.page}</h4>
        <div className='submenu-center col-3'>
          {page.links.map((link) => <a href={link.url} alt="link">{ link.icon }{link.label }</a>)}
        </div>
      </section>
    </aside>

  )
}

export default Submenu
