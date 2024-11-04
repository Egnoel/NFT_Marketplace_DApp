import { Web3 } from 'web3';

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || 'http://127.0.0.1:8545';
const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
const web3 = new Web3(rpcUrl);

// const contract = new web3.eth.Contract(TodoListABI.abi, address);

// Contracts functions 









export async function getAccount(): Promise<string> {
    // use the injected Ethereum provider to initialize Web3.js
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    document.getElementById('requestAccounts')?.remove();

    // get list of accounts
    const allAccounts = await web3.eth.getAccounts();
    return allAccounts[0];
    // check if Ethereum provider comes from MetaMask

}