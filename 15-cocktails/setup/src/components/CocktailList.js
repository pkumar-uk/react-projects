import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, cocktail } = useGlobalContext();
  
    if(loading) {
      return (
        <section  >
          <Loading/>
        </section>
      )
    }
    if (cocktail.length > 0) {
      return (
        <section className='section'>
          <h2 className='section-title'>Cocktails</h2>
          <div className='cocktails-center'>
            {cocktail.map((a1) =>
              <article key={a1.idDrink } className='cocktail'>
                <div className='img-container'>
                  <img src={a1.strDrinkThumb} alt={a1.strDrink} />
                </div>
                <div className='cocktail-footer'>
                  <h3>{a1.strDrink}</h3>
                  <h4>{a1.strGlass}</h4>
                  <p>{a1.strAlcoholic}</p>
                  <a class='btn btn-primary btn-details' href={`/singlecocktail/${a1.idDrink}`}>
                    Details</a>
                </div>
              </article>)}
          </div>
        </section>
        )
    } else {
      return (
        <section className=''>
          <h3>No results for search criteria!</h3>
        </section>
      )
      }
    
  
}

export default CocktailList
