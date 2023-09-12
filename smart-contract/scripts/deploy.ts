import { ethers } from "hardhat";
import { Marketplace } from "../typechain-types";

async function main(){
    console.log("Deploying G-Arts NFT Marketplace");

    const account = await ethers.getSigners()

    let marketplaceContract: Marketplace;

    


    const marketplaceContractFactory = await ethers.getContractFactory("Marketplace");
    marketplaceContract = await marketplaceContractFactory.deploy("G-Arts", "GAT", 5, account[0].address);

    console.log(marketplaceContract.deploymentTransaction());

    console.log(`The Marketplace was deployed at address ${await marketplaceContract.getAddress()} by this wallet address ${account[0].address}`)

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})