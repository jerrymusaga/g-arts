'use client'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ArtWorks from '@/components/Artworks'
import MintNFT from '@/components/MintNFT'
import NFTDetails from '@/components/NFTDetails'
import ReactionsModal from '@/components/ReactionsModal'
import UpdatePrice from '@/components/UpdatePrice'
import Alert from '@/components/Alert'

import { useEffect } from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { gnosisChiado, gnosis} from 'wagmi/chains'
import Loading from '@/components/Loading'




const chains = [gnosisChiado, gnosis]
const projectId = "eedf16a14abf9be796f6ee521c2c4191"

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


export default function Home() {
    
  return (
    
    <div className="min-h-screen">
      <WagmiConfig config={wagmiConfig}>
      
        <div className="gradient-bg-hero">
          <Nav />
          <Hero />
        </div>
        <ArtWorks />
        <MintNFT />
        <NFTDetails />
        <ReactionsModal />
        <UpdatePrice />
        <Alert />
        <Loading />
        
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

  </div>
  )
}
