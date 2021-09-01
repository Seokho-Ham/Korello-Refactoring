import qs from 'querystring';

export function checkUrlToken(url: string): boolean {
  const { accessToken, refreshToken } = qs.parse(url.slice(1));

  if (accessToken && refreshToken) {
    localStorage.setItem('accessToken', String(accessToken));
    localStorage.setItem('refreshToken', String(refreshToken));
    return true;
  }

  return false;
}
