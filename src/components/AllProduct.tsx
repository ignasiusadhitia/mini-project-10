import React from 'react';
import { useFetchData } from '../hooks/useFetchData';

const AllProduct: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/products?page=1&limit=5');
  console.log(data);

  return <div>AllProduct</div>;
};

export default AllProduct;
