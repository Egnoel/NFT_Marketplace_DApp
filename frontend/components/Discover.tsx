import React from 'react';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter } from 'lucide-react';
import DiscoverCard from './DiscoverCard';
import { Button } from './ui/button';

const Discover = () => {
  const collections = [
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
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <span className="text-2xl text-white font-semibold">Discover</span>
        <div className="flex flex-row gap-5">
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-22 rounded text-white">
              <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Price: Low to High</SelectItem>
              <SelectItem value="oldest">Price: High to Low</SelectItem>
              <SelectItem value="oldest">Ending Soon</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-row gap-3 px-4 py-2 bg-gray-22 rounded">
            <Filter className="text-white" />
            <span className="text-primary-5">Filter</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-11 ml-12">
        {collections.map((collection, index) => (
          <DiscoverCard key={index} collection={collection} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-3">
        <Button className="border border-primary-5 text-primary-5 w-52 h-12 text-center">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Discover;
