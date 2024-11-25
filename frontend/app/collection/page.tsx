import { Button } from '@/components/ui/button';
import { Globe, Send, Slack, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DiscoverCard from '@/components/DiscoverCard';
import CollectionFilter from '@/components/CollectionFilter';

const page = () => {
  const items = [
    {
      id: 1,
      title: 'Impostors Genesis',
      price: 1.13,
      image: '/images/discover1.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 2,
      title: 'Azuki',
      price: 0.93,
      image: '/images/discover2.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 3,
      title: 'Kaiju Kingz',
      price: 0.85,
      image: '/images/discover3.png',
      chain: 'Doodle Apes',
      check: false,
    },
    {
      id: 4,
      title: 'Kiwami',
      price: 0.77,
      image: '/images/discover4.png',
      chain: 'Doodle Apes',
      check: false,
    },
    {
      id: 5,
      title: 'Gold Vip Access Pass',
      price: 0.72,
      image: '/images/discover5.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 6,
      title: 'Jenny Wilsom',
      price: 0.64,
      image: '/images/discover6.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 7,
      title: 'Impostors Genesis',
      price: 0.91,
      image: '/images/discover7.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 8,
      title: 'Annette Black',
      price: 1.0,
      image: '/images/discover8.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 9,
      title: 'Gold Vip Access Pass',
      price: 0.75,
      image: '/images/discover9.png',
      chain: 'Doodle Apes',
      check: false,
    },
    {
      id: 10,
      title: 'Impostors Genesis',
      price: 0.75,
      image: '/images/discover10.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 11,
      title: 'Marvin MacKinney',
      price: 1.0,
      image: '/images/discover11.png',
      chain: 'Doodle Apes',
      check: false,
    },
    {
      id: 12,
      title: 'Gold Vip Access Pass',
      price: 0.64,
      image: '/images/discover12.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 13,
      title: 'Gold Vip Access Pass',
      price: 0.07,
      image: '/images/discover13.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 14,
      title: 'Gold Vip Access Pass',
      price: 1.07,
      image: '/images/discover14.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 15,
      title: 'Gold Vip Access Pass',
      price: 1.26,
      image: '/images/discover15.png',
      chain: 'Doodle Apes',
      check: true,
    },
    {
      id: 16,
      title: 'Gold Vip Access Pass',
      price: 1.67,
      image: '/images/discover16.png',
      chain: 'Doodle Apes',
      check: true,
    },
  ];
  return (
    <div className="px-7 flex flex-col gap-7">
      <div className="relative w-full">
        <Image
          src={'/images/capa.png'}
          alt=""
          width={100}
          height={100}
          className="w-full h-96 object-fill rounded-md"
        />
        <div className="absolute left-[45%] -bottom-12 z-20">
          <Image
            src={'/images/avatar6.png'}
            alt=""
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mt-7">
        <h2 className="text-white text-lg">Doodle Apes</h2>
        <div className="flex flex-row gap-7 items-center text-gray-13">
          <Send className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Slack className="w-5 h-5" />
          <Globe className="w-5 h-5" />
        </div>
        <p className="text-gray-13 text-wrap w-[50%] text-sm">
          Doodle Apes are beautifully animated digital collectibles with varying
          scarcities. Each Doodle Apes is backed by a trully unique NFT and can
          be unpacked with $PMON tokens.
        </p>
        <div className="border border-gray-13 flex flex-row justify-between px-7 py-4 w-[50%] rounded-md">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-13">Traded</span>
            <span className="text-white">65.307</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-13">Players</span>
            <span className="text-white">11.923</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-13">Listed</span>
            <span className="text-white">25.328</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-13">Vol.(BUSD)</span>
            <span className="text-white">5.05K</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <span className={`text-white underline underline-offset-8`}>Items</span>

        <div className="flex flex-row gap-5 items-center">
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
          <CollectionFilter />
        </div>
      </div>
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
    </div>
  );
};

export default page;
