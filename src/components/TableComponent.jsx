import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import Pagination from './Pagination'
import Chart from './Chart'

const TableComponent = () => {
    
    let {cryptoData} = useContext(CryptoContext)

  return (
    <div className='w-[80%] h-full flex flex-col border border-gray-100 mt-16 rounded'>
       {
        cryptoData ? 
        <table className='w-full table-auto'>
        <thead className='capitalize text-base text-gray-100
        font-medium border-b border-gray-100'>
            <tr>
                <th className='py-2 px-4'>Asset</th>
                <th className='py-2 px-4'>Name</th>
                <th className='py-2 px-4'>Price</th>
                <th className='py-2 px-4'>Market Value</th>
                <th className='py-2 px-4'>24h Change</th>
                <th className='py-2 px-4'>Graphic</th>
            </tr>
        </thead>
        <tbody>
            {
                cryptoData.map(data => {
                    return(
                <tr key={data.id} className='text-center text-base border-b border-gray-700
        hover:bg-gray-200 last:border-b-0'>
                <td className='px-4 py-4'>
                   <img className='w-8 h-8 mr-2' src={data.image} alt={data.name}/>
                </td>
                <td className='py-4 px-4'>{data.name}</td>
                <td className='py-4 px-4'>{data.current_price}</td>
                <td className='py-4 px-4'>{data.market_cap}</td>
                <td className={
                    data.price_change_percentage_24h > 0 ? "text-green py-4": "text-red py-4"
                }>{Number(data.price_change_percentage_24h).toFixed(2)} %</td>
                <td className='py-4 px-4'><Chart id={data.id}/></td>
            </tr>
                    )
                })
            }
        
        </tbody>
    </table>
    : null
       }
       <div className='flex items-center justify-between mt-4 capitalize h-[2rem]'>
        <span>Data provided by <a className='text-cyan' href='http://www.coingecko.com' rel='noreferrer' target={"_blank"}>CoinGecko</a></span>
       <Pagination />
       </div>
    </div>
  )
}

export default TableComponent