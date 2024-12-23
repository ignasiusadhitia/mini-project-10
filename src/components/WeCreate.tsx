import React from 'react';
import { Checklist } from '../assets/icons';
import { weCreateBanner } from '../assets/images';

const features = [
  {
    icon: <Checklist />,
    title: 'Valuation Services',
    desc: 'Sometimes features require a short description.  This can be detailed description',
  },
  {
    icon: <Checklist />,
    title: 'Development of Furniture Models',
    desc: 'Sometimes features require a short description.  This can be detailed description',
  },
];

interface Feature {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const FeaturesItem: React.FC<{ feature: Feature }> = ({ feature }) => (
  <li className="flex gap-4">
    <div>{feature.icon}</div>
    <div className="flex flex-col gap-[10px] md:gap-2">
      <h3 className="text-base md:text-xl md:leading-normal font-semibold">
        {feature.title}
      </h3>
      <p className="text-sm md:text-base md:leading-normal">{feature.desc}</p>
    </div>
  </li>
);

const WeCreate: React.FC = () => {
  return (
    <section className="container pt-[163px] pb-[50px] md:pb-[73px] grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[100px] px-6 md:px-0">
      <div className="h-[270px] md:h-[443px] order-2 md:order-1">
        <img
          src={weCreateBanner}
          alt="we-create-banner"
          className="w-full h-full object-cover rounded-[5px]"
        />
      </div>
      <div className="flex flex-col gap-[14px] order-1 md:order-2">
        <h2 className="text-2xl md:text-4.5xl md:leading-normal font-semibold max-w-[407px]">
          We Create Your Home More Aestetic
        </h2>
        <p className="text-sm md:text-xl md:leading-normal">
          Furnitre power is a software as services for multiperpose business
          management system.
        </p>

        <ul className="flex flex-col gap-[22px] md:gap-6 mt-[21px]">
          {features?.map((item) => (
            <FeaturesItem key={item.title} feature={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WeCreate;
