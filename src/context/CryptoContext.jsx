import { createContext, useEffect, useState } from 'react'

export const CryptoContext = createContext({})

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(250);

  const fetchAllCoin = async () => {
    try {
        const data = {
            method: 'GET',
            headers: {accept: 'application/json', 
            'x-cg-demo-api-key': 'CG-4gCqyFDZsQjzNBdZ5Wt7QgBA'}
          };
          
        fetch(
            `https://api.coingecko.com/api/v3/coins/list`, options
        )
            .then((data) => data.json())
            .then((json) => json);
            setTotalPages(data.length)
    } catch (error) {
       
    }

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 
        'x-cg-demo-api-key': 'CG-4gCqyFDZsQjzNBdZ5Wt7QgBA'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}`, options)
        .then(response => response.json())
        .then(response => setCryptoData(response))
        .catch(err => console.error(err));

  }
  useEffect(() => {
    fetchAllCoin();
  },[page])

  return <CryptoContext.Provider value={{
    cryptoData, 
    page, setPage,
    totalPages, 
}}>{children}</CryptoContext.Provider>
}
