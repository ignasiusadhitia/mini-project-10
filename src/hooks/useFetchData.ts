import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

export const useFetchData = (endpoint: string) => {
  const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher);

  return { data, error, isLoading, mutate };
};
