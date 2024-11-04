import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-row justify-between">
      <Image src="/images/banner1.png" alt="banner1" width={300} height={300} />
      <Image src="/images/banner2.png" alt="banner2" width={300} height={300} />
      <Image src="/images/banner3.png" alt="banner3" width={300} height={300} />
      <Image src="/images/banner4.png" alt="banner4" width={300} height={300} />
    </div>
  );
};

export default Banner;
