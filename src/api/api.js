export const BASE = 'https://helping-app-backend.herokuapp.com/';
// export const BASE = 'http://localhost:3000/';
export const BASEURL = BASE + 'api/';
export const IMAGE_URL = BASE;
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import store from '../Redux';
export const getUser = () => {
  return store.getState().Auth.user;
};
export const signUpApi = async (body, token) => {
  console.log(token);
  try {
    var response = await axios.post(BASEURL + 'user/signup', body, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if (response?.data?.success)
      await AsyncStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error?.response?.data == 'unauthorize')
      return {
        success: false,
        message: 'User Already Exist!',
      };
  }
};

export const loginApi = async body => {
  try {
    var response = await axios.post(BASEURL + 'user/login', body);
    if (response?.data?.success)
      await AsyncStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401 || error?.response?.status == 403)
      return {
        success: false,
        message: 'Invalid username or password!',
      };
  }
};

export const verifyUser = async body => {
  try {
    var token = await AsyncStorage.getItem('token');
    var response = await axios.get(BASEURL + 'user/detail', {
      headers: {Authorization: 'Bearer ' + token},
    });
    return response.data;
  } catch (error) {
    console.log(error?.respose);
    return;
  }
};

export const sendOtpApi = async body => {
  try {
    var response = await axios.post(BASEURL + 'user/detail', body);
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};
