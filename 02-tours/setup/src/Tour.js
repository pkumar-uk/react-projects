import React, { useState } from 'react';


const delbtn = (e)=> {
  
  console.log(e)
}
const Tour = ({tour,removetour}) => {
  const [readMore,setReadmore] = useState(false);  
  const {id,image,info,name,price} = tour;
  return (
    <article key={id} className="single-tour">
          <img src={image} alt={name}></img>
          <footer>
            <div className="tour-info">
              <h4>{name}</h4>
              <h4 className="tour-price">${price}</h4>
              </div>
              <p>{readMore ? info : `${info.substring(0,200)}...`}  <a href={'#'} onClick={()=> setReadmore(!readMore)}>{readMore ? 'Less' : 'More'}</a></p>
              <button className="delete-btn" onClick={(e)=> {e.preventDefault();removetour(id)}}>Delete</button>
          </footer>
          </article>
  )
  
   
};

export default Tour;
