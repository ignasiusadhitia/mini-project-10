import React from 'react';

const TestimonialCard: React.FC = ({ testimonial }) => {
  return (
    <div className="w-full mt-[36px]">
      <div className="flex items-center gap-5 mb-[30px] ">
        <img
          src={testimonial.image}
          alt="testimonial-photo"
          className=" w-[80px] h-[80px] rounded-full"
        />
        <div>
          <span className="block text-xl text-black font-semibold">
            {testimonial.name}
          </span>
          <span className="block text-black mt-3 opacity-50">
            {testimonial.title}
          </span>
        </div>
      </div>
      <p>"{testimonial.message}"</p>
    </div>
  );
};

export default TestimonialCard;
