'use client';

import * as React from 'react';
import Image from 'next/image'
import MarketplaceABI from "../../smart-contract/artifacts/contracts/Marketplace.sol/Marketplace.json"
import { setGlobalState} from '@/store';
import { useContractRead } from 'wagmi'
import { formatEther } from 'viem';
import { toGatewayURL } from 'nft.storage';




const ArtWorks = () => {
   
    

    const {data, isSuccess} = useContractRead({
        address: "0x10fc9639e5052092Ae224b1a2867b0259D22DF45",
        abi: MarketplaceABI.abi,
        functionName: "getAllNFTs",
        onSuccess(data:any){
            console.log(data)
            
        }
    })

    

    
 
  return (
    <div className='bg-[#151c25] gradient-bg-artworks'>
        <div className='w-4/5 py-10 mx-auto'> 
            <h4 className='text-white text-3xl font-bold uppercase text-gradient'>Latest NFTs</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gaps-4 lg:gaps-3 py-2.5'>
                
                {
                    data?.length == 0 ? <><p className='text-white text-3xl font-bold uppercase text-gradient'>No Listed NFTs</p> </>:
                    data?.map((nft,i) => (
                        <div>
                            <Card key={Number(nft.id)} nft={nft} />
                        </div>
                        
                    ))
                }
                
                
            </div>
            <div className='text-center my-5 text-white'>
            {/* <button className='shadow-lg shadow-black text-sm  bg-[#28043d] hover:bg-[#19012c] rounded-full p-2'>Load More...</button> */}
            </div>
        </div>
      
    </div>
  )
}



const Card = ({nft}) => {
    const setNFT = () => {
        setGlobalState('nft', nft)
        setGlobalState('NFTDetailsModal', 'scale-100')
    }
    return (
    <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3'>
        <Image className='h-60 w-full object-cover shadow-black  shadow-lg rounded-lg mb-3' src={`/artwork_1.png`} width={1000} height={1000} alt={nft.title} />
        <h4 className='text-white font-semibold'>{nft.title} #{Number(nft.id)}</h4>
        <p className='text-gray-400 text-sm my-1'>{nft.description}</p>
        <div className='flex justify-between items-center mt-3 text-white'>
            <div className='flex flex-col'>
                <small className='text-xs'>Current Price</small>
                <p className='text-sm font-semibold'>{formatEther(nft.cost)} XDAI</p>
            </div>
            <button onClick={setNFT} className='shadow-lg shadow-black text-sm  bg-[#28043d] hover:bg-[#19012c] rounded-full px-1.5 py-1'>Check Details</button>
            
        </div>
    </div>

    )
}


export default ArtWorks