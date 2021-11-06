import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
const Home = () => {
  return (
    <>
      <Form />
      <section className='movies'>
        <Movies />
      </section>
    </>
  )
}


export default Home
