import React from 'react';
import { useFetchData } from '../hooks/useFetchData';

const Hero: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/header');

  console.log(data);
  return <div>Hero</div>;
};

export default Hero;
