import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import NewProductCard from './commons/NewProductCard';
import Skeleton from './commons/Skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Arrow } from '../assets/icons';

const NewInStore: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/category');

  return (
    <section className="container py-[50px] md:py-[70px] grid grid-cols-1 md:grid-cols-[245px_100%] overflow-hidden gap-[70px] px-6 md:px-0">
      <div className="w-full md:w-[245px] flex flex-row md:flex-col gap-5 md:gap-0">
        <h2 className="text-2xl md:text-4.5xl md:leading-normal font-semibold mt-0 md:mt-[41px] w-full">
          New In Store Now
        </h2>
        <p className="text-base mt-0 md:mt-[89px] mb-[48px]">
          Get the latest items immediately with promo prices
        </p>
        <div className="hidden md:flex items-center gap-[10px] cursor-pointer">
          <span className="block text-base font-medium underline">
            Check All
          </span>
          <Arrow />
        </div>
      </div>
      <div>
        {isLoading && <Skeleton />}
        {error && <div>Error: {error.message}</div>}
        <Swiper
          slidesPerView={1.5}
          breakpoints={{
            768: {
              slidesPerView: 4.5,
            },
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {data &&
            data?.category.map((item: { title: string; image: string }) => (
              <SwiperSlide key={item.title}>
                <NewProductCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewInStore;
