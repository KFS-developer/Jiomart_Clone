import { useEffect } from "react";
import BannerSlider from "./BannerSlider";
import { useDispatch, useSelector } from "react-redux";
import { getdatafromserver } from "../redux/categories/action";
import { Link } from "react-router-dom";

const Home = () => {
    const { categories, loading, error } = useSelector((state) => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getdatafromserver());
    }, []);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div>
            <BannerSlider />

            <section className="max-w-7xl mx-auto bg-white py-10 px-4 md:px-10">
                {categories.map((el) => (
                    <div key={el.id} className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">{el.name}</h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {el.items.map((item) => (
                                <Link to={`/product/${el.id}/${item.id}`} key={item.id} className="flex flex-col items-center">
                                    <div className=" rounded-xl p-2 flex justify-center items-center">
                                        <img src={item.image} alt={item.title} className="h-full object-contain" />
                                    </div>

                                    <p className="text-center font-semibold text-sm">{item.title}</p>
                                </Link>
                            ))}
                        </div>

                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
