import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface ItemsActivities {
  title: string;
  type: string;
  image: string;
  check: boolean;
}

interface ItemsActivitiesCardProps {
  collection: ItemsActivities;
}

const ItemsActivitiesCard = ({ collection }: ItemsActivitiesCardProps) => {
  return (
    <div className="flex flex-row gap-1 items-center hover:bg-gray-23 hover:rounded-lg p-3 cursor-pointer flex-1">
      <div className="">
        <Image
          src={collection.image}
          alt="avatar"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-1 items-center">
          <span className="text-white text-sm">{collection.title}</span>
          {collection.check && (
            <span className=" bg-green-5 flex items-center justify-center rounded-full">
              <Check className="text-white w-3 h-3" />
            </span>
          )}
        </div>
        <span className="text-gray-13 text-xs">{collection.type}</span>
      </div>
    </div>
  );
};

export default ItemsActivitiesCard;
