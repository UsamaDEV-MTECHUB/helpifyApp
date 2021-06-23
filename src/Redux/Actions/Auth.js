import {LOGIN, LOGOUT, SELECTEDTYPE} from '../Types';
// import auth from '@react-native-firebase/auth';
import {AsyncStorage} from 'react-native';
export const login = payload => {
  return {
    type: LOGIN,
    payload: payload,
  };
};

export const logout = async dispatch => {
  await AsyncStorage.removeItem('token');
  dispatch(increment());
};
const increment = () => {
  console.log('caled');
  return {
    type: LOGOUT,
    payload: {uid: ''},
  };
};
export const selectedType = payload => {
  return {
    type: SELECTEDTYPE,
    payload: payload,
  };
};
