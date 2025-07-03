import { CATEGORIES_ERROR, CATEGORIES_REQUEST, CATEGORIES_SUCCESS } from "../actionType";

const insitalstate = {
    loading: false,
    error: false,
    categories: []
};

function reducer(state = insitalstate, { type, payload }) {
    switch (type) {
        case CATEGORIES_REQUEST:
            return { ...state, loading: true }

        case CATEGORIES_SUCCESS:
            return { ...state, loading: false, categories: payload }

        case CATEGORIES_ERROR:
            return { ...state, error: true, loading: false }

        default:
            return state;
    }
}

export default reducer;