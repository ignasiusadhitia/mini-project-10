import React from 'react';
import { weCreateBanner } from '../assets/images';

const WeCreate: React.FC = () => {
  return (
    <section className="container pt-[163px] pb-[73px] grid grid-cols-2 gap-[100px]">
      <div>
        <img src={weCreateBanner} alt="we-create-banner" />
      </div>
      <div>
        <h2 className="text-4.5xl font-semibold max-w-[407px]">
          We Create Your Home More Aestetic
        </h2>
        <p className="text-xl">
          Furnitre power is a software as services for multiperpose business
          management system.
        </p>

        <ul>
          <li>
            <div></div>
            <div>
              <h3>Valuation Services</h3>
              <p>
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div></div>
            <div>
              <h3>Development of Furniture Models</h3>
              <p>
                Sometimes features require a short description. This can be
                detailed description{' '}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WeCreate;
