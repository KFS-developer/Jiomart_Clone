import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = ({ categories }) => {
    const { products } = useSelector((state) => state.products)
    const { categoryId, subcategoryId } = useParams();
    const navigate = useNavigate();

    const [activeCategoryId, setActiveCategoryId] = useState(null);

    const toggleCategory = (id) => {
        setActiveCategoryId((el) => (el === id ? null : id));
    };

    const filteredProducts = products.filter(
        (el) => el.categoryId === Number(categoryId) && el.subcategoryId === Number(subcategoryId));
    const uniqueBrands = [...new Set(filteredProducts.map((el) => el.brand))];

    return (
        <div>
            <div className="w-72 border rounded-[30px] p-4 shadow-sm ">
                <h2 className="text-lg font-bold mb-4">Category</h2>

                <div className="max-h-[350px] overflow-y-auto scrollbar-none">
                    {categories.map((el) => (
                        <div key={el.id} className="mb-2">
                            <div onClick={() => toggleCategory(el.id)}
                                className="cursor-pointer flex items-center justify-between font-medium text-gray-800 hover:text-blue-600" >
                                <span>{el.name}</span>
                                <span>{activeCategoryId === el.id ? "▾" : "▸"}</span>
                            </div>

                            {activeCategoryId === el.id && (
                                <ul className="pl-4 mt-2 text-sm text-gray-700 space-y-1">
                                    {el.items.map((item) => (
                                        <li key={item.id} className="hover:underline cursor-pointer" onClick={() => navigate(`/product/${el.id}/${item.id}`)}>
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <hr className="my-2 border-gray-200" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-72 mt-3 border rounded-[30px] p-4 shadow-sm ">
                <h2 className="text-lg font-bold mb-4">Filters</h2>

                <div className="max-h-[350px] overflow-y-auto scrollbar-none">
                    {uniqueBrands.map((brand, index) => (
                        <div key={index} className="mb-2">
                            <input type="checkbox" checked={true} id={`brand-${index}`} />
                            <label htmlFor={`brand-${index}`} className="ml-1">{brand}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;