import axios from "axios";
import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../actionType";

export const get_product_data = ({ price }) => async (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    try {
        const { data } = await axios.get("https://jiomart-clone-data-json.onrender.com/products", {
            params: {
                _sort: price ? "price" : undefined,
                _order: price === "low-to-high" ? "asc" : "desc",
            },
        });
        dispatch({ type: PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: PRODUCT_ERROR })
    }
};