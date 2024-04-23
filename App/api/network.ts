import axiosInstance from './axios';

const Network = (token = '') => {
  return {
    post: (path: string, data: any) => {
      return axiosInstance.post(path, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    get: (path: string) => {
      return axiosInstance.get(path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  };
};
export default Network;
