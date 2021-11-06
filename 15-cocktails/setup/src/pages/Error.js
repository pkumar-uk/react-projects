import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section error-page'>
       
      <div className='error-container'>
        <h3>Oops! it is a dead end.</h3>
      
        <Link to='/'><button className='btn'>Go Back</button></Link>
        </div>
    </section>
  )
}

export default Error
