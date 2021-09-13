import { composeWithDevTools } from 'redux-devtools-extension';
import Auth from './auth';
import Axios from './axios';
interface HttpError extends Error {
  status: string;
  response: { data: { result_code: number; result_message: string; result_time: string } };
}

const handleHttpError = async (
  error: any,
  config: {
    method: 'get' | 'post' | 'delete' | 'put';
    url: string;
    body?: {};
    config?: {};
  },
  func: ({
    method,
    url,
    body,
    config,
  }: {
    method: 'get' | 'post' | 'delete' | 'put';
    url: string;
    body?: {};
    config?: {};
  }) => Promise<any>,
) => {
  if (error.message === '9999') {
    alert('9999 error');
    window.location.reload();
  } else {
    const { data } = error.response;
    if (data.result_code >= 401) {
      const tokenStatus = await checkTokenStatus();
      if (tokenStatus) {
        await func(config);
      } else {
        window.location.href = 'http://localhost:8080/';
      }
    } else if (data.result_code === 500) {
      alert('Internal Server Error');
      window.location.reload();
    }
  }
};

const checkTokenStatus = async () => {
  const response = await Axios.post('https://hyuki.app/oauth2/refresh');

  if (response) {
    if (response.result_code >= 401001) {
      if (response.result_code === 401001) {
        alert('토큰 기한이 만료됐습니다.');
      }
      if (response.result_code === 401002) {
        alert('토큰이 손상되었습니다.');
      }
      if (response.result_code === 401003) {
        alert('토큰이 존재하지 않습니다.');
      }
      Auth.removeToken();
      return false;
    } else if (response.result_code === 200) {
      Auth.setToken(response.result_body.access_token, response.result_body.refresh_token);
      return true;
    }
  }
};

export default handleHttpError;
