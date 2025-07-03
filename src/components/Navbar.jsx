import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import logo from '../assets/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_product_data } from "../redux/product/action";
import { setSearchTerm } from "../redux/search/action";

const Navbar = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.auth);
  const searchTerm = useSelector(state => state.search.searchTerm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate('/search');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jiomartUser");
    dispatch({ type: "LOGOUT_USER" });
  };

  return (
    <div className="w-full">
      <div className="bg-[#0079ae] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between space-x-4">

          <div className="w-full sm:w-auto flex justify-center sm:justify-start items-center mb-2">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-grow max-w-2xl mx-4 w-auto items-center justify-between bg-[#08475e] rounded-full px-4 py-2 lg:w-[500px]">
              <FaSearch className="text-white mr-2 cursor-pointer" onClick={handleSearch} />
              <input
                type="text" placeholder="Search In JioMart" value={searchTerm} onChange={handleChange}
                onKeyDown={handleKeyDown} className="bg-transparent text-white focus:outline-none w-full"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/addtocart">
                <FaShoppingCart className="text-white text-2xl" />
              </Link>

              {currentUser ? (
                <div className="flex items-center space-x-4 text-white">
                  <span className="font-medium">Hi, {currentUser.name}</span>
                  <button onClick={handleLogout} className="bg-white text-[#0079ae] px-3 py-1 rounded">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <div className="flex items-center space-x-2 w-[100px]">
                    <FaUser className="text-white text-2xl" />
                    <span className="font-semibold text-lg">Sign In</span>
                  </div>
                </Link>
              )}

            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#08475e] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center flex-wrap">
          <IoLocationSharp className="mr-1 text-base" />
          <span className="font-medium">
            Scheduled delivery to: <span className="font-semibold">Surat 394210</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;