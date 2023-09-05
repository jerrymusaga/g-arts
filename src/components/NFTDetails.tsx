'use client';

import * as React from 'react';
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import {MdOutlineAddReaction} from 'react-icons/md'
// @ts-ignore
import Indenticon from 'react-identicons'
import Image from 'next/image'


const NFTDetails = () => {

    const [NFTDetails] = useGlobalState('NFTDetailsModal')

    const cancelModal = () => {
        setGlobalState('NFTDetailsModal', 'scale-0')
        
    }

    const onChangePrice = () => {
        setGlobalState('NFTDetailsModal', 'scale-0')
        
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${NFTDetails}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold '>Buy & or React on NFT</p>
                    <button type='button' className='border-0 bg-transparent focus:outline-none'>
                        <FaTimes onClick={cancelModal}/>
                    </button>
                </div>
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-40 w-40'>
                        <Image className='h-full w-full object-cover cursor-pointer' width={1000} height={1000} src='/artwork_1.png' alt='nft-image'/>
                    </div>
                </div>
                <div className='flex flex-col justify-start rounded-xl mt-5'>
                    <h4 className='text-white font-semibold '>Title</h4>
                    <p className='text-gray-400 text-xs my-1'>Officia proident amet mollit duis nisi ut exercitation cupidatat aliqua proident ullamco laborum id occaecat. Reprehenderit esse aliqua nulla Lorem pariatur. Duis nostrud ut reprehenderit quis ipsum Lorem magna labore deserunt nulla culpa pariatur labore. Duis pariatur irure commodo sunt irure adipisicing ex ea dolore.</p>
                    <div className='flex justify-between items-center mt-3 text-white'>
                        <div className='flex justify-start items-center'>
                            <Indenticon className='h-10 w-10 object-contain rounded-full mr-3' size={50} />
                            <div className='flex flex-col justify-center items-start'>
                                <small className='text-white font-bold'>@owner</small>
                                <small className='text-pink-800 font-semibold'>jerry.eth</small>
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <small className='text-xs'>Current Price</small>
                            <p className='text-sm font-bold'>2.5 XDAI</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-between items-center space-x-2'>
                    <button className='flex justify-center items-center w-full shadow-lg shadow-black text-white mt-5 font-bold bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Buy NFT</button>
                    <button onClick={onChangePrice} className='flex justify-center items-center w-full shadow-lg shadow-black text-white mt-5 font-bold bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Update NFT Price</button>
                    <button className='flex justify-center items-center w-50 shadow-lg shadow-black text-white mt-5 font-bold bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'><MdOutlineAddReaction /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFTDetails