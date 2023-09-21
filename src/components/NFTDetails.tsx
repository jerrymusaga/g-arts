'use client';

import * as React from 'react';
import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import {MdOutlineAddReaction} from 'react-icons/md'
// @ts-ignore
import Indenticon from 'react-identicons'
import Image from 'next/image'
import { formatEther } from 'viem';
import { useAccount, useContractWrite } from 'wagmi';
import MarketplaceABI from '../../smart-contract/artifacts/contracts/Marketplace.sol/Marketplace.json'
import { parseEther } from 'viem';
import { setAlert } from '../store';


const NFTDetails = () => {

    const [NFTDetails] = useGlobalState('NFTDetailsModal')
    const [nft] = useGlobalState('nft');
    const {address} = useAccount()
    console.log(nft?.cost)
    const cancelModal = () => {
        setGlobalState('NFTDetailsModal', 'scale-0')
        
    }

    const onChangePrice = () => {
        setGlobalState('NFTDetailsModal', 'scale-100')
        setGlobalState('updatePriceModal', 'scale-100')
        setGlobalState('nft', nft)
        
    }

    const {write: buyNFT} = useContractWrite({
        address: "0x10fc9639e5052092Ae224b1a2867b0259D22DF45",
        abi: MarketplaceABI.abi,
        functionName: "payToBuy",
        args:[Number(nft?.id)],
        account: address,
        value: nft?.cost,
        onSuccess(data){
            setAlert('Nft Bought...', 'green')
            cancelModal()
            setGlobalState('NFTDetailsModal', 'scale-0')
        },
        onError(error){
            setAlert(`Unable to Buy NFT ${error.message}`, 'red')
            console.log(`This is the error ${error}`)
            cancelModal()
            setGlobalState('NFTDetailsModal', 'scale-0')
        }
    })

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${NFTDetails}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#2a1538] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold '>Buy & or React on NFT</p>
                    <button type='button' className='border-0 bg-transparent focus:outline-none'>
                        <FaTimes onClick={cancelModal}/>
                    </button>
                </div>
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-40 w-40'>
                        <Image className='h-full w-full object-cover cursor-pointer' width={1000} height={1000} src='/artwork_1.png' alt={nft?.title}/>
                    </div>
                </div>
                <div className='flex flex-col justify-start rounded-xl mt-5'>
                    <h4 className='text-white font-semibold '>{nft?.title}</h4>
                    <p className='text-gray-400 text-xs my-1'>{nft?.description}</p>
                    <div className='flex justify-between items-center mt-3 text-white'>
                        <div className='flex justify-start items-center'>
                            <Indenticon className='h-10 w-10 object-contain rounded-full mr-3' size={50} string={nft?.owner} />
                            <div className='flex flex-col justify-center items-start'>
                                <small className='text-white font-bold'>{nft?.owner}</small>
                                <small className='text-pink-800 font-semibold'>jerry.eth</small>
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <small className='text-xs'>Current Price</small>
                            <p className='text-sm font-bold'>{(nft?.cost)} XDAI</p>
                        </div>
                    </div>
                </div>
                {
                    address == nft?.owner ? (
                        <button onClick={onChangePrice} className='flex justify-center items-center w-full shadow-lg shadow-black text-white mt-5 font-bold bg-[#28043d] hover:bg-[#19012c] rounded-full p-2'>Update NFT Price</button>
                    ) : (
                        <div className='flex justify-between items-center space-x-2'>
                        <button onClick={()=> buyNFT?.()} className='flex justify-center items-center w-full shadow-lg shadow-black text-white mt-5 font-bold bg-[#28043d] hover:bg-[#19012c] rounded-full p-2'>Buy NFT</button>
                        <button onClick={()=>setGlobalState('reactionModal', 'scale-100')} className='flex justify-center items-center w-50 shadow-lg shadow-black text-white mt-5 font-bold bg-[#28043d] hover:bg-[#19012c]] rounded-full p-2'><MdOutlineAddReaction /></button>
                    </div>
                    )
                }
                
               
            </div>
        </div>
    </div>
  )
}

export default NFTDetails