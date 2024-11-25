import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Search } from 'lucide-react';
import { Input } from './ui/input';
import Image from 'next/image';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const CollectionFilter = () => {
  const checkItems = [
    {
      id: '1',
      label: 'Rocket',
    },
    {
      id: '2',
      label: 'Antique',
    },
    {
      id: '3',
      label: 'Sport',
    },
    {
      id: '4',
      label: 'Pickups',
    },
    {
      id: '5',
      label: 'Recycling',
    },
  ];
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-row gap-3 w-24 h-9  justify-center items-center bg-gray-22 rounded">
          <Filter className="text-white" />
          <span className="text-primary-5">Filter</span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-gray-23 text-white max-w-[750px] ">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-5 bg-gray-22 rounded p-4 w-1/3">
              <span className="text-white">Basic</span>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-13">Type</span>
                <Select>
                  <SelectTrigger className=" bg-gray-22 rounded text-white ">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-22 text-white">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="popular">Fixed Price</SelectItem>
                    <SelectItem value="oldest">Auction</SelectItem>
                    <SelectItem value="oldest">With Buy Offer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-13">Bundle & items</span>
                <Select>
                  <SelectTrigger className=" bg-gray-22 rounded text-white">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-22 text-white">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="popular">Single item</SelectItem>
                    <SelectItem value="oldest">Bundle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-13">Price</span>
                <div className="flex flex-row gap-2 items-center justify-between">
                  <input
                    type="text"
                    placeholder="Min"
                    className="h-9 bg-gray-22 rounded text-white border border-gray-13 px-2 w-20"
                  />
                  <span className="text-sm text-gray-13">To</span>
                  <input
                    type="text"
                    placeholder="Max"
                    className=" h-9 bg-gray-22 rounded text-white border border-gray-13 px-2 w-20"
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-5 bg-gray-22 rounded p-4 w-2/3">
              <span className="text-white">Attributes</span>
              <div className="flex flex-row gap-6">
                <div className="flex flex-col gap-4 items-end">
                  <div className="flex flex-row gap-2">
                    <span className="text-white">Type</span>
                    <Separator orientation="vertical" className="bg-blue-500" />
                  </div>
                  <div className="flex flex-row gap-2">
                    <span className="text-white">Production</span>
                    <Separator orientation="vertical" className="bg-gray-13" />
                  </div>
                  <div className="flex flex-row gap-2">
                    <span className="text-white">Color</span>
                    <Separator orientation="vertical" className="bg-gray-13" />
                  </div>
                  <div className="flex flex-row gap-2">
                    <span className="text-white">Special</span>
                    <Separator orientation="vertical" className="bg-gray-13" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-gray-22 rounded-lg border border-gray-13 py-1 px-2 flex flex-row items-center">
                    <Search className="text-white" />
                    <Input
                      placeholder="Filter"
                      className="text-gray-13 text-xs outline-none focus:outline-none border-none"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    {checkItems.map((item, index) => (
                      <div
                        className="flex flex-row gap-2 items-center"
                        key={index}
                      >
                        <Checkbox id={item.id} className="bg-white" />
                        <label htmlFor={item.id}>{item.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-3">
            <Button className="border border-primary-5 text-primary-5 px-6 py-4 text-center">
              Reset
            </Button>
            <Button className="bg-primary-5 px-6 py-4 hover:bg-primary-5 text-white">
              Apply
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollectionFilter;
