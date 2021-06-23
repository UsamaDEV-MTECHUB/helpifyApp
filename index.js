/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import App from './App';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/Redux/index';
console.disableYellowBox = true;
export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Index);
