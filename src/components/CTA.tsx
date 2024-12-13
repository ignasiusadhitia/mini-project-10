import React, { useState } from 'react';
import { postData } from '../api/apiRequest';
import { cTABanner } from '../assets/images';

interface Status {
  loading: boolean;
  success: null | string;
  error: null | string;
}

const CTA: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<Status>({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setStatus({
      loading: false,
      success: null,
      error: null,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await postData('/subscribe', { email });
      setStatus({ loading: false, success: response?.message, error: null });
      setEmail('');
    } catch (error) {
      const err = error as { error?: string };
      setStatus({ loading: false, success: null, error: err?.error ?? null });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${cTABanner})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className="container pt-[100px] pb-[142px] grid grid-cols-1 md:grid-cols-2 gap-[42px]">
        <div></div>
        <div>
          <h2 className="text-2xl md:text-4.5xl md:leading-normal font-semibold mt-0 md:mt-[41px] w-full text-white md:max-w-[349px] px-6 md:px-0">
            Get more discount Off your order
          </h2>
          <p className="text-xl mt-5 mb-[40px] text-white">
            Join our mailing list
          </p>
          <form onSubmit={handleSubmit} className="flex gap-[22px]">
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              disabled={status.loading}
              className="py-[22px] px-6 rounded-lg flex-grow "
            />
            <button
              type="submit"
              disabled={status.loading}
              className="px-7 bg-black text-white font-semibold text-xl rounded-[8px]"
            >
              {status.loading ? 'Submitting...' : 'Shop Now'}
            </button>
          </form>
          {status.success && <span>Success: {status.success}</span>}
          {status.error && <span>Error: {status.error}</span>}
        </div>
      </section>
    </div>
  );
};

export default CTA;
