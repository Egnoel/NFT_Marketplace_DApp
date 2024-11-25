'use client';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DiscoverCard from '@/components/DiscoverCard';
import { Button } from '@/components/ui/button';
import FilterComponent from '@/components/Filter';
import FilterComponent2 from '@/components/FilterTab2';
import { Separator } from '@/components/ui/separator';
import DiscoverActivities from '@/components/DiscoverActivities';

const page = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const items = [
    {
      id: 1,
      title: 'Impostors Genesis',
      price: 1.13,
      image: '/images/discover1.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 2,
      title: 'Azuki',
      price: 0.93,
      image: '/images/discover2.png',
      chain: 'Crypto Fight',
      check: true,
    },
    {
      id: 3,
      title: 'Kaiju Kingz',
      price: 0.85,
      image: '/images/discover3.png',
      chain: 'Polychain Monsters',
      check: false,
    },
    {
      id: 4,
      title: 'Kiwami',
      price: 0.77,
      image: '/images/discover4.png',
      chain: 'Polychain Monsters',
      check: false,
    },
    {
      id: 5,
      title: 'Gold Vip Access Pass',
      price: 0.72,
      image: '/images/discover5.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 6,
      title: 'Jenny Wilsom',
      price: 0.64,
      image: '/images/discover6.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 7,
      title: 'Impostors Genesis',
      price: 0.91,
      image: '/images/discover7.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 8,
      title: 'Annette Black',
      price: 1.0,
      image: '/images/discover8.png',
      chain: 'Magic Beasties',
      check: true,
    },
    {
      id: 9,
      title: 'Gold Vip Access Pass',
      price: 0.75,
      image: '/images/discover9.png',
      chain: 'Polychain Monsters',
      check: false,
    },
    {
      id: 10,
      title: 'Impostors Genesis',
      price: 0.75,
      image: '/images/discover10.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 11,
      title: 'Marvin MacKinney',
      price: 1.0,
      image: '/images/discover11.png',
      chain: 'Crypto Fight',
      check: false,
    },
    {
      id: 12,
      title: 'Gold Vip Access Pass',
      price: 0.64,
      image: '/images/discover12.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 13,
      title: 'Gold Vip Access Pass',
      price: 0.07,
      image: '/images/discover13.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 14,
      title: 'Gold Vip Access Pass',
      price: 1.07,
      image: '/images/discover14.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 15,
      title: 'Gold Vip Access Pass',
      price: 1.26,
      image: '/images/discover15.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 16,
      title: 'Gold Vip Access Pass',
      price: 1.67,
      image: '/images/discover16.png',
      chain: 'Tales Of Ragnarok',
      check: true,
    },
  ];

  const activitiesItems = [
    {
      id: 1,
      type: 'Bid & Offer',
      state: 'Bidded',
      title: 'Tales of Ragnarok',
      itemType: 'KaijuKingz',
      price: 1.13,
      convertedPrice: 366.86,
      image: '/images/avatar1.png',
      link: '/collection/1',
      from: 'Cimmy',
      to: '0xhg34...nGj2',
      date: '5 minutes ago',
      check: true,
    },
    {
      id: 2,
      type: 'Bid & Offer',
      state: 'Bidded',
      title: 'Doodle Aps',
      itemType: 'Impostor Genesis',
      price: 0.93,
      convertedPrice: 349.18,
      image: '/images/avatar2.png',
      link: '/collection/2',
      from: 'TheElerking',
      to: '0xhg34...nGj2',
      date: '1 hours ago',
      check: true,
    },
    {
      id: 3,
      type: 'Bid & Offer',
      state: 'Bidded',
      title: 'Magic Beasties',
      itemType: 'Purple Flower',
      price: 0.85,
      convertedPrice: 331.54,
      image: '/images/avatar3.png',
      link: '/collection/3',
      from: '0xgj32...el21',
      to: '0xhg34...nGj2',
      date: '4 hours ago',
      check: false,
    },
    {
      id: 4,
      type: 'Bid & Offer',
      state: 'Bidded',
      title: 'Doodle car',
      itemType: 'Red Car',
      price: 0.77,
      convertedPrice: 318.24,
      image: '/images/avatar4.png',
      link: '/collection/4',
      from: 'TheElerking',
      to: '0xhg34...nGj2',
      date: '5 hours ago',
      check: false,
    },
    {
      id: 5,
      type: 'Bid & Offer',
      state: 'Bidded',
      title: 'Tales of Ragnarok',
      itemType: 'KaijuKingz',
      price: 0.72,
      convertedPrice: 309.45,
      image: '/images/avatar5.png',
      link: '/collection/5',
      from: '0xhg34...nGj2',
      to: '0xhg34...nGj2',
      date: '7 hours ago',
      check: true,
    },
    {
      id: 6,
      type: 'Bid & Offer',
      state: 'Bidded',
      title: 'Tales of Ragnarok',
      itemType: 'Maxido',
      price: 0.64,
      convertedPrice: 349.18,
      image: '/images/avatar6.png',
      link: '/collection/6',
      from: '0xhg34...nGj2',
      to: '',
      date: 'A day ago',
      check: true,
    },
    {
      id: 7,
      type: 'Listing',
      state: 'As auction',
      title: 'Magic Beasties',
      itemType: 'Fix Witch',
      price: 0.91,
      convertedPrice: 397.85,
      image: '/images/avatar7.png',
      link: '/collection/7',
      from: 'TheElerking',
      to: '',
      date: '3 days ago',
      check: true,
    },
    {
      id: 8,
      type: 'Listing',
      state: 'Cancel',
      title: 'Doodle Apes',
      itemType: 'Impostor Genesis',
      price: 1.0,
      convertedPrice: 442.0,
      image: '/images/avatar8.png',
      link: '/collection/8',
      from: 'TheElerking',
      to: '0xhg34...nGj2',
      date: '3 days ago',
      check: true,
    },
    {
      id: 9,
      type: 'Bid & Offer',
      state: 'Buy Offer',
      title: 'Tales of Ragnarok',
      itemType: 'KaijuKingz',
      price: 0.75,
      convertedPrice: 331.55,
      image: '/images/avatar9.png',
      link: '/collection/9',
      from: '0xhg34...nGj2',
      to: '',
      date: '3 days ago',
      check: false,
    },
    {
      id: 10,
      type: 'Listing',
      state: 'As auction',
      title: 'Magic Beasties',
      itemType: 'Purple Flower',
      price: 0.75,
      convertedPrice: 331.55,
      image: '/images/avatar10.png',
      link: '/collection/10',
      from: '0xhg34...nGj2',
      to: '',
      date: '3 days ago',
      check: true,
    },
    {
      id: 11,
      type: 'Bid & Offer',
      state: 'Bidded',
      title: 'Doodle Apes',
      itemType: 'Impostor Genesis',
      price: 1.0,
      convertedPrice: 442.0,
      image: '/images/avatar11.png',
      link: '/collection/11',
      from: 'Cimmy',
      to: '0xhg34...nGj2',
      date: '4 days ago',
      check: false,
    },
    {
      id: 12,
      type: 'Bid & Offer',
      state: 'Bidded',
      title: 'Tales of Ragnarok',
      itemType: 'Maxido',
      price: 0.64,
      convertedPrice: 349.18,
      image: '/images/avatar12.png',
      link: '/collection/12',
      from: 'Cimmy',
      to: '0xhg34...nGj2',
      date: '4 days ago',
      check: true,
    },
  ];

  const handleTab1 = () => {
    setTab1(true);
    setTab2(false);
    console.log('tab1');
  };
  const handleTab2 = () => {
    setTab1(false);
    setTab2(true);
    console.log('tab2');
  };
  return (
    <div className="px-7 flex flex-col gap-7">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl text-white">Discover</h1>
        <span className="text-gray-13 text-sm">151,146 items listed</span>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <Button
            className={`text-white ${tab1 && 'underline underline-offset-8'}`}
            onClick={() => handleTab1()}
          >
            Items
          </Button>
          <Button
            className={`text-white ${tab2 && 'underline underline-offset-8'}`}
            onClick={() => handleTab2()}
          >
            Activities
          </Button>
        </div>
        {tab1 && (
          <div className="flex flex-row gap-5">
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-22 rounded text-white">
                <SelectValue placeholder="Newest" />
              </SelectTrigger>
              <SelectContent className="bg-gray-22 text-white">
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Price: Low to High</SelectItem>
                <SelectItem value="oldest">Price: High to Low</SelectItem>
                <SelectItem value="oldest">Ending Soon</SelectItem>
              </SelectContent>
            </Select>
            <FilterComponent />
          </div>
        )}
        {tab2 && <FilterComponent2 />}
      </div>
      {tab1 && (
        <>
          <div className="flex flex-row flex-wrap gap-11 ml-12">
            {items.map((collection, index) => (
              <DiscoverCard key={index} collection={collection} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-3">
            <Button className="border border-primary-5 text-primary-5 w-52 h-12 text-center">
              Load More
            </Button>
          </div>
        </>
      )}
      {tab2 && (
        <div className="flex flex-col bg-gray-22 w-full rounded-md px-4 py-5 gap-4 ">
          <div className="flex flex-row justify-between text-gray-13">
            <span className="flex-1 ">Type</span>
            <span className="flex-1 text-center">Items</span>
            <span className="flex-1 text-center">Price</span>
            <span className="flex-1 text-center">From</span>
            <span className="flex-1 text-center">To</span>
            <span className="flex-1 text-center">Date</span>
            <span className="flex-1"></span>
          </div>
          <Separator orientation="horizontal" />
          {activitiesItems.map((activities, index) => (
            <DiscoverActivities key={index} activity={activities} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
