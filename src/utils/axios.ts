import axios, { AxiosError, AxiosInstance } from 'axios';
import { BASE_URL } from '../config';
import Auth from './auth';
import handleHttpError from './error';

class Axios {
  private instance: AxiosInstance;

  constructor() {
    const { accessToken } = Auth.getToken();
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        // Authorization: 'Bearer' + accessToken,
        coco: 'coco',
      },
    });
  }

  private requestToServer = async ({
    method,
    url,
    body,
    config,
  }: {
    method: 'get' | 'post' | 'delete' | 'put';
    url: string;
    body?: {};
    config?: {};
  }) => {
    try {
      const { data } = await this.instance[method](url, body, config);
      // console.log(data);
      if (data.result_code === 9999) {
        throw new Error('9999');
      } else {
        return data;
      }
    } catch (error: any) {
      handleHttpError(error, { method, url, body, config }, this.requestToServer);
    }
  };

  public get = (url: string) => this.requestToServer({ method: 'get', url });
  public post = (url: string, body?: any) => this.requestToServer({ method: 'post', url, body });

  public delete = (url: string, config?: any) =>
    this.requestToServer({ method: 'delete', url, config });

  public put = (url: string, body?: any) => this.requestToServer({ method: 'put', url, body });
}

export default new Axios();
