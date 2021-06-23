import {
  CURRENTLOCATION,
  SETLOADERVISIBLE,
  ADDCART,
  REMOVECART,
  EMPTYCART,
  UPDATECART,
  DECREMENTCART
} from '../Types';

export const setCurrentLocation = (payload) => {
  return {
    type: CURRENTLOCATION,
    payload: payload,
  };
};
export const addCartAction = (payload) => {
  return {
    type: ADDCART,
    payload: payload,
  };
};
export const removeCart = (payload) => {
  return {
    type: REMOVECART,
    payload: payload,
  };
};
export const updateCart = (payload) => {
  return {
    type: UPDATECART,
    payload: payload,
  };
};
export const decreamentCart = (payload) => {
  return {
    type: DECREMENTCART,
    payload: payload,
  };
};
export const emptyCartAction = (payload) => {
  return {
    type: EMPTYCART,
    payload: payload,
  };
};
export const setLoaderVisible = (visible) => {
  return {
    type: SETLOADERVISIBLE,
    payload: visible,
  };
};
