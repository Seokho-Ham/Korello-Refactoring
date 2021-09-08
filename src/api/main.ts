import Axios from '../utils/axios';

export const getBoardList = async () => await Axios.get('/board/self');

export const getOneBoard = async (id: string) => await Axios.get(`/board/${id}`);

export const addBoard = async (body: { name: string }) => await Axios.post('/board', body);

export const deleteBoard = async (body: { id: string }) => await Axios.post('/board/delete', body);
