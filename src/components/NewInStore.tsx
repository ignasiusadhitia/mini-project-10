import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import NewProductCard from './commons/NewProductCard';
import Skeleton from './commons/Skeleton';

const NewInStore: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/category');
  console.log(data);

  return (
    <section className="container py-[70px] grid grid-cols-2">
      <div>
        <h2>New In Store Now</h2>
        <p>Get the latest items immediately with promo prices</p>
        <div>
          <span>Check All</span>
          <span></span>
        </div>
      </div>
      <div>
        {isLoading && <Skeleton />}
        {error && <div>Error: {error.message}</div>}
        {data && <NewProductCard />}
      </div>
    </section>
  );
};

export default NewInStore;
