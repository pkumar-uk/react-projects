import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
  vehicles: 28
}


const API_ENDPOINT = 'https://opentdb.com/api.php?'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState('sports');
  const [difficulty, setDifficulty] = useState('easy');
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);
  const [correct,setCorrect] = useState(0)
  const fetchQuestions = async () => {
    setWaiting(false);
    setLoading(true);
    //amount=10&category=18&difficulty=easy&type=multiple
    let newcategory = table[category];
    let url = `${API_ENDPOINT}amount=${amount}&category=${newcategory}&difficulty=${difficulty}&type=multiple`
     
    try {
      let resp = await fetch(url)
      let respJSON = await resp.json();
      if (respJSON.response_code !== 0) {
        setError(true);
        setLoading(false)
        setCorrect(0)
        setCounter(0)
      } else {
        setQuestions(respJSON.results);
        setCorrect(0)
        setCounter(0)
        setLoading(false)
    
      }
    } catch (error) {
      setLoading(false)
      setWaiting(true)
      setError(true)
    }
    
  
  }
  return <AppContext.Provider value={{
    amount, setAmount, category, setCategory, difficulty, setDifficulty, waiting, setWaiting, loading, setLoading, fetchQuestions,
    questions,setQuestions,error,setError,correct,counter,setCorrect,setCounter
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
