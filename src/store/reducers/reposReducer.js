export const TYPES = {
  SET_USERNAME: "SET_USERNAME",
  SET_REPOS: "SET_REPOS",
  SET_LOADING: "SET_LOADING",
};

const initialState = {
  // login: "",
  repos: [],
  username: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case TYPES.SET_REPOS:
      return {
        ...state,
        repos: action.data,
        username: action.data.username,
      };
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
