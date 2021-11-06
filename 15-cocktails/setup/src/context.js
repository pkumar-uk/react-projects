import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();



const AppProvider = ({ children }) => {
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchTerm}`);
      const datalist = await response.json();
      setCocktail(datalist.drinks)
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData()
  },[searchTerm])

  return <AppContext.Provider value={{
    cocktail,
    loading,
    searchTerm,
    setSearchTerm
  }
  }>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
