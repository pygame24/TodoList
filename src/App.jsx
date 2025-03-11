import React from "react";
import AppLayout from "./components/layout/AppLayout";
import { Provider } from "react-redux";

import store from "./store/store";

function App() {
    return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  )
}

export default App;