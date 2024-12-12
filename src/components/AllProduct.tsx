import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import ProductCard from './commons/ProductCard';
import Skeleton from './commons/Skeleton';

const AllProduct: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/products?page=1&limit=5');
  console.log(data);

  return (
    <section className="container py-[70px]">
      <h2>All Product</h2>
      <p>
        The products we provide only for you as our service are selected from
        the best products with number 1 quality in the world
      </p>

      <div className="grid grid-cols-4">
        {isLoading && <Skeleton />}
        {error && <div>Error: {error.message}</div>}
        {data && <ProductCard />}
      </div>
      {/* Navigation */}
      <div></div>
    </section>
  );
};

export default AllProduct;
