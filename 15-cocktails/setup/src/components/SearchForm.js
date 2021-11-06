import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <div className='section search' >
      <form className="search-form">
        <div className='form-control'>
          <label for="name">Search for your favourite Cocktail</label>
          <input type='text' name='name' id='name'   onChange={(e)=> setSearchTerm(e.currentTarget.value)}></input>
        </div>
      </form>
    
     
    </div>
  )
}

export default SearchForm
