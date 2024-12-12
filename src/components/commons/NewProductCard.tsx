import React from 'react';

interface NewProductCardType {
  item: {
    title: string;
    image: string;
  };
}

const NewProductCard: React.FC<NewProductCardType> = ({ item }) => {
  return (
    <div className="w-[198px] h-[299px] md:w-[265px] md:h-[400px] flex items-end justify-center">
      <img
        src={item.image}
        alt={item.title}
        className="relative rounded-[5px] h-full w-full"
      />
      <h3 className="absolute capitalize z-10 text-center font-semibold text-[18px] md:text-[28px] mb-7.5 md:mb-5 text-white">
        {item.title}
      </h3>
    </div>
  );
};

export default NewProductCard;
