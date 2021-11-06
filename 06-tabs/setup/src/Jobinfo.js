import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
const Jobinfo = ({company,dates,duties,id,order,title}) => {
  return (
      <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates }</p>
          {duties.map((duty) =>  <div className='job-desc'><FaAngleDoubleRight/><p>{ duty }</p></div>)}
          
       
    </article>
  )
};

export default Jobinfo;
