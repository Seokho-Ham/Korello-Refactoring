import Axios from '../utils/axios';

class EventApi {
  getBoardEvents = async (boardId: string) => Axios.get(`/api/v2/events/board/${boardId}`, true);
  getCardsEvents = async (cardId: string) => Axios.get(`/api/v2/events/card/${cardId}`, true);
}

export default new EventApi();
