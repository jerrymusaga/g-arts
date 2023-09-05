'use client';

import * as React from 'react';
import Image from 'next/image'
import { setGlobalState } from '@/store';
const ArtWorks = () => {
    
  return (
    <div className='bg-[#151c25] gradient-bg-artworks'>
        <div className='w-4/5 py-10 mx-auto'> 
            <h4 className='text-white text-3xl font-bold uppercase text-gradient'>Latest NFTs</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gaps-4 lg:gaps-3 py-2.5'>
                
                <Card  />
                <Card2 />
                
            </div>
            <div className='text-center my-5 text-white'>
            <button className='shadow-lg shadow-black text-sm  bg-[#28043d] hover:bg-[#19012c] rounded-full p-2'>Load More...</button>
            </div>
        </div>
      
    </div>
  )
}



const Card = () => (
    <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
        <Image className='h-60 w-full object-cover shadow-black  shadow-lg rounded-lg mb-3' src="/artwork_1.png" width={1000} height={1000} alt="nft1" />
        <h4 className='text-white font-semibold'>NFT #1</h4>
        <p className='text-gray-400 text-sm my-1'>Officia proident amet mollit duis nisi ut exercitation cupidatat aliqua proident ullamco laborum id occaecat. Reprehenderit esse aliqua nulla Lorem pariatur. Duis nostrud ut reprehenderit quis ipsum Lorem magna labore deserunt nulla culpa pariatur labore. Duis pariatur irure commodo sunt irure adipisicing ex ea dolore.</p>
        <div className='flex justify-between items-center mt-3 text-white'>
            <div className='flex flex-col'>
                <small className='text-xs'>Current Price</small>
                <p className='text-sm font-semibold'>1.5 XDAI</p>
            </div>
            <button onClick={() => setGlobalState('NFTDetailsModal', 'scale-100')} className='shadow-lg shadow-black text-sm  bg-[#28043d] hover:bg-[#19012c] rounded-full px-1.5 py-1'>Check Details</button>
            
        </div>
    </div>
)

const Card2 = () => (
    <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
        <Image className='h-60 w-full object-cover shadow-black  shadow-lg rounded-lg mb-3' src="/artwork_2.png" width={1000} height={1000} alt="nft1" />
        <h4 className='text-white font-semibold'>NFT #2</h4>
        <p className='text-gray-400 text-sm my-1'>Officia proident amet mollit duis nisi ut exercitation cupidatat aliqua proident ullamco laborum id occaecat. Reprehenderit esse aliqua nulla Lorem pariatur. Duis nostrud ut reprehenderit quis ipsum Lorem magna labore deserunt nulla culpa pariatur labore. Duis pariatur irure commodo sunt irure adipisicing ex ea dolore.</p>
        <div className='flex justify-between items-center mt-3 text-white'>
            <div className='flex flex-col'>
                <small className='text-xs'>Current Price</small>
                <p className='text-sm font-semibold'>0.5 XDAI</p>
            </div>
            <button onClick={() => setGlobalState('NFTDetailsModal', 'scale-100')} className='shadow-lg shadow-black text-sm  bg-[#28043d] hover:bg-[#19012c] rounded-full px-1.5 py-1'>Check Details</button>
        </div>
    </div>
)

export default ArtWorks