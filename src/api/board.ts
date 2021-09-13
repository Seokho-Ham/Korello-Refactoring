import Axios from '../utils/axios';

class BoardAPI {
  getBoardLabelList = async (boardId: string) => Axios.get(`/board/${boardId}/label`);
  addBoardLabel = async (boardId: string, body: { name: string; color: string }) =>
    Axios.post(`/board/${boardId}/label`, body);
  deleteBoardLabel = async (boardId: string, labelId: string) =>
    Axios.delete(`/board/${boardId}/label/${labelId}`);
  getCardList = async (boardId: string) => Axios.get(`/board/${boardId}/cards`);
  addCard = async (
    boardId: string,
    body: {
      name: string;
      tagValue: string;
      members: string[];
      linkId: number;
    },
  ) => Axios.post(`/board/${boardId}/card`, body);
  deleteCard = async (boardId: string, body: { id: string }) =>
    Axios.post(`/board/${boardId}/card`, body);

  addCardLabel = async (cardId: string, body: { labelId: string }) =>
    Axios.post(`/card/${cardId}/label`, body);
  deleteCardLabel = async (cardId: string, body: { labelIds: string[] }) =>
    Axios.post(`/card/${cardId}/label/delete`, body);
}

export default new BoardAPI();
