import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
const Question = ({ id, title, info }) => {
  const [outline, setOutline] = useState(true);
  if(outline) {
  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=> setOutline(false)}><FiPlus /></button>
      </header>
       
    </div>
    )
  } else {
    return (
      <div className='question'>
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={()=> setOutline(true)}><FiMinus /></button>
        </header>
        <p>{info}</p>
      </div>
      )

  }
};

export default Question;
