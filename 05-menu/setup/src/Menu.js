import React from 'react';

const Menu = ({ item, filter }) => {
  return (
    <div className=''>
      <button className='filter-btn' onClick={()=>filter( item )}>{item}</button>
    </div>
  )
};

export default Menu;
