'use client'

import {FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
import Image from 'next/image'
import * as React from 'react';

import { useContractWrite, useAccount } from 'wagmi';
import MarketplaceABI from '../../smart-contract/artifacts/contracts/Marketplace.sol/Marketplace.json'
import { setAlert, setLoadingMsg } from '../store';
import { parseEther } from 'viem';



const ReactionsModal = () => {

    const [modal] = useGlobalState('reactionModal')
    const [nft] = useGlobalState('nft')
    const {address} = useAccount()

    const cancelModal = () => {
        setGlobalState('reactionModal', 'scale-0')
        
    }

    const reactions = {
        fire: "🔥",
        love: "💖",
        like: "👍"
    }

    const {write: rewardNFTFireButton} = useContractWrite({
        address: "0x309D48Fc35e3361D8A980e6BD9e481Fd131bC90A",
        abi: MarketplaceABI.abi,
        functionName: "rewardNFTFireButton",
        args:[Number(nft?.id)],
        account: address,
        value: parseEther('1'),
        onSuccess(data){
            setAlert('Rewarded this Artist with 1 XDAI...', 'green')
            cancelModal()
            
        },
        onError(error){
            setAlert(`Unable to Reward Artist ${error.message}`, 'red')
            console.log(`This is the error ${error}`)
            cancelModal()
            
        }
    })

    const {write: rewardNFTLoveButton} = useContractWrite({
        address: "0x10fc9639e5052092Ae224b1a2867b0259D22DF45",
        abi: MarketplaceABI.abi,
        functionName: "rewardNFTLoveButton",
        args:[Number(nft?.id)],
        account: address,
        value: parseEther("0.5"),
        onSuccess(data){
            setAlert('Rewarded this Artist with 0.5 XDAI...', 'green')
            cancelModal()
            
        },
        onError(error){
            setAlert(`Unable to Reward Artist ${error.message}`, 'red')
            console.log(`This is the error ${error}`)
            cancelModal()
            
        }
    })

    const {write: rewardNFTLikeButton} = useContractWrite({
        address: "0x309D48Fc35e3361D8A980e6BD9e481Fd131bC90A",
        abi: MarketplaceABI.abi,
        functionName: "rewardNFTLoveButton",
        args:[Number(nft?.id)],
        account: address,
        value: parseEther("0.2"),
        onSuccess(data){
            setAlert('Rewarded this Artist with 0.2 XDAI...', 'green')
            cancelModal()
            
        },
        onError(error){
            setAlert(`Unable to Reward Artist ${error.message}`, 'red')
            console.log(`This is the error ${error}`)
            cancelModal()
            
        }
    })

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#2a1538] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold '>Make Reactions on NFT</p>
                    <button type='button' className='border-0 bg-transparent focus:outline-none'>
                        <FaTimes onClick={cancelModal}/>
                    </button>
                </div>
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        <Image className='h-full w-full object-cover cursor-pointer' width={150} height={150} src="/artwork_1.png" alt={nft?.title}/>
                    </div>
                </div>
                <div>
                <div className='w-3/4 flex justify-between items-center mt-5'>
                    <div className='text-white'>
                        <p className='font-bold'>Reward 1 XDAI</p>
                        <button onClick={() => rewardNFTFireButton?.()} className='flex justify-center items-center w-50 shadow-lg shadow-black text-white mt-5 font-bold bg-[#28043d] hover:bg-[#19012c]] rounded-full p-2'>{reactions.fire}</button>
                    </div>
                    <div className='text-white'>
                        <p className='font-bold'>Reward 0.5 XDAI</p>
                        <button onClick={() => rewardNFTLoveButton?.()} className='flex justify-center items-center w-50 shadow-lg shadow-black text-white mt-5 font-bold bg-[#28043d] hover:bg-[#19012c]] rounded-full p-2'>{reactions.love}</button>
                    </div>
                    <div className='text-white'>
                        <p className='font-bold'>Reward 0.2 XDAI</p>
                        <button onClick={()=>rewardNFTLikeButton?.()} className='flex justify-center items-center w-50 shadow-lg shadow-black text-white mt-5 font-bold bg-[#28043d] hover:bg-[#19012c]] rounded-full p-2'>{reactions.like}</button>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ReactionsModal