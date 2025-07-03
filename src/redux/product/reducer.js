import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../actionType";

const insitalstate = {
    loading: false,
    error: false,
    products: []
};

function reducer(state = insitalstate, { type, payload }) {
    switch (type) {
        case PRODUCT_REQUEST:
            return { ...state, loading: true }

        case PRODUCT_SUCCESS:
            return { ...state, loading: false, products: payload }

        case PRODUCT_ERROR:
            return { ...state, error: true, loading: false }

        default:
            return state;
    }
}

export default reducer;