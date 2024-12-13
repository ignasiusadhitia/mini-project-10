import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import Skeleton from './commons/Skeleton';

const Hero: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/header');

  return (
    <header>
      {isLoading && <Skeleton />}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className="h-screen">
          <div className="absolute h-full w-full z-10">
            <div className="container h-full flex flex-col justify-center items-center text-center gap-7.5 text-white">
              <h1 className="text-2xl md:text-6.5xl md:leading-normal font-semibold max-w-[290px] md:max-w-[888px] capitalize">
                {data?.title}
              </h1>
              <p className="text-sm md:text-xl max-w-[293px] md:max-w-[627px]">
                {data?.description}
              </p>
              <button className="mt-0 md:mt-9 py-[9px] px-[35px] md:py-4 md:px-20 rounded-[10px] bg-platinum-transparent backdrop-blur-lg">
                Shop Now
              </button>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src={data?.banner}
              alt="hero-banner"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;
