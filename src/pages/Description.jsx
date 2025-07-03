import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Links, useParams } from 'react-router-dom';
import { get_product_data } from '../redux/product/action';
import { handleCart } from '../redux/add-to-cart/action';

const Description = () => {
  const { categoryId, subcategoryId, productId } = useParams()
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddToCart = () => {
    const selectedProduct = product[0];
    dispatch(handleCart(selectedProduct, selectedProduct.id));
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(get_product_data({}));
    }
  }, [dispatch, products.length]);

  const product = products.filter(
    (product) => product.id === Number(productId));

  const filteredProducts = products.filter(
    (product) => product.categoryId === Number(categoryId) && product.subcategoryId === Number(subcategoryId));

  const offers = [
    {
      type: 'BANK OFFERS',
      title: 'Assured Cashback upto Rs.249',
      description: 'using Paytm UPI Lite, Minimum Assur...',
      icon: '💳'
    },
    {
      type: 'COUPONS',
      title: '10% Off on orders over Rs. 500, up to Rs. 200',
      description: '',
      icon: '🎫'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <img src={product[0].image[currentIndex]} alt={product[0].name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="flex space-x-2">
              {product[0].image.map((img, index) => (
                <img key={index} src={img}
                  className={`w-16 h-16 object-cover rounded border  ${index === currentIndex ? 'border-blue-500 scale-105' : 'border-gray-300'}`}
                  onClick={() => setCurrentIndex(index)} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">{product[0].brand}</div>
              <h1 className="text-2xl font-medium text-gray-900 leading-tight">
                {product[0].name}
              </h1>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <span className="text-sm text-gray-600">{product[0].reviews}</span>
              {/* <div className="flex space-x-2 ml-4">
                <button className="text-gray-400 hover:text-red-500">♡</button>
                <button className="text-gray-400 hover:text-blue-500">⤴</button>
              </div> */}
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-900">₹{product[0].price}</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">{product[0].discount}% Off</span>
              </div>
              <div className="text-sm text-gray-500">
                M.R.P: <span className="line-through">₹{product[0].originalPrice}</span> (incl. of all taxes)
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Offers (12)</h3>
              <div className="space-y-3">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">{offer.icon}</span>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-green-700 mb-1">{offer.type}</div>
                      <div className="text-sm text-gray-700">{offer.title}</div>
                      {offer.description && (
                        <div className="text-xs text-gray-500">{offer.description}</div>
                      )}
                    </div>
                    <button className="text-green-600">›</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium text-gray-900 mb-3">Deliver to</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">394210 - Surat</div>
                  <div className="text-sm text-green-600 flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>In Stock</span>
                    <span className="text-gray-500">- Delivery by 25th Jun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Description</h2>
          <div className="text-gray-700 leading-relaxed">
            <h4 className='text-center font-bold'>{product[0].name}</h4>
            <p>{product[0].description}</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Return Policy</h2>
          <p className="text-gray-700">
            This product is returnable within 7 days. For more details, please refer to the policy here.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((item) => (
              <div key={item} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="relative">
                  <img src={item.image[0]} alt="Similar product" className="w-full h-32 object-contain mb-3" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.name}
                </h3>
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-bold text-gray-900">₹{item.price}</span>
                    <span className="text-xs bg-green-100 text-green-700 px-1 py-0.5 rounded">{item.discount}% OFF</span>
                  </div>
                  <div className="text-xs text-gray-500 line-through">₹{item.originalPrice}</div>
                </div>
                <Link to={`/description/${categoryId}/${subcategoryId}/${item.id}`}>
                  <button className="w-full mt-3 border border-blue-600 text-blue-600 py-2 rounded font-medium hover:bg-blue-50 transition-colors">
                    View Product
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;