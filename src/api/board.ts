import Axios from '../utils/axios';

class BoardAPI {
  getBoardLabelList = async (boardId: string) => Axios.get(`/api/v1/board/${boardId}/label`);
  addBoardLabel = async (boardId: string, body: { name: string; color: string }) =>
    Axios.post(`/api/v1/board/${boardId}/label`, body);
  deleteBoardLabel = async (boardId: string, labelId: string) =>
    Axios.delete(`/api/v1/board/${boardId}/label/${labelId}`);
  getCardList = async (boardId: string) => Axios.get(`/api/v1/board/${boardId}/cards`);
  addCard = async (
    boardId: string,
    body: {
      name: string;
      tagValue: string;
      members: string[];
      linkId: number;
    },
  ) => Axios.post(`/api/v1/board/${boardId}/card`, body);
  deleteCard = async (boardId: string, body: { id: string }) =>
    Axios.post(`/api/v1/board/${boardId}/card`, body);

  addCardLabel = async (cardId: string, body: { labelId: string }) =>
    Axios.post(`/api/v1/card/${cardId}/label`, body);
  deleteCardLabel = async (cardId: string, body: { labelIds: string[] }) =>
    Axios.post(`/api/v1/card/${cardId}/label/delete`, body);
  changeCardOrder = async (boardId: string, body: { id: string; linkId: number }) =>
    Axios.put(`/api/v1/board/${boardId}/card/display-order`, body);
  changeCardOrderAndTag = async (
    boardId: string,
    body: { id: string; tagValue: string; linkId: number },
  ) => Axios.put(`/api/v1/board/${boardId}/card/tag-display-order`, body);
}

export default new BoardAPI();
