import Axios from '../utils/axios';

export const getBoardList = async () => await Axios.get('/board/self');

export const addBoard = async (body: { name: string }) => await Axios.post('/board', body);

export const deleteBoard = async (url: string) => await Axios.delete(url);
