import Link from 'next/link';
import React from 'react';
import CollectionCard from './CollectionCard';

const HotCollections = () => {
  const collections = [
    {
      id: 1,
      title: 'Impostors Genesis',
      price: 26750.07,
      image: '/images/avatar1.png',
      link: '/collection/1',
      check: true,
    },
    {
      id: 2,
      title: 'Azuki',
      price: 26750.07,
      image: '/images/avatar2.png',
      link: '/collection/2',
      check: true,
    },
    {
      id: 3,
      title: 'Kaiju Kingz',
      price: 26750.07,
      image: '/images/avatar3.png',
      link: '/collection/3',
      check: false,
    },
    {
      id: 4,
      title: 'Kiwami',
      price: 26750.07,
      image: '/images/avatar4.png',
      link: '/collection/4',
      check: false,
    },
    {
      id: 5,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/avatar5.png',
      link: '/collection/5',
      check: true,
    },
    {
      id: 6,
      title: 'Jenny Wilsom',
      price: 26750.07,
      image: '/images/avatar6.png',
      link: '/collection/6',
      check: true,
    },
    {
      id: 7,
      title: 'Impostors Genesis',
      price: 26750.07,
      image: '/images/avatar7.png',
      link: '/collection/7',
      check: true,
    },
    {
      id: 8,
      title: 'Annette Black',
      price: 26750.07,
      image: '/images/avatar8.png',
      link: '/collection/8',
      check: true,
    },
    {
      id: 9,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/avatar9.png',
      link: '/collection/9',
      check: false,
    },
    {
      id: 10,
      title: 'Impostors Genesis',
      price: 26750.07,
      image: '/images/avatar10.png',
      link: '/collection/10',
      check: true,
    },
    {
      id: 11,
      title: 'Marvin MacKinney',
      price: 26750.07,
      image: '/images/avatar11.png',
      link: '/collection/11',
      check: false,
    },
    {
      id: 12,
      title: 'Gold Vip Access Pass',
      price: 26750.07,
      image: '/images/avatar12.png',
      link: '/collection/12',
      check: true,
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <span className="text-2xl text-white font-semibold">
          Hot Collections
        </span>
        <Link href="/collections" className="text-primary-5">
          View All
        </Link>
      </div>
      {/* Aqui está a estrutura da grade */}
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {collections.map((collection, index) => (
          <CollectionCard key={index} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default HotCollections;
