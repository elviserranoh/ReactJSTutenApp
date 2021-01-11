import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

import "./index.css";

export const TutenApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
