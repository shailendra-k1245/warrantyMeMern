import { legacy_createStore as createStore } from "redux";

import { reducer } from "./reducer";

const initState = {
  isAuth: false,
};

export const store = createStore(reducer, initState);
