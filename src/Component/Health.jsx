import { FaHospital } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const boxes = [
  { bg: "#062232" },
  { bg: "#310427" },
  { bg: "#382209" },
  { bg: "#2c0a08" },
  { bg: "#0b032fe8" },
];

const Health = () => {
  return (
    <div className="container mt-5 d-flex flex-wrap justify-content-center gap-3">
      {boxes.map((box, index) => (
        <div
          key={index}
          className="d-flex align-items-center justify-content-center text-light rounded-3"
          style={{
            width: "220px",
            height: "80px",
            backgroundColor: box.bg,
            gap: "15px",
            color: "#ccc",
          }}
        >
          <span style={{ fontSize: "35px" }}>
            <FaHospital />
          </span>
          <div>
            <h5 className="mb-1">Pharmacy near me</h5>
            <span style={{ color: "rgb(26, 230, 12)" }}>Find Store</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Health;
