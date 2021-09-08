type CurrentCard = {
  id: string;
  name: string;
  labelList: CardLabel[];
  todoList: [];
  order: number;
};

type CardLabel = {
  id: string;
  name: string;
  color: string;
  createDate: string;
  updateDate: string;
};
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

type BoardState = {
  loading: boolean;
  currentBoardId: string;
  tagList: TagItem[];
  cardList: { [key: string]: CardItem[] };
  boardLabelList: [];
  currentCard: CurrentCard;
};
const LOADING = 'board/LOADING' as const;
const GETCARDS = 'board/GETCARDS' as const;
const SETCURRENTCARD = 'board/SETCURRENTCARD' as const;
const SETBOARDID = 'board/SETBOARDID' as const;

export const boardLoadingAction = () => ({ type: LOADING });

export const getCardAction = (data: {
  tagList: TagItem[];
  cardList: { [key: string]: CardItem[] };
}) => ({
  type: GETCARDS,
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

type BoardAction =
  | ReturnType<typeof boardLoadingAction>
  | ReturnType<typeof getCardAction>
  | ReturnType<typeof setCurrentCardAction>
  | ReturnType<typeof setBoardIdAction>;

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
    case SETBOARDID:
      return { ...state, currentBoardId: action.payload, loading: false };
    case SETCURRENTCARD:
      return { ...state, currentCard: action.payload, loading: false };
    case GETCARDS:
      return {
        ...state,
        cardList: action.payload.cardList,
        tagList: action.payload.tagList,
        loading: false,
      };
    default:
      return state;
  }
}

export default boardReducer;
