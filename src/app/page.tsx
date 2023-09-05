
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ArtWorks from '@/components/Artworks'
import MintNFT from '@/components/MintNFT'
import NFTDetails from '@/components/NFTDetails'
import ReactionsModal from '@/components/ReactionsModal'

export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-hero">
      <Nav />
      <Hero />
    </div>
    <ArtWorks />
    <MintNFT />
    <NFTDetails />
    <ReactionsModal />
 </div>
  )
}
