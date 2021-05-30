export const ADD_USERS = "ADD_POST";
export const ADD_BIRTHDAY = "ADD_BIRTHDAY";
const initialState = {
  users: [],
  birthdays: [],
};
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case ADD_BIRTHDAY: {
      return {
        ...state,
        birthdays: action.payload,
      };
    }
    default:
      return state;
  }
};
export const addUser = (user) => {
  return {
    type: ADD_USERS,
    payload: user,
  };
};
export const addBirthday = (birthday) => {
  return {
    type: ADD_BIRTHDAY,
    payload: birthday,
  };
};
export default homeReducer;