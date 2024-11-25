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
import { Filter, Search } from 'lucide-react';
import { Input } from './ui/input';
import Image from 'next/image';
import { Button } from './ui/button';

const FilterComponent2: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-row gap-3 w-24 h-9  justify-center items-center bg-gray-22 rounded">
          <Filter className="text-white" />
          <span className="text-primary-5">Filter</span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-gray-23 text-white">
        <DialogHeader>
          <DialogTitle>Filters</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-13">Category</span>
            <Select>
              <SelectTrigger className=" bg-gray-22 rounded text-white">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="bg-gray-22 text-white">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="popular">Listing</SelectItem>
                <SelectItem value="oldest">Offer</SelectItem>
                <SelectItem value="oldest">Sale</SelectItem>
                <SelectItem value="oldest">Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-13">Collections</span>
            <div className="bg-gray-22 rounded-lg border border-gray-13 py-1 px-2 flex flex-row items-center">
              <Search className="text-white" />
              <Input
                placeholder="Filter"
                className="text-gray-13 text-xs outline-none focus:outline-none border-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src="/images/avatar1.png"
                  alt="avatar"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-white">Tales Of Ragnarok</span>
              </div>
              <span className="text-sm text-gray-13">25,388</span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src="/images/avatar2.png"
                  alt="avatar"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-white">Magic Beasties</span>
              </div>
              <span className="text-sm text-gray-13">5,974</span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src="/images/avatar3.png"
                  alt="avatar"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-white">Crypto Fight</span>
              </div>
              <span className="text-sm text-gray-13">3,560</span>
            </div>
          </div>
          <div className="flex flex-row justify-between">
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

export default FilterComponent2;
