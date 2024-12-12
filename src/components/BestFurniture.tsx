import React from 'react';
import { bestFurnitureBanner } from '../assets/images';

const BestFurniture: React.FC = () => {
  return (
    <section className="container py-[50px] md:py-[96px] grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[100px] px-6 md:px-0">
      <div className="flex flex-col gap-[15px] md:gap-[35px]">
        <h2 className="text-2xl md:text-4.5xl font-semibold mt-[41px]">
          The Best Furniture Manufacturer of your choice
        </h2>
        <p className="text-sm md:text-xl">
          Furnitre power is a software as services for multiperpose business
          management system, expecially for them who are running two or more
          business exploree the future Furnitre power is a software as services
          \
        </p>
      </div>

      <div className="h-[244px] md:h-[399px]">
        <img
          src={bestFurnitureBanner}
          alt="we-create-banner"
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
    </section>
  );
};

export default BestFurniture;
