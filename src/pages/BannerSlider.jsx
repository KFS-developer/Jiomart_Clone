import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import banner1 from "../assets/Banner/1749012010_632x160.jpg";
import banner2 from "../assets/Banner/1747059350_Slim-banner-Summer---8.jpg";
import banner3 from "../assets/Banner/1747227420_Slim-banner-Summer---3.jpg";
import banner4 from "../assets/Banner/1747059323_Slim-banner-Summer---7.jpg";
import banner5 from "../assets/Banner/1746794702_Slim-banner-Summer---2.jpg";
import banner6 from "../assets/Banner/1746769928_Paytm.jpg";
import banner7 from "../assets/Banner/1748719143_Mobikwik-Wallet-Offer--632-x-160.jpg";
import banner8 from "../assets/Banner/1735538404_632x160__copy_2.jpg";
import couponBanner from "../assets/Banner/main-banner2.jpg";

const BannerSlider = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 space-y-6 mt-4">

            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                loop={true}
                modules={[Autoplay]}
                className="rounded-xl overflow-hidden"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {[banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8].map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`banner-${index + 1}`} className="w-full object-cover rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="rounded-xl overflow-hidden">
                <img src={couponBanner} alt="Coupon Mania" className="w-full object-cover" />
            </div>
        </div>
    );
};

export default BannerSlider;
