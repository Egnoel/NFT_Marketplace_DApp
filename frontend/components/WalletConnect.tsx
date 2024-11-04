'use client';
import React, { useState, useTransition } from 'react';
import { Button } from './ui/button';
import Web3 from 'web3';
import Account from './Account';

interface WalletConnectProps {
  web3: Web3 | null;
}
const WalletConnect = ({ web3 }: WalletConnectProps) => {
  const [isUpdating, startTransition] = useTransition();
  const [account, setAccount] = useState<string | null>(null);
  const requestAccounts = () => {
    if (web3 === null) {
      return;
    }
    // request accounts from MetaMask
    startTransition(async () => {
      console.log('requesting accounts');
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('requestAccounts')?.remove();
        // get list of accounts
        const allAccounts = await web3.eth.requestAccounts();
        // get the first account and populate placeholder
        setAccount(allAccounts[0]);
        console.log('account:', allAccounts[0]);
      } catch (error) {
        console.error(error);
      }
    });
  };
  return (
    <div>
      {account ? (
        <Account account={account} />
      ) : (
        <Button
          className="bg-primary-5 px-4 py-2 hover:bg-inherit"
          onClick={requestAccounts}
          disabled={isUpdating}
        >
          {isUpdating ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      )}
    </div>
  );
};

export default WalletConnect;
