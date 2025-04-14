import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper"; // ✅ Correct Import
import "../App.css";
import { getCard1Data } from "../Service.jsx/Card1Api";

const Card1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCard1Data()
            .then(res => {
                console.log("Fetched Data:", res.data);
                setData(res.data);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <Swiper style={{ marginTop: "20px" }}
            spaceBetween={20}
            slidesPerView={6}
            loop={true}
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}> {/* ✅ Wrap each item in SwiperSlide */}
                    <div className="card1-continar">
                        <img src={item.image}></img>
                        <span>Apollo Pharmacy Charcoal Slim Soft Toothbrush Combo</span>
                        <div className="card1-price"><h6>RS:{item.price}</h6><strike>MRP:{item.count}</strike><spam>50%</spam></div>
                        <button>Add to cart</button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Card1;
