import * as types from "./actionTypes";
import axios from "axios";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (success) => ({
  type: types.LOGIN_SUCCESS,
  payload: success,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const registerInitiate = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  return function (dispatch) {
    dispatch(registerStart());

    axios({
      method: "post",
      url: "http://localhost:3030/api/v1/auth/sign-up",
      data: {
        name: firstName + " " + lastName,
        email: email,
        password: password,
        rePassword: confirmPassword,
      },
    })
      .then((response) => {
        dispatch(registerSuccess());
      })
      .catch((error) => {
        dispatch(registerFail(error.response.data.error));
      });
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    axios
      .post("http://localhost:3030/api/v1/auth/sign-in", {
        email: email,
        password: password,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data.token));
      })
      .catch((error) => dispatch(loginFail(error.response.data.error)));
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    try {
      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutFail(err.message));
    }
  };
};
