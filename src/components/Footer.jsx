const Footer = () => {
    return (
        <footer className="bg-gray-100 text-md text-gray-800 border-t mt-8">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-6">

                <div className="text-left">
                    <h4 className="font-bold mb-2">All Categories</h4>
                    <ul className="space-y-1">
                        <li>Grocery</li>
                        <li>Electronics</li>
                        <li>Fashion</li>
                        <li>Home & Lifestyle</li>
                        <li>Premium Fruits</li>
                        <li>Books</li>
                        <li>Furniture</li>
                    </ul>
                </div>

                <div className="text-left">
                    <h4 className="font-bold mb-2">Popular Categories</h4>
                    <ul className="space-y-1">
                        <li>Biscuits, Drinks & Packaged Foods</li>
                        <li>Fruits & Vegetables</li>
                        <li>Cooking Essentials</li>
                        <li>Dairy & Bakery</li>
                        <li>Personal Care</li>
                        <li>Beauty</li>
                        <li>Home</li>
                        <li>Mom & Baby Care</li>
                        <li>School, Office & Stationery</li>
                    </ul>
                </div>

                <div className="text-left">
                    <h4 className="font-bold mb-2">Customer Account</h4>
                    <ul className="space-y-1">
                        <li>My Account</li>
                        <li>My Orders</li>
                        <li>Wishlist</li>
                        <li>Delivery Addresses</li>
                        <li>JioMart Wallet</li>
                    </ul>
                </div>

                <div className="text-left">
                    <h4 className="font-bold mb-2">Help & Support</h4>
                    <ul className="space-y-1">
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>E-waste Policy</li>
                        <li>Cancellation & Return Policy</li>
                        <li>Shipping & Delivery Policy</li>
                        <li>AC Installation by resQ</li>
                    </ul>
                </div>

                <div className="text-left">
                    <h4 className="font-bold mb-2 text-xl">Contact Us</h4>
                    <p>
                        WhatsApp us: <span className="text-blue-600">70003 70003</span>
                    </p>
                    <p>
                        Call us: <span className="text-blue-600">1800 890 1222</span>
                    </p>
                    <p>8:00 AM to 8:00 PM, 365 days</p>
                    <p className="mt-2 text-xs text-gray-600">
                        Should you encounter any bugs, glitches, lack of functionality,
                        delayed deliveries, billing errors or other problems on the website.
                    </p>

                    <h4 className="font-bold mt-4 mb-2 text-xl">Download the app</h4>
                    <div className="flex gap-2">
                        <a href="#">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                className="h-10"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="App Store"
                                className="h-10"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-xs text-gray-500 py-4 border-t">
                <div className="max-w-7xl mx-auto flex justify-between">
                    <p>© 2025 All rights reserved. Reliance Retail Ltd.</p>
                    <p>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;