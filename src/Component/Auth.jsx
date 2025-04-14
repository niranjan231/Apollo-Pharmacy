import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Auth = ({ handleClosePopup }) => {
    const [showPopup, setShowPopup] = useState(true);

    return (
        <>
            {showPopup && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center z-3">
                    <div className="bg-white p-4 rounded shadow-lg position-relative w-100" style={{ maxWidth: "425px", animation: "fadeIn 0.3s ease-in-out" }}>
                        {/* Close Button */}
                        <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={handleClosePopup} aria-label="Close"></button>

                        <div className="text-center">
                            {/* Top Image */}
                            <div className="mb-3">
                                <img
                                    src="https://images.apollo247.in/images/mobile_login_header.webp?tr=q-60,f-webp,w-450,dpr-2,c-at_max"
                                    alt="Login"
                                    className="img-fluid rounded"
                                />
                            </div>

                            {/* Message */}
                            <p className="text-success fw-semibold fs-6">Please enter your mobile number to login</p>

                            {/* Input + Icon */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <input
                                    type="text"
                                    className="form-control border-0 border-bottom border-dark rounded-0 me-2 fs-5"
                                    placeholder="+91"
                                    style={{ maxWidth: "300px" }}
                                />
                                <div className="bg-success rounded-circle d-flex justify-content-center align-items-center text-white" style={{ width: "50px", height: "50px", cursor: "pointer" }}>
                                    <FaArrowRightLong />
                                </div>
                            </div>

                            {/* Info Texts */}
                            <div className="mt-3 text-warning small">
                                <p>OTP will be sent to this number by SMS and WhatsApp</p>
                                <p>By signing up, I agree to the Privacy Policy, Terms and Conditions of Apollo Pharmacy.</p>
                            </div>

                            {/* Second Image */}
                            <div className="mt-3">
                                <img
                                    src="https://images.apollo247.in/images/free_delivery.webp?tr=q-60,f-webp,w-400,dpr-2,c-at_max"
                                    alt="Free Delivery"
                                    className="img-fluid rounded"
                                />
                            </div>

                            {/* Footer */}
                            <div className="bg-dark text-white mt-4 py-2 px-3 rounded text-center small">
                                EXCITING OFFERS FOR FIRST TIME USERS
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Auth;
