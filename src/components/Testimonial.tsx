import React, { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import TestimonialCard from './commons/TestimonialCard';
import Skeleton from './commons/Skeleton';
import { testimonialBanner } from '../assets/images';
import { ArrowLeft, ArrowRight } from '../assets/icons';

const Testimonial: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const { data, error, isLoading } = useFetchData(
    '/testimonials?page=1&limit=5'
  );
  console.log('testimonial', data);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      Math.max(prevTestimonial - 1, 0)
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      Math.min(
        prevTestimonial + 1,
        data?.testimonials.length - 1 || prevTestimonial
      )
    );
  };

  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-[42px] px-6 md:px-0 py-[70px]">
      <div className="w-full ">
        <h2 className="text-2xl md:text-4.5xl md:leading-normal font-semibold">
          What people are saying about us
        </h2>
        {isLoading && <Skeleton />}
        {error && <div>Error: {error.message}</div>}
        <div className="w-full flex overflow-hidden">
          {data && (
            <TestimonialCard
              testimonial={data?.testimonials[currentTestimonial]}
            />
          )}
        </div>
        {/* Navigation */}
        <div className="hidden md:flex justify-start items-center gap-[30px] mt-[31px]">
          <div
            onClick={handlePrevTestimonial}
            className={`w-[50px] h-[50px] rounded-full flex justify-center items-center hover:shadow-md hover:bg-green hover:text-white cursor-pointer ${
              currentTestimonial === 0
                ? 'opacity-50 cursor-not-allowed hover:text-black hover:bg-white hover:shadow-none'
                : ''
            }`}
          >
            <ArrowLeft />
          </div>

          <div
            onClick={handleNextTestimonial}
            className={`w-[50px] h-[50px] rounded-full flex justify-center items-center hover:shadow-md hover:bg-green hover:text-white cursor-pointer ${
              currentTestimonial === data?.testimonials.length - 1
                ? 'opacity-50 cursor-not-allowed hover:text-black hover:bg-white hover:shadow-none'
                : ''
            }`}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
      <div>
        <img
          src={testimonialBanner}
          alt="testimonial-banner"
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
      <div className="flex md:hidden justify-center items-center gap-[30px] mt-[25px]">
        <div
          onClick={handlePrevTestimonial}
          className={`w-[50px] h-[50px] rounded-full flex justify-center items-center hover:shadow-md hover:bg-green hover:text-white cursor-pointer ${
            currentTestimonial === 0
              ? 'opacity-50 cursor-not-allowed hover:text-black hover:bg-white hover:shadow-none'
              : ''
          }`}
        >
          <ArrowLeft />
        </div>

        <div
          onClick={handleNextTestimonial}
          className={`w-[50px] h-[50px] rounded-full flex justify-center items-center hover:shadow-md hover:bg-green hover:text-white cursor-pointer ${
            currentTestimonial === data?.testimonials.length - 1
              ? 'opacity-50 cursor-not-allowed hover:text-black hover:bg-white hover:shadow-none'
              : ''
          }`}
        >
          <ArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
