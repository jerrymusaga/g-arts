'use client';

import * as React from 'react';
import { Web3Button, useWeb3ModalTheme } from '@web3modal/react'

const Nav = () => {

  const { theme, setTheme } = useWeb3ModalTheme()

  setTheme({
    themeMode: 'dark',
    themeVariables: {
      '--w3m-font-family': 'Roboto, sans-serif',
      '--w3m-accent-color': '#bd255f'
      // ...
    }
  })

  return (
    <div className='w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto'>
        <div className='md:flex-[0.5] flex-initial justify-center items-center text-gradient text-5xl font-bold'>
          G-Arts
        </div>
        
        <ul className='md:flex-[0.5] text-white md:flex hidden list-none justify-between items-center flex-initial'  >
            
            <li className='mx-4 cursor-pointer'>Market</li>
            <li className='mx-4 cursor-pointer'>MetaVerse</li>
            <li className='mx-4 cursor-pointer'>Profile</li>
            
        </ul>
        <>
        <Web3Button />  
        </>
          
        
    </div>
  )
}

export default Nav