'use client'

import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import * as React from 'react';
import Image from 'next/image';

const UpdatePrice = () => {
    const [price, setPrice] = useState('')

    const [modal] = useGlobalState('updatePriceModal')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!price) return;
        cancelModal()
    }

    const resetForm = () => {
        setPrice('')
    }

    const cancelModal = () => {
        setGlobalState('updatePriceModal', 'scale-0')
        resetForm()
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#2a1538] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold '>Update NFT Price</p>
                    <button type='button' className='border-0 bg-transparent focus:outline-none'>
                        <FaTimes onClick={cancelModal}/>
                    </button>
                </div>
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        <Image className='h-full w-full object-cover cursor-pointer' width={150} height={150} src='/artwork_1.png' alt='nft-image'/>
                    </div>
                </div>
                
                
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <input className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' type='number' name='price' min={0.01} step={0.01} placeholder='Price of NFT (XDAI)' value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </div>
                
                <button className='flex justify-center items-center w-full shadow-lg shadow-black text-white mt-5 font-bold bg-[#28043d] hover:bg-[#19012c] rounded-full p-2'>Update NFT Price</button>
            </form>
        </div>
    </div>
  )
}

export default UpdatePrice