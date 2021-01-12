import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../duck/user";
import { bookingReducer } from "../duck/booking";

const reducers = combineReducers({
  auth: userReducer,
  booking: bookingReducer,
});

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// export const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(thunk))
// );

export const store = createStore(reducers, applyMiddleware(thunk));
