import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "How to order medicines online from Apollo Pharmacy?",
    "How to track my order?",
    "What payment methods are accepted?",
    "How to cancel an order?",
    "How to upload a prescription?",
    "Is doorstep delivery available?",
    "Can I return medicines?"
  ];

  const answers = [
    "You can order medicines by visiting the Apollo Pharmacy website or app, searching your medicine, adding it to the cart, and placing the order online.",
    "Go to 'My Orders' in your account to track your order status in real time.",
    "We accept UPI, credit/debit cards, net banking, and COD for most orders.",
    "You can cancel your order before it's shipped by visiting your order details.",
    "Log in and click 'Upload Prescription' from the top menu or during checkout.",
    "Yes, doorstep delivery is available in most urban and semi-urban areas.",
    "Medicines once sold cannot be returned unless there's a genuine issue."
  ];

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Frequently Asked Questions</h2>

      {questions.map((question, index) => (
        <div key={index} className="mb-3">
          <div
            onClick={() => handleToggle(index)}
            className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm"
            style={{ cursor: "pointer" }}
          >
            <span className="fw-semibold">{question}</span>
            <span
              className={`ms-3 transition-transform ${
                activeIndex === index ? "rotate-90" : ""
              }`}
            >
              <FaAngleRight />
            </span>
          </div>

          {activeIndex === index && (
            <div className="bg-white border rounded p-3 mt-2 text-justify">
              {answers[index]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
