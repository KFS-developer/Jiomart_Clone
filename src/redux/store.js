import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import categories from "./categories/reducer";
import products from "./product/reducer";
import cartData from "./add-to-cart/reducer";
import auth from "./auth/reducer";
import search from "./search/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({categories, products, cartData, auth, search})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))