import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ItemsActivitiesCard from './ItemsActivitiesCard';

interface DiscoverActivitiesCard {
  id: number;
  type: string;
  state: string;
  title: string;
  price: number;
  image: string;
  link: string;
  from: string;
  to: string;
  date: string;
  check: boolean;
  itemType: string;
  convertedPrice: number;
}

interface DiscoverActivitiesCardProps {
  activity: DiscoverActivitiesCard;
}

const DiscoverActivities = ({ activity }: DiscoverActivitiesCardProps) => {
  return (
    <div className="flex flex-row justify-between items-center text-white">
      <div className="flex flex-col flex-1">
        <span className="text-gray-13 text-sm">{activity.type}</span>
        <span className="text-white text-xs">{activity.state}</span>
      </div>
      <ItemsActivitiesCard
        collection={{
          title: activity.title,
          image: activity.image,
          check: activity.check,
          type: activity.itemType,
        }}
      />
      <div className="flex flex-col flex-1 text-center">
        <span className="text-gray-13 text-sm ">{activity.price} BUSD</span>
        <span className="text-white text-xs">${activity.convertedPrice}</span>
      </div>
      <span className="flex-1 text-center">{activity.from}</span>
      <span className="flex-1 text-center">
        {(activity.to && <span>{activity.to}</span>) || <span>-</span>}
      </span>
      <span className="flex-1 text-center">{activity.date}</span>
      <Link href={activity.link} className="flex-1 flex justify-center">
        <ArrowUpRight />
      </Link>
    </div>
  );
};

export default DiscoverActivities;
