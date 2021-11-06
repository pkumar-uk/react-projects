import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { loading, movies } = useGlobalContext();
  if (!loading && movies) {
    return (
      <>
        {movies.map((a, index) => {
          const { imdbID, Poster, Title, Year } = a;
          let murl = Poster ? Poster : url;
          return <Link key={index} to={`/movies/${imdbID}`} className='movie'>
            <article >
              <img src={murl} alt={url} />
              <div className='movie-info'>
                <h4 className='title'>{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>

          </Link>
        }
        )}
      </>
    )
  } else {
    return <div className='loading'></div>
  }
}
export default Movies
