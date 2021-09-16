import Axios from '../utils/axios';

class TodoApi {
  getCardTodoList = async (cardId: string) => Axios.get(`/api/v1/card/${cardId}/todo`);
  addTodo = async (cardId: string, title: string) =>
    Axios.post(`/api/v1/card/${cardId}/todo`, { cardId, title });
  deleteTodo = async (todoId: string) => Axios.delete(`/api/v1/todo/${todoId}`);
  changeTodoStatus = async (todoId: string) => Axios.put(`/api/v1/todo/${todoId}/status`);
}

export default new TodoApi();
