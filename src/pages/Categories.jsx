import React from 'react'

const Categories = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex gap-6">

                <aside className="w-1/4 hidden md:block">
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-xl font-semibold mb-4">Category</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className="font-medium">Kitchenware</li>
                            <ul className="ml-4 text-sm">
                                <li>Cookware</li>
                                <li className="font-semibold text-blue-600">Cookers & Steamers</li>
                                <li>Gas Stove</li>
                                <li>Pots & Pans</li>
                            </ul>
                        </ul>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Filters</h3>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>Include Out of Stock</span>
                            </label>
                        </div>
                    </div>
                </aside>


                <div className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Pressure Cookers</h1>
                        <select className="border p-2 rounded-md text-sm">
                            <option>Sort by: Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="bg-white rounded-lg p-4 border shadow hover:shadow-lg transition">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Product"
                                    className="w-full h-40 object-contain mb-4"
                                />
                                <h3 className="text-md font-semibold">De Prism Aluminium Cooker</h3>
                                <p className="text-green-600 font-bold">₹479.00</p>
                                <p className="text-gray-500 line-through text-sm">₹1,499.00</p>
                                <p className="text-sm text-green-600">68% OFF</p>
                                <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
                                    Add
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Categories