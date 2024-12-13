import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import ProductCard from './commons/ProductCard';
import Skeleton from './commons/Skeleton';
import { ArrowLeft, ArrowRight } from '../assets/icons';

const AllProduct: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, error, isLoading } = useFetchData(
    `/products?page=${page}&limit=8`
  );

  const pages = Array.from({ length: data?.totalPages || 0 });

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, data?.totalPages || prevPage));
  };

  return (
    <section className="container py-[70px] px-6 md:px-0">
      <div className="max-w-[539px] mx-auto flex flex-col gap-4">
        <h2 className="text-2xl md:text-4.5xl font-semibold text-center">
          All Product
        </h2>
        <p className="text-center">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 mt-[69px] mb-[50px] gap-[30px]">
        {isLoading &&
          Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)}
        {error && (
          <div className="col-span-4 text-center text-red-500">
            Error: {error.message}
          </div>
        )}
        {data &&
          data.products.map(
            (product: {
              id: number;
              title: string;
              image: string;
              price_after_discount?: number;
              price: string | number;
            }) => <ProductCard key={product.id} product={product} />
          )}
      </div>
      {/* Navigation */}
      <div className="flex justify-center items-center gap-[30px]">
        <div
          onClick={handlePrevPage}
          className={`w-[50px] h-[50px] rounded-full flex justify-center items-center hover:shadow-md cursor-pointer ${
            page === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <ArrowLeft />
        </div>
        <div className="flex gap-[10px]">
          {pages.map((_, index) => (
            <div
              key={index}
              onClick={() => setPage(index + 1)}
              className={`w-[10px] h-[10px] rounded-full cursor-pointer ${
                page === index + 1 ? 'bg-black' : 'border border-black'
              }`}
            ></div>
          ))}
        </div>
        <div
          onClick={handleNextPage}
          className={`w-[50px] h-[50px] rounded-full flex justify-center items-center hover:shadow-md cursor-pointer ${
            page === data?.totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <ArrowRight />
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
