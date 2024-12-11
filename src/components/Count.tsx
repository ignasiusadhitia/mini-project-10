import React from 'react';
import { useFetchData } from '../hooks/useFetchData';

const Count: React.FC = () => {
  const { data, error, isLoading } = useFetchData('/data');
  console.log(data);

  return <div>Count</div>;
};

export default Count;
