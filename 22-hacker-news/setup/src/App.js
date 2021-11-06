import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
//import Buttons from './Buttons'
import { useGlobalContext } from './context'
function App() {
  const {isLoading} = useGlobalContext()
  return (
    <>
      <SearchForm />
      {!isLoading && <Stories />}
      {isLoading && <div className='loading'></div>}
    </>
  )
}

export default App
