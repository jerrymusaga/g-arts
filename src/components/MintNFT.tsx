"use client"

import { useState, useEffect } from 'react'
import {FaTimes} from 'react-icons/fa'
import Image from 'next/image'
import { setGlobalState, useGlobalState, setLoadingMsg,setAlert, } from "@/store";
import MarketplaceABI from '../../smart-contract/artifacts/contracts/Marketplace.sol/Marketplace.json';
import { parseEther} from "viem";
import { useAccount } from "wagmi";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, } from "wagmi";
import { useRouter } from 'next/router';
import { Web3Storage } from 'web3.storage';

import { upload } from '../../upload.mjs';



const MintNFT = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)
    

    const [modal] = useGlobalState('modal')

    const {address} = useAccount()


    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await upload(fileUrl, title, description);
        setFileUrl(result.url)
        console.log(result)
        cancelModal()

    }

   
    
    const resetForm = () => {
        setTitle('')
        setDescription('')
        setPrice('')
        setImgBase64(null)
        setFileUrl('')
    }

    const cancelModal = () => {
        setGlobalState('modal', 'scale-0')
        resetForm()
        
    }

    const changeImage = async (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])
    
        reader.onload = (readerEvent) => {
          const file = readerEvent?.target.result 
          setImgBase64(file)
          setFileUrl(e.target.files[0])
        }
    }
   
    const {write: mint} = useContractWrite({
        address: "0x10fc9639e5052092Ae224b1a2867b0259D22DF45",
        abi: MarketplaceABI.abi,
        functionName: "payToMint",
        args:[title, description, fileUrl, parseEther(price)],
        account: address,
        value: parseEther("0.001"),
        onSuccess(data){
            setAlert('Minting completed...', 'green')
            const router = useRouter();
            console.log(data)
            router.reload();
        },
        onError(error){
            setAlert(`Minting Failed ${error.message}`, 'red')
            console.log(`This is the error ${error}`)
        }
        
    })
    // const { data, isLoading, isSuccess, write: mint } = useContractWrite(config)
    

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}>
        <div className='bg-[#151c25] shadow-xl shadow-[#2a1538] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <form 
                onSubmit={() =>{
                    handleSubmit
                    mint?.()
                }   
                } 
                className='flex flex-col'>
                <div className='flex justify-between items-center text-gray-400'>
                    <p className='font-semibold '>Mint NFT</p>
                    <button type='button' className='border-0 bg-transparent focus:outline-none'>
                        <FaTimes onClick={cancelModal}/>
                    </button>
                </div>
                <div className='flex justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-20 w-20'>
                        <Image width={150} height={150} className='h-full w-full object-cover cursor-pointer' src={imgBase64 || '/artwork_1.png'} alt='nft-image'/>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <label className='block'>
                        <span className='sr-only'>Choose NFT image</span>
                        <input onChange={changeImage}  className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631] focus:outline-none cursor-pointer focus:ring-0' type='file' accept='image/png, image/avif, image/gif, image/jpg, image/jpeg, image/webp' required/> 
                    </label>
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <input className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' type='text' name='title' placeholder='Title of NFT' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <input className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0' type='number' name='price' min={0.01} step={0.01} placeholder='Price of NFT (XDAI)' value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </div>
                <div className='flex justify-between items-center bg-gray-800 rounded-xl mt-5'>
                    <textarea className='block w-full text-sm text-slate-500 focus:outline-none cursor-pointer focus:ring-0 bg-transparent border-0 h-20 resize-none' name='description' placeholder='Description of NFT' value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <button 
                    disabled={!title || !description || !price} 
                    className='flex justify-center items-center w-full shadow-lg shadow-black text-white mt-5 font-bold bg-[#28043d] hover:bg-[#19012c] rounded-full p-2'>
                    Mint NFT
                </button>
            </form>
        </div>
    </div>
  )
}

export default MintNFT