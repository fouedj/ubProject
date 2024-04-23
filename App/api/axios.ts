import axios from 'axios';
import {SERVER_URL} from '../config/constants';

const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}/api/`,
});
export default axiosInstance;
