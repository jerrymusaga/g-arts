import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ArtWorks from '@/components/Artworks'
import MintNFT from '@/components/MintNFT'

export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-hero">
      <Nav />
      <Hero />
    </div>
    <ArtWorks />
    <MintNFT />
    

 </div>
  )
}
