import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
   
  const [value, setValue] = useState(0);
  const [current, setCurrent] = useState(data[value]);
  
  const autoload = () => {

  }
  
  useEffect(() => {
    setTimeout(() => {
      value === data.length - 1 ? setValue(0): setValue(value + 1)
    },1000)
    setCurrent(data[value])
  },[value])

  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <div className='section-center'>
        <article className='article'>
          <img src={current.image} alt={current.name} className='person-img' />
          <h4>{current.name}</h4>
          <p className='title'>{current.title}</p>
          <p className='text'>{current.quote}</p>
          <FaQuoteRight className='icon'></FaQuoteRight>
        </article>
        <button className='prev' onClick={()=> value === 0 ? setValue(data.length - 1): setValue(value -1 ) }><FiChevronLeft /></button>
        <button className='next' onClick={()=> value === data.length - 1 ? setValue(0): setValue(value + 1 ) }><FiChevronRight /></button>
      </div>

    </section>
  )
}

export default App;
