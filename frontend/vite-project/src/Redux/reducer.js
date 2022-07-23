import { HANDLE_AUTH } from "./action";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case HANDLE_AUTH:
      return { ...store, isAuth: payload };
    default:
      return store;
  }
};
