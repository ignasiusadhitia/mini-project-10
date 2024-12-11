import React from 'react';
import { useFetchData } from '../hooks/useFetchData';

const Testimonial: React.FC = () => {
  const { data, error, isLoading } = useFetchData(
    '/testimonials?page=1&limit=5'
  );
  console.log(data);

  return <div>Testimonial</div>;
};

export default Testimonial;
