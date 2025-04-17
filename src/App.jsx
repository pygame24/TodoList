import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { TaskProvider } from "./context/TaskContext";
import AppLayout from "./components/layout/AppLayout";

import store, { persistor } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <TaskProvider>
          <AppLayout />
        </TaskProvider>
      </PersistGate>

    </Provider>
  )
}

export default App;