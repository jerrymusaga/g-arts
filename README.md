## G-Arts
G-Arts is an NFT marketplace that is built on the Gnosis protocol due to its low cost and fast transactions. In G-Arts, artists can upload or, rather, mint their NFTs, which get stored on NFT.storage. Upon minting, the NFTs get listed based on the price the artist puts on them. Other artists or users can buy that artwork. But in case they can't afford to buy it, they can decide to reward the owner of that artwork with XDAI tokens, by appreciating that artwork through reactions upon reacting with emojis. Even if a user does not want to buy that NFT but feels like rewarding the artist of that artwork, it's possible through interacting with emojis based on how that user feels about that artwork.

Publish Your NFTs on G-Arts and feel a sense of value through your work.

## Video Demo
[G-art feature video demo](https://www.loom.com/share/51484480237944799f56505c1ea8d7de)

## Contract Address
[Contract Address Link](https://gnosis-chiado.blockscout.com/address/0x10fc9639e5052092Ae224b1a2867b0259D22DF45)

## Twitter Link
[Twitter link](https://x.com/JerryMusaga/status/1704884960618848409?s=20)

## Screenshots of Features

## Minting of NFT
An artist mints and lists an NFT, which gets stored on the NFT.Storage (IPFS) and minting cost 0.001 XDAI. The owner of that NFT can update the listed price of that NFT, while others can either buy that NFT or reward the owner with XDAI tokens by making reactions on that NFT.
[Transaction Hash for minting](https://gnosis-chiado.blockscout.com/tx/0xbe678b8b341361a8775383a40231d03eb1bb76c069b69906df943919568e1ba7)
![Screenshot from 2023-09-21 14-10-35](https://github.com/jerrymusaga/g-arts/assets/94830918/18aaeba2-50d1-4a7d-a34b-c8c2b30fb30a)
![Screenshot from 2023-09-21 14-12-01](https://github.com/jerrymusaga/g-arts/assets/94830918/bd7cfa0a-b91f-42ba-a216-84b379e6dccc)
![Screenshot from 2023-09-21 14-13-10](https://github.com/jerrymusaga/g-arts/assets/94830918/ae538f90-c74d-4f23-8ffa-aee8b241c3e4)
![Screenshot from 2023-09-21 14-14-23](https://github.com/jerrymusaga/g-arts/assets/94830918/d2a18bdf-c35c-4b4d-8c5f-078ee701a987)


## Buy of NFT
Trading of NFTs is possible on G-Arts. Other users have to meet the asking price or listed price of that NFT before the purchase can be successful.
After purchase, they become the owner of that NFT.
[Transaction Hash for NFT purchase](https://gnosis-chiado.blockscout.com/tx/0x195061c04c92c07d798af332b3625e6d96373d5fe56cd195ca2fa67c76ebc6c5)
![Screenshot from 2023-09-21 14-15-14](https://github.com/jerrymusaga/g-arts/assets/94830918/b92f93f0-0773-4e74-85be-5814c8ef3991)
![Screenshot from 2023-09-21 14-15-29](https://github.com/jerrymusaga/g-arts/assets/94830918/58a59ee2-43c6-49ed-95c2-9680bad7d386)

## Reaction with Emojis
In case I cannot buy an NFT but feel like rewarding the artist of that NFT, I can make reactions that trigger the transfer of XDAI tokens to the owner. This act can make the owner of the NFT feel valued. Even if the artwork is not bought, he can receive rewards through reactions on his NFT.
[Transaction Hash for Loving an NFT](https://gnosis-chiado.blockscout.com/tx/0x6d3ca4f959ef6be6c2f01e933ffb94cc2b6532128a3aaf8056429a47d59fb8c1)
![Screenshot from 2023-09-21 14-17-54](https://github.com/jerrymusaga/g-arts/assets/94830918/7b47235e-6a0c-4307-810a-694acb66d178)
![Screenshot from 2023-09-21 14-19-45](https://github.com/jerrymusaga/g-arts/assets/94830918/42a0e4fe-ddd0-4186-a9f0-d80017f613a7)
![Screenshot from 2023-09-21 14-20-05](https://github.com/jerrymusaga/g-arts/assets/94830918/53920949-011f-48be-9b22-5b07ae17d6b7)

## Originality
This is an original work by our team. I build on top of the following tooling:
- Next.js (Typescript) for frontend
- Wagmi (react hooks for smart-contract interaction with frontend )
- Hardhat for deployment of smart contract
- NFT.Storage for storing and retrieving of data(NFT)

## Future plans
- Improve the UI and UX of the marketplace by creating a personalized profile section
- Integrate notification so users can get notified about NFT trades and emoji reactions.
- Include more reaction emojis
- Deploy to Gnosis mainnet network
- Improve the storage of artworks

## Run project locally
For Next.js
- Need to have node installed
- `git clone git@github.com:jerrymusaga/g-arts.git`
- `cd g-arts`
- `yarn`
- `yarn run dev`
  
For smart contract
- `cd smart-contract`
- `yarn`
- to deploy smart contract `yarn hardhat run --network chiado ./scripts/deploy.ts`
- replace the contract address in the files the wagmi react hooks get called at the component section in the frontend
- create an env file where you will store your NFT.stroage API. You will get it at [NFT.storage](https://nft.storage/)
- you need a wallet address private key with tokens to be able to deploy the smartcontract 
