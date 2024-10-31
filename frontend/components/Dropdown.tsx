'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowBigDown } from 'lucide-react';
import Link from 'next/link';

interface MenuLink {
  label: string;
  link: string;
}

interface DropDown {
  name: string;
  items: Array<MenuLink>;
}

const Dropdown = ({ name, items }: DropDown) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Button
      className="flex flex-row gap-2 text-white hover:bg-inherit hover:text-primary-5"
      onClick={() => setIsOpen(!isOpen)}
      variant="ghost"
    >
      <span>{name}</span>
      <ArrowBigDown />
      {isOpen && (
        <ul className="absolute  max-h-56 overflow-y-auto top-12 flex flex-col gap-3 bg-gray-22 rounded p-6">
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="text-sm text-white hover:text-primary-5"
            >
              {item.label}
            </Link>
          ))}
        </ul>
      )}
    </Button>
  );
};

export default Dropdown;
