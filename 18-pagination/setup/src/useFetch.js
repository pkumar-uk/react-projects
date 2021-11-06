import { useState, useEffect } from 'react'
//import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  //#Source https://bit.ly/2neWfJ2 
  const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
  const getProducts = async () => {
    const response = await fetch(url)
    const tochunk = await response.json();
    const data =  chunk(tochunk,10)
    setData(data)
    setLoading(false)
  }
 
  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
