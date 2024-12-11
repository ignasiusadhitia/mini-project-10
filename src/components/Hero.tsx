import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import Skeleton from 'react-loading-skeleton';

const Hero: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/header');
  console.log(data);
  return (
    <header>
      {isLoading && <Skeleton />}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className="h-screen">
          <div className="absolute h-full w-full z-10">
            <div className="container h-full flex flex-col justify-center items-center text-center gap-7.5 text-white">
              <h1 className="text-6.5xl font-semibold max-w-[888px]">
                {data?.title}
              </h1>
              <p className="text-xl max-w-[627px]">{data?.description}</p>
              <button className="mt-9 py-4 px-20 rounded-[10px] bg-platinum-transparent backdrop-blur-lg">
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
