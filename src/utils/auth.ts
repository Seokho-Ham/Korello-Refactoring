import qs from 'querystring';

class Auth {
  public getToken = () => ({
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
  });
  public setToken = (access: string, refresh: string) => {
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
  };
  public removeToken = () => {
    localStorage.clear();
  };
  public checkUrlToken(url: string): boolean {
    const { accessToken, refreshToken } = qs.parse(url.slice(1));

    if (accessToken && refreshToken) {
      this.setToken(String(accessToken), String(refreshToken));
      return true;
    }
    return false;
  }
}

export default new Auth();
