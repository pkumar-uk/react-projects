import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { search, setSearch, fetchData, error } = useGlobalContext();
  return (
    <form className='search-form' onSubmit={(e) => { e.preventDefault();fetchData()}}>
      <h2>Search Movies</h2>
      <input type='text' className='form-input' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  
    )
}

export default SearchForm
