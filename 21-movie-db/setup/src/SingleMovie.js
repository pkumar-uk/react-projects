import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading,setLoading] = useState(false)
  const fetchMovie = async () => {
    let url = `${API_ENDPOINT}&i=${id}`;
    console.log(url);
    try {
      setLoading(true)
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchMovie()
  },[])
   
  if (!loading && movie) {
    let { Title, Year, Plot, Poster, imdbID } = movie;
    return (
      <section className='single-movie'>
        <img src={ Poster } alt={imdbID} />
        <div className='single-movie-info'>
          <h2>{ Title }</h2>
          <p>{ Plot }</p>
          <h4>{ Year }</h4>
          <Link to='/' className='btn'>Go Back</Link>
        </div>
      </section>
    )
  } else {
    return <div className='loading'></div>
  }
  
}

export default SingleMovie
