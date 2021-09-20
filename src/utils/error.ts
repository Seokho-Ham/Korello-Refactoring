import Auth from './auth';
import Axios from './axios';

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
    console.log(error);
    alert('9999 error');
    window.location.reload();
  } else {
    const { data } = error.response;
    if (data.status >= 401 && data.status < 404) {
      const tokenStatus = await checkTokenStatus();
      if (tokenStatus) {
        await func(config);
      } else {
        window.location.href = 'http://localhost:8080/';
      }
    } else if (data.status === 500) {
      alert('Internal Server Error');
      window.location.reload();
    }
  }
};

const checkTokenStatus = async () => {
  const response = await Axios.post('/oauth2/refresh');

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
