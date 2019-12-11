import React from "react";

import Calculator from "../src/components/calculet/calcul";

import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Calculator></Calculator>
        </div>
      </Provider>
    </div>
  );
}

export default App;
