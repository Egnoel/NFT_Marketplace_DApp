import React from 'react';
import { Separator } from './ui/separator';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface Discover {
  id: number;
  title: string;
  chain: string;
  price: number;
  image: string;
  check: boolean;
}

interface DiscoverCardProps {
  collection: Discover;
}

const DiscoverCard = ({ collection }: DiscoverCardProps) => {
  return (
    <div className="flex flex-col rounded-lg">
      <Image
        src={collection.image}
        alt="auction"
        width={300}
        height={300}
        className="object-contain rounded-t-lg"
      />
      <div className="px-3 py-2 flex- flex-col gap-7 bg-gray-22 rounded-b-lg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <span className="text-gray-13">{collection.chain}</span>
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
          <span className="text-white">{collection.title}</span>
          {collection.check && (
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
          )}
        </div>
        <Separator orientation="horizontal" className="bg-gray-13 mt-3" />
        <div className="flex flex-col mt-3">
          <span className="text-sm text-gray-13">price</span>
          <span className="text-white">{collection.price}</span>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
