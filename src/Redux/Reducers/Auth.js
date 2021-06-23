import {LOGIN, LOGOUT, SELECTEDTYPE} from '../Types';
const intialState = {
  user: {},
  isLogin: false,
  isSelected: '',
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: {},
        isLogin: false,
      };
    }
    case SELECTEDTYPE: {
      return {
        ...state,
        isSelected: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
