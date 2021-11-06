import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

 

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
 
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('page',1);
    fetchData()
  }
  const fetchData = async () => {
    let page = parseInt(localStorage.getItem('page'));
    try {
      setLoading(true);
      let url;
      const urlPage = `&page=${page}`;
      const urlQuery = `&query=${query}`;
      if (query) {
        url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
      } else {
        url = `${mainUrl}${clientID}${urlPage}`
      }
      console.log(url)
      const response = await fetch(url);
      const data = await response.json();
      if (query) {
        if (page === 1) {
        setPhotos(data.results)
        } else {
        setPhotos((oldPhotos)=>{return [...oldPhotos, ...data.results]})
        }
      } else {
        if (page === 1) {
        setPhotos(data)
        } else {
          setPhotos((oldPhotos) => { return [...oldPhotos, ...data]})
        }
      }
      setLoading(false);
      localStorage.setItem('pageload','false')
    } catch (error) {
      setLoading(false)
      localStorage.setItem('pageload','false')
    }
  }
  const newPageLoad = () => {
    let page = parseInt(localStorage.getItem('page'));
    let pageload = localStorage.getItem('pageload');
    if (pageload !== 'true') {
      localStorage.setItem('pageload', 'true')
      localStorage.setItem('page', page + 1)
      fetchData()
    }
  }
  useEffect(() => {
    localStorage.setItem('page', 1);
    localStorage.setItem('pageload', 'false')
    fetchData()
  }, [])
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        newPageLoad();
      }
    });
    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <main>
      <div className='section-title'>
        <h3>Stock Photos from unsplash</h3>
        <div className='underline'></div>
      </div>
      <section className='search'>
        <form className="search-form">
          <input type='text' placeholder='search' className='form-input' value={query} onChange={(e)=>{setQuery(e.target.value)}}>
          </input>
          <button className='submit-btn' type='submit' onClick={handlesubmit}><FaSearch/></button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((a) => < Photo key = { a.id } { ...a } />)}
        </div>
      </section>
    </main>
  )
}

export default App
