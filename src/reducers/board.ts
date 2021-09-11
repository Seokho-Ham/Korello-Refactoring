export type TagItem = {
  name: string;
  order: number;
};

export type CardItem = {
  id: string;
  name: string;
  tagValue: string;
  memberNames: [];
  labels: CardLabel[];
  createDate: string;
  updateDate: string;
  dueDate: string | null;
  order: number;
};

type TodoItem = {
  todoId: string;
  title: string;
  status: boolean;
};

type CardLabel = {
  id: string;
  name: string;
  color: string;
  createDate?: string;
  updateDate?: string;
};

export type CurrentCard = {
  id: string;
  name: string;
  labelList: CardLabel[];
  todoList: TodoItem[];
  order: number;
};

type BoardState = {
  loading: boolean;
  currentBoardId: string;
  tagList: TagItem[];
  cardList: { [key: string]: CardItem[] };
  boardLabelList: CardLabel[];
  currentCard: CurrentCard;
};
const LOADING = 'board/LOADING' as const;
const SETTAG = 'board/TAG' as const;
const SETCARD = 'board/CARD' as const;
const SETBOARDDATA = 'board/SETBOARDDATA' as const;
const SETCURRENTCARD = 'board/SETCURRENTCARD' as const;
const SETBOARDID = 'board/SETBOARDID' as const;
const SETBOARDLABELLIST = 'board/SETBOARDLABELLIST' as const;
export const boardLoadingAction = () => ({ type: LOADING });
export const setTagAction = (data: TagItem) => ({ type: SETTAG, payload: data });
export const setCardAction = (data: { [key: string]: CardItem[] }) => ({
  type: SETCARD,
  payload: data,
});
export const setBoardDataAction = (data: {
  tagList: TagItem[];
  cardList: { [key: string]: CardItem[] };
  boardLabelList: CardLabel[];
}) => ({
  type: SETBOARDDATA,
  payload: data,
});
export const setCurrentCardAction = (data: CurrentCard) => ({
  type: SETCURRENTCARD,
  payload: data,
});
export const setBoardIdAction = (data: string) => ({
  type: SETBOARDID,
  payload: data,
});
export const setBoardLabelAction = (data: CardLabel[]) => ({
  type: SETBOARDLABELLIST,
  payload: data,
});

type BoardAction =
  | ReturnType<typeof setCardAction>
  | ReturnType<typeof setTagAction>
  | ReturnType<typeof boardLoadingAction>
  | ReturnType<typeof setBoardDataAction>
  | ReturnType<typeof setCurrentCardAction>
  | ReturnType<typeof setBoardIdAction>
  | ReturnType<typeof setBoardLabelAction>;

const boardState: BoardState = {
  loading: false,
  currentBoardId: '',
  tagList: [],
  cardList: {},
  boardLabelList: [],
  currentCard: {
    id: '',
    name: '',
    labelList: [],
    todoList: [],
    order: 0,
  },
};

function boardReducer(state: BoardState = boardState, action: BoardAction): BoardState {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SETTAG:
      return { ...state, tagList: [...state.tagList, action.payload] };
    case SETCARD:
      return { ...state, cardList: action.payload };
    case SETBOARDID:
      return { ...state, currentBoardId: action.payload, loading: false };
    case SETCURRENTCARD:
      return { ...state, currentCard: action.payload, loading: false };
    case SETBOARDDATA:
      return {
        ...state,
        cardList: action.payload.cardList,
        tagList: action.payload.tagList,
        boardLabelList: action.payload.boardLabelList,
        loading: false,
      };
    case SETBOARDLABELLIST:
      return {
        ...state,
        boardLabelList: action.payload,
      };

    default:
      return state;
  }
}

export default boardReducer;
