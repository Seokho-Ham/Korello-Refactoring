import Axios from '../utils/axios';

class MainApi {
  getBoardList = async () => await Axios.get('/api/v1/board/self');
  getSingleBoardData = async (id: string) => await Axios.get(`/api/v1/board/${id}`);
  addBoard = async (body: { name: string }) => await Axios.post('/api/v1/board', body);
  deleteBoard = async (body: { id: string }) => await Axios.post('/api/v1/board/delete', body);
}

export default new MainApi();
