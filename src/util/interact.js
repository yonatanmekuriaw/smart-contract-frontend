require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey)

const contractABI = require("../contract-abi.json");
const contractAdress = "0x9b2bFD310C38005fcd26aC6F3971090024183D61"

export const fSmartContract = new web3.eth.Contract(
    contractABI,
    contractAdress
);

export const loadCurrentMessage = async () => { 
  
};

export const connectWallet = async () => {
  
};

export const getCurrentWalletConnected = async () => {
  
};

export const updateMessage = async (address, message) => {
  
};
