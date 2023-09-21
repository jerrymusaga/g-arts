import { NFTStorage, File } from 'nft.storage'

import mime from 'mime'

import fs from 'fs'

import path from 'path'

import dotenv from 'dotenv'
dotenv.config()

const NFT_STORAGE_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY

async function storeNFT(imagePath, name, description) {
    const image = await fileFromPath(imagePath)

    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    return nftstorage.store({
        image,
        name,
        description,
    })
}

async function fileFromPath(filePath) {
    const content = await fs?.promises?.readFile(filePath)
    const type = mime.getType(filePath)
    console.log(filePath.name)
    return new File([content], path.basename(filePath.name), { type })
}

async function upload(imagePath, name, description) {
    const result = await storeNFT(imagePath, name, description)
    console.log(result)
    return result
}

export { upload }