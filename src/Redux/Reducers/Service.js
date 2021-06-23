import {SETSERVICE} from '../Types';
const intialState = {
  service: null,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SETSERVICE: {
      return {
        ...state,
        service: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
