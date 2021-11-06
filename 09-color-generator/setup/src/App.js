import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025')
  const [colors, setColors] = useState(new Values('#f15025').all());

  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      let inputcolor = new Values(color).all();
      console.log(inputcolor);
      setColors(inputcolor)
    } catch (error) {
      alert('error')
    }
  }
  
   

  return (
    <>
    <section className='container'>
      <h3 > color generator project</h3 >
      <form className="lorem-form" onSubmit={handlesubmit}>
          <input placeholder='#f15025' type='text' value={color} onChange={ (e)=> setColor(e.target.value)}/>
        <button type='submit' className='btn'>Generate</button>
      </form>

    </section>
      <section className='colors'>
        {colors.map((a, index) => <SingleColor key={index} {...a} idex={index} hex={a.hex}/>)}
      </section>
      </>
  )
    //< h2 > color generator project</ >
}

export default App
