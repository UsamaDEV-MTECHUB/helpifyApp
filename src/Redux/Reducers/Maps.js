import {MAPSCREENSTATE} from '../Types';
const intialState = {
  mapScreenState: '',
  prevMapScreenState:''
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case MAPSCREENSTATE: {
      return {
        ...state,
        mapScreenState: action.payload,
        prevMapScreenState:action?.prevScreen||''
      };
    }
    default:
      return state;
  }
};
export default reducer;
