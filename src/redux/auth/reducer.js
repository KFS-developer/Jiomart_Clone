import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionType";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("jiomartUser")) || null,
    error: false
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { ...state, currentUser: payload, };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return { ...state, currentUser: null, error: payload };
        case "LOGOUT_USER":
            return { ...state, currentUser: null, error: false };
        default:
            return state;
    }
};

export default reducer;