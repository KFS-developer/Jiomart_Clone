import axios from "axios";
import { CATEGORIES_ERROR, CATEGORIES_REQUEST, CATEGORIES_SUCCESS } from "../actionType";

export const getdatafromserver = () => async (dispatch) => {
    dispatch({ type: CATEGORIES_REQUEST })
    try {
        const { data } = await axios.get("https://jiomart-clone-data-json.onrender.com/categories");
        dispatch({ type: CATEGORIES_SUCCESS, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CATEGORIES_ERROR })
    }
};