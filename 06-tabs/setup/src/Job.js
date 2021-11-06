import React from 'react';

const Job = ({ id, company, active, filter }) => {
    if (active === id) {
        return (
             
              <button className='job-btn active-btn' onClick={()=>filter(id)} >{company}</button>
            
          )
    } 
  return (
    
      <button className='job-btn false'  onClick={()=>filter(id)}>{company}</button>
    
  )
};

export default Job;
