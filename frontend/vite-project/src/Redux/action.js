const HANDLE_AUTH = "HANDLE_AUTH";

const handleAuth = (auth) => {
  return {
    type: HANDLE_AUTH,
    payload: auth,
  };
};
