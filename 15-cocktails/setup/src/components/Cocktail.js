import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = (prop) => {
  console.log(prop)
  const { strDrink, strDrinkThumb, strCategory, info, strGlass, strInstructions, strIngredient1,strIngredient2,strIngredient3,strIngredient4 } = prop;
  return (
    <section className='section cocktail-section'>
      <Link to='/'><button className='btn btn-primary btn-details'>Back Home</button></Link>
       
      <h2 className='section-title'>{strDrink}</h2>
      <div className='drink'>
        <img src={strDrinkThumb } alt={strDrink } />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>{strDrink}
          </p>
          <p>
            <span className='drink-data'>category :</span>{strCategory}
          </p>
          <p>
            <span className='drink-data'>info :</span>{info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>{strGlass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>{strInstructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            <span>{strIngredient1}</span>
            <span> {strIngredient2}</span>
            <span> {strIngredient3}</span>
            <span> { strIngredient4 }</span>
          </p>
        </div>

      </div>
    </section>
  )
}

export default Cocktail
