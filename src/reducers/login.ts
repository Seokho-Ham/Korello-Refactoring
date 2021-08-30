const LOGIN = 'LOGIN' as const;
const LOGOUT = 'LOGOUT' as const;

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

type LoginAction = ReturnType<typeof login> | ReturnType<typeof logout>;

type LoginState = {
  status: boolean;
};

const loginState: LoginState = {
  status: false,
};

function loginStatus(state: LoginState = loginState, action: LoginAction): LoginState {
  switch (action.type) {
    case LOGIN:
      return { status: true };
    case LOGOUT:
      return { status: false };
    default:
      return state;
  }
}

export default loginStatus;
