import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removetour}) => {
  return (
  <section>
  <h2>our tours</h2>
  <div className="underline"></div>
  <div>
  {tours.map((tour)=>{
         
        return (<Tour key={tour.id} tour={tour} removetour={removetour}/>
  )})}
      </div>
  </section>)
};

export default Tours;
