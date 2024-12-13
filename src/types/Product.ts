interface Product {
  product: {
    id: number;
    title: string;
    image: string;
    price_after_discount: number | undefined;
    price: number | string;
  };
}

export default Product;
