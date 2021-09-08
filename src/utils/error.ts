import Auth from './auth';
import Axios from './axios';
interface HttpError extends Error {
  status: string;
  response: { data: { result_code: number; result_message: string; result_time: string } };
}

const handleHttpError = async (
  error: HttpError,
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
  const { data } = error.response;

  //인증 토큰 관련 에러 핸들링
  if (data.result_code >= 401) {
    //토큰의 유효성 검사
    const tokenStatus = await checkTokenStatus();
    if (tokenStatus) {
      await func(config);
    } else {
      window.location.href = 'http://localhost:8080/';
    }
  } else {
    console.log(error);
    //이외의 에러 핸들링
    // 어떤 에러가
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
