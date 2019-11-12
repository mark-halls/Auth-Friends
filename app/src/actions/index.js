import axiosAuth from "../utils/axiosAuth";

export const LOADING = `LOADING`;
export const LOAD_SUCCESS = `LOAD_SUCCESS`;
export const LOAD_FAILED = `LOAD_FAILED`;
export const DELETE = "DELETE";

const baseUrl = "http://localhost:5000/api";

export const loading = () => ({ type: LOADING });

export const loadSuccess = payload => ({
  type: LOAD_SUCCESS,
  payload
});

export const loadFailed = payload => ({
  type: LOAD_FAILED,
  payload
});

const login = ({ username, password }) => dispatch => {
  console.log("login");
  dispatch(loading());
  return axiosAuth()
    .post(`${baseUrl}/login`, { username, password })
    .then(res => {
      console.log(res);
      sessionStorage.setItem("token", res.data.payload);
      dispatch(loadSuccess({ loggedIn: true }));
    })
    .catch(err => dispatch(loadFailed(err)));
};

const getFriends = () => dispatch => {
  dispatch(loading());
  return axiosAuth()
    .get(`${baseUrl}/friends`)
    .then(res => dispatch(loadSuccess({ friends: [...res.data] })))
    .catch(err => dispatch(loadFailed(err)));
};

const getFriend = id => dispatch => {
  dispatch(loading());
  return axiosAuth()
    .get(`${baseUrl}/friends/${id}`)
    .then(res => dispatch(loadSuccess({ friends: [res.data] })))
    .catch(err => dispatch(loadFailed(err)));
};

export const actions = {
  login,
  getFriend,
  getFriends
};
