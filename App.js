import React from "react";
import {Provider} from "react-redux";

import configureStore from "./store/store";

import MainScreen from "./screens/mainScreen"
import Navigator from "./routes/homeStack"

const store = configureStore();

const App = () => {
  return (
    <Provider store= {store}>
      <Navigator/>
    </Provider>
  );
}

export default App;
