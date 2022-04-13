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
  const message = await fSmartContract.methods.message().call();
  return message;
};

export const connectWallet = async () => {
  if(window.ethereum){
      try{
          const addressArray = await window.ethereum.request(
              {
                  method: "eth_requestAccounts",
              });
              const obj = {
                  status : "Write your message in the text field above.",
                  address: addressArray[0],
              };
              return obj;
      }catch(err){
          return {
              address : "",
              status: "😥 " + err.message,
          };
      }
  } else {
      return {
          address : "",
          status : "🦊" + "You must install Metamask, a virrtual Ethereum wallet, in your browser"
      }
  }
};

export const getCurrentWalletConnected = async () => {
  if(window.ethereum){
      try{
          const addressArray = await window.ethereum.request({
              method: "eth_accounts",
          });
          if(addressArray.length > 0){
              return{
                  address: addressArray[0],
                  status: "Write a message in the text field above",
              };
          } else {
              return {
                  address : "",
                  status: "Connect to Metamask using the top right button.",
              };
          }
      } catch(err){
          return {
              address: "",
              status: "😥 " + err.message,
          };
      }
  } else {
    return {
        address : "",
        status : "🦊" + "You must install Metamask, a virrtual Ethereum wallet, in your browser"
    }
}
};

export const updateMessage = async (address, message) => {
  
};
