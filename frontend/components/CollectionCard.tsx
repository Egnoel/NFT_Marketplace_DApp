import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface Collection {
  id: number;
  title: string;
  price: number;
  image: string;
  check: boolean;
}

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <div className="flex flex-row gap-3 items-center hover:bg-gray-23 hover:rounded-lg p-3 cursor-pointer">
      <span className="text-white">{collection.id}</span>
      <div className="relative">
        <Image src={collection.image} alt="avatar" width={50} height={50} />
        {collection.check && (
          <span className="absolute bg-green-5 flex items-center justify-center rounded-full bottom-1 right-1">
            <Check className="text-white w-4 h-4" />
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-white text-lg">{collection.title}</span>
        <span className="text-gray-13 text-xs">${collection.price}</span>
      </div>
    </div>
  );
};

export default CollectionCard;
