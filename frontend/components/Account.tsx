'use client';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';
import Link from 'next/link';
import { AlignJustify, BadgePercent, Settings, Warehouse } from 'lucide-react';

const Account = ({ account }: { account: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-row gap-4">
      <Button className="bg-primary-5 px-4 py-2 hover:bg-inherit text-white">
        Create NFT
      </Button>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Button>
      {isOpen && (
        <div className="absolute  overflow-y-hidden top-12 right-12 flex flex-col gap-8 bg-gray-22 rounded p-6">
          <div className="flex flex-row gap-5 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-4">
              <div className="bg-primary-5 text-white px-2 rounded py-2 flex">
                <span className=" line-clamp-1 w-32">{account}</span>
                <span>...</span>
              </div>
              <Link href="/account" className="text-primary-5 font-semibold">
                View Profile
              </Link>
            </div>
          </div>
          <div className="bg-gray-21 flex flex-col gap-6 p-3 rounded-md">
            <div className="flex flex-row justify-between text-white">
              <span>BUSD</span>
              <span>10,2BUSD</span>
            </div>
            <Button
              className="text-primary-5 text-center font-semibold"
              variant="ghost"
            >
              Add funds with card
            </Button>
          </div>
          <Button
            variant="ghost"
            className="flex flex-row gap-4 justify-start text-white"
          >
            <Warehouse />
            <span>My NFTs</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-row gap-4 justify-start text-white"
          >
            <AlignJustify />
            <span>My Collections</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-row gap-4 justify-start text-white"
          >
            <BadgePercent />
            <span>My Coupon</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-row gap-4 justify-start text-white"
          >
            <Settings />
            <span>Settings</span>
          </Button>
          <Button
            className="text-primary-5 text-center font-semibold"
            variant="ghost"
          >
            LogOut
          </Button>
        </div>
      )}
    </div>
  );
};

export default Account;
