import React,{useState,useEffect} from 'react'
import Loading from '../components/Loading'
import Cocktail from '../components/Cocktail'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const params = useParams();
  console.log(params);
  const [load, setLoad] = useState(false);
  const [drink, setDrink] = useState([]);
  const fetchdata = async () => {
    try {
      setLoad(true);
      const response = await fetch(`${url}${params.id}`);
      const data = await response.json();
      setDrink(data.drinks)
      setLoad(false)
    } catch (e) {
      setLoad(false)
    }
  }
  useEffect(() => {
    fetchdata()
  },[])
  if (load) {
    return (
      <Loading/>
    )
  } else {
    return (
      
        drink.map((a) =>  <Cocktail key={a.idDrink} {...a} /> )
      
    )
  }
  
  
}

export default SingleCocktail
