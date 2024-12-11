import useSWR from 'swr';
import { getData } from '../api/apiRequest';

export const useFetchData = (endpoint: string) => {
  const { data, error, isLoading, mutate } = useSWR(endpoint, getData);

  return { data, error, isLoading, mutate };
};
