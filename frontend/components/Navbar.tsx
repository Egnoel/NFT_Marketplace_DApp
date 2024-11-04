'use client';

import { useEffect, useState } from 'react';
import { Web3 } from 'web3';
import Dropdown from './Dropdown';
import { Bell, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import WalletConnect from './WalletConnect';
const Navbar = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);

  const dropItems = [
    {
      name: 'marketplace',
      items: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Discover',
          link: '/discover',
        },
        {
          label: 'Activities',
          link: '/activities',
        },
        {
          label: 'Collection Verification',
          link: '/colletions',
        },
      ],
    },
    {
      name: 'Resources',
      items: [
        {
          label: 'Help Center',
          link: '/help-center',
        },
        {
          label: 'FAQ',
          link: '/faq',
        },
      ],
    },
  ];

  useEffect(() => {
    // ensure that there is an injected the Ethereum provider
    if (window.ethereum) {
      // use the injected Ethereum provider to initialize Web3.js
      setWeb3(new Web3(window.ethereum));
      // check if Ethereum provider comes from MetaMask
      if (window.ethereum.isMetaMask) {
        console.log('MetaMask is active');
      } else {
        console.log('MetaMask is not active');
      }
    }
  }, []);

  return (
    <div className="bg-gray-23 px-7 py-4 flex flex-row justify-between">
      <div className="flex flex-row gap-8 items-center">
        <h1 className="text-white">NFT Marketplace</h1>
        <div className="flex flex-row items-center gap-4">
          {dropItems.map((item, index) => (
            <Dropdown key={index} name={item.name} items={item.items} />
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <div className="bg-gray-22 rounded-lg w-64 py-1 px-2 flex flex-row items-center">
          <Search className="text-white" />
          <Input
            placeholder="Collection, item or user"
            className="text-gray-13 text-xs outline-none focus:outline-none border-none"
          />
        </div>
        <Bell className="text-white" size={24} />
        <Button className="bg-gray-22 px-4 py-2 hover:bg-inherit">
          BNB Chain
        </Button>
        <WalletConnect web3={web3} />
      </div>
    </div>
  );
};

export default Navbar;
