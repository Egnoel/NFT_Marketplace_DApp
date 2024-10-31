import React from 'react';
import Dropdown from './Dropdown';
import { Bell, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
const Navbar = () => {
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
        <Button className="bg-primary-5 px-4 py-2 hover:bg-inherit">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
