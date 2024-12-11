import axiosInstance from './axiosInstance';

export const getData = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export const postData = async (endpoint: string, data: object) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
