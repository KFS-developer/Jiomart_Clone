import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchProduct = () => {
    const searchTerm = useSelector(state => state.search.searchTerm);
    const { products } = useSelector(state => state.products);

    const trimmedSearch = searchTerm.trim().toLowerCase();

    const filteredProducts = trimmedSearch
        ? products?.filter(product =>
            product.name.toLowerCase().includes(trimmedSearch)
        )
        : [];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Search Results for "{searchTerm}"</h2>

            {filteredProducts?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                                    <Link to={`/description/${items.categoryId}/${items.subcategoryId}/${items.id}`} className='w-full'>
                                        <button className="flex items-center justify-center w-full border text-blue-600 py-2 px-4 rounded-[50px] font-medium hover:bg-blue-50 transition-colors text-sm">
                                            <span>View Product</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default SearchProduct;


