import React, {useState} from 'react'
import { useGlobalContext } from './context'


const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const [searchinput, setSearchinput] = useState('');
  return (
    <form className='search-form' onSubmit={(e) => { e.preventDefault();setSearch(searchinput)}}>
      <h2>Search Hacker News</h2>
      <input type='text' value={searchinput}  className='form-input' onChange={ (e)=> setSearchinput(e.target.value)}/>
    </form>
  )
}

export default SearchForm
