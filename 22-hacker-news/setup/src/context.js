import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'


const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    stories: [],
    pageno: 0,
    pages:0,
    searchtext: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async (url) => {
    console.log('in fetchData')
    dispatch({ type: SET_LOADING })
    try {
      console.log(url);
      const response = await fetch(url);
      const responseJSON = await response.json();
      dispatch({type: SET_STORIES,payload: responseJSON})
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_LOADING,payload:'' })
    }
  
  }
  const nextPage = () => {
    dispatch({type:HANDLE_PAGE, payload:'next'})
  }
  const prevPage = () => {
    dispatch({type:HANDLE_PAGE, payload:'prev'})
  }
  const setSearch = (id) => {
    dispatch({type:HANDLE_SEARCH, payload:id})
  }
  const removeStory = (id) => {
    console.log(id)
    dispatch({type:REMOVE_STORY,payload:id})
  }

  useEffect(() => {
    fetchData(`${API_ENDPOINT}query=${state.searchtext}&page=${state.pageno}`);
  },[state.searchtext,state.pageno])
  
  return <AppContext.Provider value={{ ...state, nextPage, prevPage,setSearch,removeStory }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
