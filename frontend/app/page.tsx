import Banner from '@/components/Banner';
import Discover from '@/components/Discover';
import HotAuction from '@/components/HotAuction';
import HotCollections from '@/components/HotCollections';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="px-7 flex flex-col gap-11">
      <Banner />
      <HotCollections />
      <HotAuction />
      <Discover />
    </div>
  );
}
