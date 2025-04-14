import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Brand = () => {
  const brandImages = [
    "https://images.apollo247.in/images/category/dhootapapeshwar_web.png?tr=q-80,f-webp,w-150,dpr-2,c-at_max",
    "https://images.apollo247.in/images/category/avp_web.png?tr=q-80,f-webp,w-150,dpr-2,c-at_max",
    "https://images.apollo247.in/images/category/himalaya_web.png?tr=q-80,f-webp,w-150,dpr-2,c-at_max",
    "https://images.apollo247.in/images/category/kottakkal_web.png?tr=q-80,f-webp,w-150,dpr-2,c-at_max",
    "https://images.apollo247.in/images/category/himalaya_web.png?tr=q-80,f-webp,w-150,dpr-2,c-at_max",
    "https://images.apollo247.in/images/category/kottakkal_web.png?tr=q-80,f-webp,w-150,dpr-2,c-at_max",
  ];

  return (
    <div className="container my-4">
      <h1 className="text-dark fw-bold mb-4">Brand</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {brandImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`brand-${index}`}
            className="rounded-4 shadow-sm"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Brand;
