export const types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
};

export const getUserRequest = () => ({
  type: types.GET_USERS_REQUEST,
});

export const getUserSuccess = (items) => ({
  type: types.GET_USERS_SUCCESS,
  payload: {
    items,
  },
});
