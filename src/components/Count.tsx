import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import Skeleton from './commons/Skeleton';

const Count: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/data');

  return (
    <div className="w-full absolute px-6 md:px-0">
      {isLoading && <Skeleton />}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <section className="container mt-[-90px] z-10 grid grid-cols-2 md:grid-cols-4 py-[48px] px-[40px] md:py-10 bg-green text-white text-center rounded-[20px] gap-[62px]">
          <div>
            <span className="block text-4xl font-semibold">
              {data?.experience}
            </span>
            <span className="block capitalize text-xl">year experience</span>
          </div>
          <div>
            <span className="block text-4xl font-semibold">
              {data?.country}
            </span>
            <span className="block capitalize text-xl">
              opened in the country
            </span>
          </div>
          <div>
            <span className="block text-4xl font-semibold">{data?.sold}</span>
            <span className="block capitalize text-xl">furniture sold</span>
          </div>
          <div>
            <span className="block text-4xl font-semibold">
              {data?.variant}
            </span>
            <span className="block capitalize text-xl">variant furniture</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default Count;
