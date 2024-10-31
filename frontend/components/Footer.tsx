import { ArrowBigRight } from 'lucide-react';
import React from 'react';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 items-center justify-center py-44 bg-gray-23">
        <h2 className="text-white font-bold">Get the latest updates</h2>
        <div className="bg-gray-22 rounded-lg w-64 py-1 px-2 flex flex-row items-center">
          <Input
            type="email"
            placeholder="Your Email"
            className="text-gray-13 text-xs outline-none focus:outline-none border-none"
          />
          <ArrowBigRight className="text-white" />
        </div>
      </div>
      <div className="flex flex-col gap-4 px-7">
        <div className="flex flex-row justify-between  pt-8 pb-3">
          <div className="flex flex-col gap-4 text-white">
            <h1 className="font-bold">NFT Marketplace</h1>
          </div>
          <div className="flex flex-col gap-4 text-gray-13">
            <span className="text-white">Marketplace</span>
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/activities">Activities</Link>
          </div>
          <div className="flex flex-col gap-4 text-gray-13">
            <span className="text-white">Resources</span>
            <Link href="/">Help Center</Link>
            <Link href="/explore">FAQ</Link>
          </div>
          <div className="flex flex-col gap-4 text-gray-13">
            <span className="text-white">Links</span>
            <Link href="/">Privacy Policy</Link>
            <Link href="/explore">Terms of Service</Link>
          </div>
        </div>
        <Separator orientation="horizontal" className="bg-gray-13" />
        <span className="text-gray-13">All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
