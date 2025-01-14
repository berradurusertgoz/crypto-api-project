import React from 'react'
import Logo from '../components/Logo'
import TableComponent from '../components/TableComponent'
import { CryptoProvider } from '../context/CryptoContext'

const Home = () => {
  return (
    <CryptoProvider>
    <main className='w-full h-full flex flex-col first-letter:content-center 
    items-center relative text-white font-nunito'>
    <div className='w-screen h-screen bg-gray-300 fixed -z-10'/>
           <Logo />
           <TableComponent />
    </main>
    </CryptoProvider>
  )
}

export default Home