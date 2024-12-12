import React, { useState } from 'react';
import { postData } from '../api/apiRequest';

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
    <section className="container py-[100px] grid grid-cols-2">
      <div></div>
      <div>
        <h2>Get more discount Off your order</h2>
        <p>Join our mailing list</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            disabled={status.loading}
          />
          <button type="submit" disabled={status.loading}>
            {status.loading ? 'Submitting...' : 'Shop Now'}
          </button>
        </form>
        {status.success && <span>Success: {status.success}</span>}
        {status.error && <span>Error: {status.error}</span>}
      </div>
    </section>
  );
};

export default CTA;
