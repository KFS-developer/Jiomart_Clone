import axios from "axios";
import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionType";

// Login Action
export const loginUser = (email, password) => async (dispatch) => {
    try {
        const res = await axios.get(`https://jiomart-clone-data-json.onrender.com/users?email=${email}`);
        const user = res.data[0];
        if (user && user.password === password) {
            dispatch({ type: LOGIN_SUCCESS, payload: user });
        } else {
            dispatch({ type: LOGIN_FAIL, payload: "Invalid credentials" });
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: "Something went wrong" });
    }
};

// Register Action
export const registerUser = (userData) => async (dispatch) => {
    try {
        const check = await axios.get(`https://jiomart-clone-data-json.onrender.com/users?email=${userData.email}`);
        if (check.data.length > 0) {
            dispatch({ type: REGISTER_FAIL, payload: "Email already exists" });
        } else {
            const { data } = await axios.post("https://jiomart-clone-data-json.onrender.com/users", userData);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: "Something went wrong" });
    }
};
