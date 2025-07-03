import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Description from "./pages/Description"
import AddToCart from "./components/AddToCart"
import SignIn from "./components/SignIn"
import PaymentPage from "./components/PaymentPage"
import SearchProduct from "./components/SearchProduct"

const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:categoryId/:subcategoryId" element={<Products />} />
            <Route path="/description/:categoryId/:subcategoryId/:productId" element={<Description />} />
            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/payment" element={<PaymentPage />} />
             <Route path="/search" element={<SearchProduct />} />
        </Routes>
    )
}

export default Allroutes