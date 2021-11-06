import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('Batman');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({show:false,msg:''})
  const fetchData = async () => {
    let url;
    url = `${API_ENDPOINT}&s=${search}`
    console.log(url);
    try {
      setLoading(true);
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Response === 'True') {
        setMovies(responseJson.Search)

        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: responseJson.Error })
      }

      setLoading(false)
       
    } catch (e) {
      setLoading(false)
      console.log(e)
       
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return <AppContext.Provider value={{
    search,setSearch,loading,movies,fetchData, error
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
