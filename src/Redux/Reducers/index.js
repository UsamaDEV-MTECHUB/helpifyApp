import Auth from './Auth';
import Config from './Config';
import Service from './Service';
import Maps from './Maps';
import {combineReducers} from 'redux';

export default combineReducers({
  Auth: Auth,
  Config: Config,
  Service: Service,
  Maps:Maps
});
