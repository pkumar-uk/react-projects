import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({alpha,rgb, type,weight,hex,index}) => {
   
   
  return (
    <article className='color false' style={{ backgroundColor: `#${hex}` }}>
      <p className="percent-value">${ weight }%</p>
      <p className="color-value">#{ hex }</p>

    </article>
  )
  
   
}

export default SingleColor
