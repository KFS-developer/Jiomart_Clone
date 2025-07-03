import { CART_ERROR, CART_REQUEST, CART_SUCCESS } from "../actionType";

const insitalstate = {
    loading: false,
    error: false,
    cartData: []
};

function reducer(state = insitalstate, { type, payload }) {
    switch (type) {
        case CART_REQUEST:
            return { ...state, loading: true }

        case CART_SUCCESS:
            return { ...state, loading: false, cartData: payload }

        case CART_ERROR:
            return { ...state, error: true, loading: false }

        default:
            return state;
    }
}

export default reducer;