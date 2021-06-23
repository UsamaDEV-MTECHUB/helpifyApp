import moment from 'moment';
import {
  CURRENTLOCATION,
  SETLOADERVISIBLE,
  ADDCART,
  UPDATECART,
  DECREMENTCART,
  REMOVECART,
  EMPTYCART,
} from '../Types';
const intialState = {
  currentLocation: { latitude: 0, longitude: 0 },
  isLoaderVisible: false,
  cart: [],
  totalCartPrice: 0,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case CURRENTLOCATION: {
      return {
        ...state,
        currentLocation: action.payload,
      };
    }
    case SETLOADERVISIBLE: {
      return {
        ...state,
        isLoaderVisible: action.payload,
      };
    }
    case ADDCART: {
      const { item, size, count, price } = action.payload;
      var finalPrice = state.totalCartPrice + price;
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: moment().valueOf(),
            count,
            price,
            item,
            size,
          },
        ],
        totalCartPrice: finalPrice,
      };
    }
    case REMOVECART: {
      var id = action.payload;
      var index = state.cart.findIndex((item) => item.id == id);
      var price = state.cart[index].price;
      var finalPrice = state.totalCartPrice - price;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
        totalCartPrice: finalPrice,
      };
    }
    case UPDATECART: {
      var id = action.payload;
      var index = state.cart.findIndex((item) => item.id == id);
      var item = state.cart[index]
      var price = item.size.price;
      item.count = item.count + 1
      item.price = item.price + price
      var finalPrice = state.totalCartPrice + price;
      var arr = [...state.cart]
      arr[index] = item
      return {
        ...state,
        cart: arr,
        totalCartPrice: finalPrice,
      };
    }
    case DECREMENTCART: {
      var id = action.payload;
      var index = state.cart.findIndex((item) => item.id == id);
      var item = state.cart[index]
      var price = item.size.price;
      if (item.count <= 1)
      return{...state}
      item.count =  item.count - 1
      item.price = item.price - price
      var finalPrice = state.totalCartPrice - price;
      var arr = [...state.cart]
      arr[index] = item
      return {
        ...state,
        cart: arr,
        totalCartPrice: finalPrice,
      };
    }
    case EMPTYCART: {
      return {
        ...state,
        cart: [],
        totalCartPrice: 0,
      };
    }
    default:
      return state;
  }
};
export default reducer;
