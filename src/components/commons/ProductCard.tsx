import React from 'react';

interface Product {
  product: {
    id: number;
    title: string;
    image: string;
    price_after_discount: number | undefined;
    price: number | string;
  };
}

const ProductCard: React.FC<Product> = ({ product }) => {
  return (
    <div className="w-full mb-[30px]">
      <img
        src={product.image}
        alt={product.title}
        className="h-[170px] md:h-[292px] w-full object-cover border rounded-[20px] border-light-silver"
      />
      <h3 className="text-black text-base md:text-2xl md:leading-normal font-semibold mt-[15px] line-clamp-1">
        {product.title}
      </h3>
      <p className="mt-2 text-xs md:text-base md:leading-normal ">
        {product.price_after_discount && (
          <span>${product.price_after_discount}</span>
        )}{' '}
        <span
          className={
            product.price_after_discount
              ? 'line-through opacity-50 text-[10px] md:text-sm'
              : undefined
          }
        >
          ${product.price}
        </span>
      </p>
    </div>
  );
};
export default ProductCard;
