import Axios from '../utils/axios';

class BoardAPI {
  getCardList = async (boardId: string) => Axios.get(`/board/${boardId}/cards`);
  addCard = async (
    boardId: string,
    body: {
      name: string;
      tagValue: string;
      members: string[];
      order: number;
    },
  ) => Axios.post(`/board/${boardId}/card`, body);
  deleteCard = async (boardId: string, body: { id: string }) =>
    Axios.post(`/board/${boardId}/card`, body);
}

export default new BoardAPI();
