import Axios from '../utils/axios';

class TodoApi {
  getCardTodoList = async (cardId: string) => Axios.get(`/card/${cardId}/todo`);
  addTodo = async (cardId: string, title: string) =>
    Axios.post(`/card/${cardId}/todo`, { cardId, title });
  deleteTodo = async (todoId: string) => Axios.delete(`/todo/${todoId}`);
  changeTodoStatus = async (todoId: string) => Axios.put(`/todo/${todoId}/status`);
}

export default new TodoApi();
