import React from 'react';
import { Separator } from './ui/separator';
import { Check } from 'lucide-react';
import Image from 'next/image';

const AuctionCard = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col rounded-lg">
      <Image src={image} alt="auction" width={300} height={300} />
      <div className="px-3 py-2 flex- flex-col gap-7 bg-gray-22 rounded-b-lg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <span className="text-gray-13">Polychain Monsters</span>
            <span className="absolute bg-green-5 flex items-center justify-center rounded-full bottom-1 right-1">
              <Check className="text-white w-4 h-4" />
            </span>
          </div>
          <Image
            src="/images/bnb.png"
            alt="avatar"
            width={15}
            height={15}
            className="object-contain"
          />
        </div>
        <div className="flex flex-row justify-between mt-3">
          <span className="text-white">Red Car</span>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-gray-13 text-sm">6</span>
            <Image
              src="/images/group-items.png"
              alt="group"
              width={15}
              height={15}
              className="object-contain"
            />
          </div>
        </div>
        <Separator orientation="horizontal" className="bg-gray-13 mt-3" />
        <div className="flex flex-row justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-sm text-gray-13">Current Bid</span>
            <div className="flex flex-row gap-3">
              <span className="text-white">0.75BUSD</span>
              <Image
                src="/images/hammer.png"
                alt="Hammer"
                width={15}
                height={15}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-13">Ends In</span>
            <span className="text-white">01:29:35</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
