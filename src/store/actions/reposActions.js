import { TYPES } from "../reducers/reposReducer";

const changeUsername = (username) => (dispatch) => {
  try {
    dispatch({
      type: TYPES.SET_USERNAME,
      username,
    });
  } catch (error) {
    console.error(error);
  }
};

const setRepos = (username) => async (dispatch) => {
  dispatch({ type: TYPES.SET_LOADING, loading: true });

  try {
    const resp = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await resp.json();

    dispatch({
      type: TYPES.SET_REPOS,
      username,
      data,
    });
  } catch (error) {
    console.error(error);
  }

  dispatch({ type: TYPES.SET_LOADING, loading: false });
};

export { setRepos, changeUsername };
