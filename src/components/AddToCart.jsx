import { useEffect } from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { get_data_from_cart, handleUpdateQty } from '../redux/add-to-cart/action';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
    const dispatch = useDispatch();
    const { cartData } = useSelector((state) => state.cartData);
    const { currentUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();



    const handleOrderClick = () => {
        if (!currentUser) {
            alert("Please log in to place an order.");
            navigate("/login");
            return;
        }
        navigate("/payment");
    };

    const cartItems = cartData || [];
    
    let totalMRP = 0;
    let totalPrice = 0;
    
    cartItems.forEach(item => {
        totalMRP += item.originalPrice * item.quantity;
        totalPrice += item.price * item.quantity;
    });
    
    const totalDiscount = totalMRP - totalPrice;

    useEffect(() => {
        dispatch(get_data_from_cart({}));
    }, [dispatch]);

    return (
        <div className="min-h-screen bg-white pt-20 px-4 md:px-10">
            <h1 className="text-2xl font-bold mb-6">My Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-20">
                    <div className='flex justify-center text-[100px]'>
                        <FaCartShopping />
                    </div>
                    <h2 className="text-xl font-semibold">Your Cart is Empty!</h2>
                    <p className="text-gray-600 mt-2">
                        It's a nice day to buy the items you saved for later!
                    </p>
                    <Link to={"/"} className="inline-block mt-4 text-blue-600 hover:underline font-medium">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="border p-4 rounded-2xl flex gap-4 items-center">
                                <img src={item.image[0]} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />

                                <div className="flex-1">
                                    <h3 className="font-medium text-md">{item.name}</h3>
                                    <div className="text-sm text-gray-500 mt-1">Delivery by 20th Jun</div>
                                    <div className="mt-2 flex items-center gap-3">
                                        <span className="text-lg font-semibold text-green-700">₹{item.price}</span>
                                        <span className="line-through text-gray-400">₹{item.originalPrice}</span>
                                        <span className="text-sm text-green-500">
                                            You Save ₹{(item.originalPrice - item.price) * item.quantity}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button onClick={() => dispatch(handleUpdateQty(item.id, "DECREMENT"))}>
                                        <CiCircleMinus size={24} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(handleUpdateQty(item.id, "INCREMENT"))}>
                                        <CiCirclePlus size={24} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border rounded-2xl shadow-md space-y-6">
                        <div className="pt-4">
                            <h4 className="font-semibold mb-2">Payment Details</h4>
                            <div className="text-sm space-y-1">
                                <div className="flex justify-between">
                                    <span>MRP Total</span>
                                    <span>₹{totalMRP.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-green-600">
                                    <span>Product Discount</span>
                                    <span>- ₹{totalDiscount.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery Fee</span>
                                    <span className="text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                                    <span>Total</span>
                                    <span>₹{totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                            <p className="text-sm text-green-600 mt-2">
                                You Saved ₹{totalDiscount.toLocaleString()}
                            </p>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 rounded-xl text-center font-semibold"
                            onClick={handleOrderClick}>
                            {currentUser ? "Order" : "SignIn & Order"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
