import React from "react";
import {Provider} from "react-redux";

import configureStore from "./store/store";

import MainScreen from "./screens/mainScreen"


const store = configureStore();

export default function App(){
  return (
    <Provider store= {store}>

      <MainScreen/>

    </Provider>
  );
}
