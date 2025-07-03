import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getdatafromserver } from '../redux/categories/action';
import Sidebar from './Sidebar';
import { get_product_data } from '../redux/product/action';
import { Link, useParams } from 'react-router-dom';
import { GiCrossMark } from "react-icons/gi";

const Products = () => {
    const { products, loading, error } = useSelector((state) => state.products)
    const { categories } = useSelector((state) => state.categories)
    const dispatch = useDispatch()

    const { categoryId, subcategoryId } = useParams();
    const [price, setPrice] = useState("");


    const filteredProducts = products.filter(
        (product) => product.categoryId === Number(categoryId) && product.subcategoryId === Number(subcategoryId));

    useEffect(() => {
        dispatch(getdatafromserver());
        dispatch(get_product_data({ price }));
    }, [price, dispatch]);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1 space-y-4">
                        <Sidebar categories={categories} />
                    </div>

                    <div className="lg:col-span-3">
                        <div className="flex items-center justify-end mb-6">
                            <div className="flex items-center border border-black rounded-[50px] px-4 py-2">
                                <span className="text-sm mr-2">Sort by:</span>
                                <select className="border-none bg-transparent font-medium text-sm focus:outline-none" onChange={(e) => setPrice(e.target.value)}>
                                    <option>All Products</option>
                                    <option value="low-to-high">Price: Low to High</option>
                                    <option value="high-to-low">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-10">
                                <div className='flex justify-center text-[50px]' >
                                    <GiCrossMark />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    No products found in this category
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Try browsing another subcategory or check back later!
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((items) => (
                                    <div key={items.id} className="bg-white border rounded-[20px]">
                                        <div className="relative p-4">

                                            <img src={items.image[0]} alt={items.name} className="w-full h-48 object-contain mb-3" />

                                            <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">
                                                {items.name}
                                            </h3>

                                            <div className="space-y-2">
                                                <div className="flex items-baseline space-x-2">
                                                    <span className="text-lg font-bold text-gray-900">₹{items.price.toLocaleString()}</span>
                                                    <span className="text-sm text-gray-500 line-through"> ₹{items.originalPrice.toLocaleString()} </span>
                                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                                                        {items.discount}% OFF
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <Link to={`/description/${categoryId}/${subcategoryId}/${items.id}`} className='w-full'>
                                                    <button className="flex items-center justify-center w-full border text-blue-600 py-2 px-4 rounded-[50px] font-medium hover:bg-blue-50 transition-colors text-sm">
                                                        <span>View Product</span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;

