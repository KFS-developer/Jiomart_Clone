import axios from "axios";
import { CART_ERROR, CART_REQUEST, CART_SUCCESS } from "../actionType";

export const handleCart = (product, id) => async (dispatch) => {
    dispatch({ type: CART_REQUEST })
    try {
        const { data } = await axios.get("https://jiomart-clone-data-json.onrender.com/add-to-cart");
        const cartData = data.find((el) => el.id === Number(id));

        if (!cartData) {
            await axios.post("https://jiomart-clone-data-json.onrender.com/add-to-cart", { ...product, quantity: 1 });
            dispatch({ type: CART_SUCCESS, payload: product })
            alert("Product added to cart!");
        } else {
            alert("Product already in cart!");
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: CART_ERROR })
    }
};

export const get_data_from_cart = () => async (dispatch) => {
    dispatch({ type: CART_REQUEST })
    try {
        const { data } = await axios.get("https://jiomart-clone-data-json.onrender.com/add-to-cart");
        dispatch({ type: CART_SUCCESS, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CART_ERROR })
    }
}


export const handleUpdateQty = (id, BtnType) => async (dispatch) => {
    try {
        const { data } = await axios.get(`https://jiomart-clone-data-json.onrender.com/add-to-cart/${id}`);
        const currentQty = data.quantity;

        if (BtnType === 'DECREMENT') {
            if (currentQty <= 1) {
                axios.delete(`https://jiomart-clone-data-json.onrender.com/add-to-cart/${id}`)
                    .then(() => {
                        dispatch(get_data_from_cart({}));
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                return;
            }
        }

        const updatedQty = BtnType === 'INCREMENT' ? currentQty + 1 : currentQty - 1;

        await axios.patch(`https://jiomart-clone-data-json.onrender.com/add-to-cart/${id}`, { quantity: updatedQty });
        dispatch(get_data_from_cart({}));
    } catch (error) {
        console.log(error);
    }
};