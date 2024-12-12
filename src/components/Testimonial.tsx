import React from 'react';
import { useFetchData } from '../hooks/useFetchData';
import TestimonialCard from './commons/TestimonialCard';
import Skeleton from './commons/Skeleton';

const Testimonial: React.FC = () => {
  const { data, error, isLoading } = useFetchData(
    '/testimonials?page=1&limit=5'
  );
  console.log(data);

  return (
    <section className="container grid grid-cols-2">
      <div>
        <h2>What people are saying about us</h2>
        {isLoading && <Skeleton />}
        {error && <div>Error: {error.message}</div>}
        {data && <TestimonialCard />}
        {/* Navigation */}
        <div></div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Testimonial;
