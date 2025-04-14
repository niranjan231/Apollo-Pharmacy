import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper"; // ✅ Correct Import
import "../App.css";

const MySwiper = () => {
    const items = [
        { id: 1, image: "https://images.apollo247.in/pub/media/magestore/bannerslider/images/s/h/shelcal_app_flat_20_1.jpg?tr=q-60,f-webp,w-400,dpr-2,c-at_max", text: "Item 1" },
        { id: 2, image: "https://images.apollo247.in/pub/media/magestore/bannerslider/images/a/v/aveeno_baby_app.png?tr=q-60,f-webp,w-400,dpr-2,c-at_max", text: "Item 2" },
        { id: 3, image: "https://images.apollo247.in/pub/media/magestore/bannerslider/images/e/v/evion_app_1.png?tr=q-60,f-webp,w-400,dpr-2,c-at_max", text: "Item 3" },
        { id: 4, image: "https://images.apollo247.in/pub/media/magestore/bannerslider/images/e/v/evion_app_1.png?tr=q-60,f-webp,w-400,dpr-2,c-at_max", text: "Item 4" },
        { id: 5, image: "https://images.apollo247.in/pub/media/magestore/bannerslider/images/d/e/depura_app.jpg?tr=q-60,f-webp,w-400,dpr-2,c-at_max", text: "Item 5" },
        { id: 6, image: "https://images.apollo247.in/pub/media/magestore/bannerslider/images/m/a/mamypoko_app2.jpg?tr=q-60,f-webp,w-400,dpr-2,c-at_max", text: "Item 6" },
        { id: 7, image: "https://images.apollo247.in/pub/media/magestore/bannerslider/images/h/o/horlicks_womens_plus_mar25.jpg?tr=q-60,f-webp,w-400,dpr-2,c-at_max", text: "Item 7" },
        { id: 8, image: "https://images.apollo247.in/pub/media/magestore/bannerslider/images/h/o/horlicks_womens_plus_mar25.jpg?tr=q-60,f-webp,w-400,dpr-2,c-at_max", text: "Item 8" },
    ];

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]} // ✅ Ensure the module is included
        >
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="swiper-item">
                        <img src={item.image} alt={item.text} />
                        {/* <p>{item.text}</p> */}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MySwiper;
