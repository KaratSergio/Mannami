import axios, { type AxiosRequestConfig } from 'axios';

interface RequestWrapperParams {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete';
  url: string;
  data?: object;
  config?: AxiosRequestConfig;
  params?: { [k: string]: string };
  apiName: 'api1' | 'api2' | 'api3';
}

const requestWrapper = async (
  { method, url, data, config, apiName }: RequestWrapperParams,
  errorHandler = (error: any) => {
    return `An error occurred: ${error}`;
  }
) => {
  let baseURL = '';

  switch (apiName) {
    case 'api1':
      baseURL = 'https://SOME_API_URL-1.app';
      break;
    case 'api2':
      baseURL = 'https://SOME_API_URL-2.app';
      break;
    case 'api3':
      baseURL = 'https://SOME_API_URL-3.app';
      break;
    default:
      throw new Error('Unknown API name');
  }

  const axiosInstance = axios.create({
    baseURL,
  });

  try {
    const response = await axiosInstance.request({
      method,
      url,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};

export default requestWrapper;
