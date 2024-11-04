import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Separator } from './ui/separator';
import { Check } from 'lucide-react';
import AuctionCard from './AuctionCard';

const HotAuction = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <span className="text-2xl text-white font-semibold">Hot Auction</span>
        <Link href="/collections" className="text-primary-5">
          View All
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <AuctionCard image="/images/auction1.png" />
        <AuctionCard image="/images/auction2.png" />
        <AuctionCard image="/images/auction3.png" />
        <AuctionCard image="/images/auction4.png" />
      </div>
    </div>
  );
};

export default HotAuction;
