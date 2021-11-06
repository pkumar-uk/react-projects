import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, image,job, text } = people[index];
  const ileft = () => {
    console.log(index === 0 ? 0 : index - 1 )
    setIndex(index === 0 ? 0 : index - 1 )
  }
  const iright = () => {
      
      setIndex(index === people.length -1 ? people.length-1 : index + 1 )
     
  
  }
  const irand = () => {
    let r = Math.floor(Math.random() * people.length);
    while (r === people) {
      r = Math.floor(Math.random() * people.length)
    }
    setIndex(r);
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={ileft}><FaChevronLeft /></button>
        <button className='next-btn' onClick={iright}><FaChevronRight /></button>
      </div>
      <button className='random-btn' onClick={irand}>Surprise me</button>
    </article>

  )
};
export default Review;
