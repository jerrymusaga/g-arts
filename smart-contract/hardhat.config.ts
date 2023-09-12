import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv'
dotenv.config()

let account = process.env.GNOSIS_PRIVATE_KEY

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "gnosis",
  networks: {
    hardhat: {
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: [account!],
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: [account!],
    },
  },
  
}

export default config;
