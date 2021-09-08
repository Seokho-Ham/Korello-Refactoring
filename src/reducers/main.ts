import { boardList } from '../assets/data';

//error class를 만들어서 타입을 지정하자
type BoardItem = {
  id: string;
  name: string;
  memberNames: [];
  createDate: Date;
  updateDate: Date;
};

type MainState = {
  status: boolean;
  error: string;
  boardList: BoardItem[];
};

const LOADING = 'main/LOADING' as const;
const GETLIST = 'main/GETLIST' as const;
const ADDBOARD = 'main/ADDBOARD' as const;
const DELETEBOARD = 'main/DELETEBOARD' as const;
const FAILED = 'main/FAILED' as const;

export const loading = () => ({ type: LOADING });
export const getListAction = (list: any) => ({ type: GETLIST, payload: list });
export const addBoardAction = (item: any) => ({ type: ADDBOARD, payload: item });
export const deleteBoardAction = (id: any) => ({ type: DELETEBOARD, payload: id });
export const failed = (message: string) => ({ type: FAILED, payload: message });

type MainAction =
  | ReturnType<typeof loading>
  | ReturnType<typeof getListAction>
  | ReturnType<typeof addBoardAction>
  | ReturnType<typeof deleteBoardAction>
  | ReturnType<typeof failed>;

const mainState: MainState = {
  status: false,
  error: '',
  boardList: [],
};

function mainReducer(state: MainState = mainState, action: MainAction): MainState {
  switch (action.type) {
    case LOADING:
      return { ...state, status: true };
    case GETLIST:
      return {
        ...state,
        status: false,
        boardList: action.payload,
      };
    case ADDBOARD:
      return {
        ...state,
        status: false,
        boardList: [...state.boardList, action.payload],
      };
    case DELETEBOARD: {
      let filteredBoardList = state.boardList.filter(el => el.id !== action.payload.id);
      return {
        ...state,
        status: false,
        boardList: filteredBoardList,
      };
    }
    case FAILED:
      return { ...state, status: false, error: action.payload };
    default:
      return state;
  }
}

export default mainReducer;
