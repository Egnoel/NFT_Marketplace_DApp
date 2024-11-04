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

const page = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const items = [
    {
      id: 1,
      title: 'Impostors Genesis',
      price: 26750.07,
      image: '/images/discover1.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 2,
      title: 'Azuki',
      price: 26750.07,
      image: '/images/discover2.png',
      chain: 'Crypto Fight',
      check: true,
    },
    {
      id: 3,
      title: 'Kaiju Kingz',
      price: 26750.07,
      image: '/images/discover3.png',
      chain: 'Polychain Monsters',
      check: false,
    },
    {
      id: 4,
      title: 'Kiwami',
      price: 26750.07,
      image: '/images/discover4.png',
      chain: 'Polychain Monsters',
      check: false,
    },
    {
      id: 5,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/discover5.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 6,
      title: 'Jenny Wilsom',
      price: 26750.07,
      image: '/images/discover6.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 7,
      title: 'Impostors Genesis',
      price: 26750.07,
      image: '/images/discover7.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 8,
      title: 'Annette Black',
      price: 26750.07,
      image: '/images/discover8.png',
      chain: 'Magic Beasties',
      check: true,
    },
    {
      id: 9,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/discover9.png',
      chain: 'Polychain Monsters',
      check: false,
    },
    {
      id: 10,
      title: 'Impostors Genesis',
      price: 26750.07,
      image: '/images/discover10.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 11,
      title: 'Marvin MacKinney',
      price: 26750.07,
      image: '/images/discover11.png',
      chain: 'Crypto Fight',
      check: false,
    },
    {
      id: 12,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/discover12.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 13,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/discover13.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 14,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/discover14.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 15,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/discover15.png',
      chain: 'Polychain Monsters',
      check: true,
    },
    {
      id: 16,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/discover16.png',
      chain: 'Tales Of Ragnarok',
      check: true,
    },
  ];

  const handleTab1 = () => {
    setTab1(true);
    setTab2(false);
  };
  const handleTab2 = () => {
    setTab1(false);
    setTab2(true);
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
            onClick={() => handleTab1}
          >
            Items
          </Button>
          <Button
            className={`text-white ${tab2 && 'underline underline-offset-8'}`}
            onClick={() => handleTab2}
          >
            Activities
          </Button>
        </div>
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
          <div className="flex flex-row gap-3 w-24 h-9  justify-center items-center bg-gray-22 rounded">
            <Filter className="text-white" />
            <span className="text-primary-5">Filter</span>
          </div>
        </div>
      </div>
      {tab1 ? (
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
      ) : (
        <span>Tab 2</span>
      )}
    </div>
  );
};

export default page;
