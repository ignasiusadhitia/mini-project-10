import React from 'react';
import { useFetchData } from '../hooks/useFetchData';

const NewInStore: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/category');
  console.log(data);

  return <div>NewInStore</div>;
};

export default NewInStore;
