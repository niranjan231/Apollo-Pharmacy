import { IoLocationOutline, IoSettingsOutline, IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Auth from "./Auth";

const Nabvar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleAuth = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return (
        <>
            <div>
                {/* Main Navbar */}
                <nav className="navbar navbar-expand-lg bg-white shadow-sm border-bottom py-3 px-4">
                    <div className="d-flex align-items-center gap-3">
                        <img src="https://images.apollo247.in/images/pharmacy_logo.svg?tr=q-80,w-100,dpr-2,c-at_max" alt="Nav-logo" width="56" />
                        <div className="d-flex align-items-center gap-2 text-success fw-semibold">
                            <IoLocationOutline size={24} />
                            <div className="d-flex flex-column">
                                <label htmlFor="cars" className="form-label mb-1">Choose a car:</label>
                                <select id="cars" className="form-select form-select-sm">
                                    <option>Volvo</option>
                                    <option>Saab</option>
                                    <option>Mercedes</option>
                                    <option>Audi</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Settings + Auth Section */}
                    <div className="d-flex align-items-center gap-4 ms-auto">
                        <IoSettingsOutline size={22} className="text-success" />

                        <button type="button" className="btn btn-outline-light position-relative">
                            <IoCartOutline size={22} className="text-success" />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>

                        <div onClick={handleAuth} className="btn border border-dark rounded-2 d-flex align-items-center gap-1 text-success fw-bold">
                            <span>Auth</span>
                            <FaRegUserCircle size={20} />
                        </div>
                    </div>
                </nav>

                {/* Submenu 1 */}
                <div className="d-flex justify-content-center gap-4 pt-2 fw-semibold text-secondary flex-wrap">
                    <span className="border-bottom border-transparent hover-border-success cursor-pointer">Buy Medicines</span>
                    <span className="border-bottom border-transparent hover-border-success cursor-pointer">DoctorsFind</span>
                    <span className="border-bottom border-transparent hover-border-success cursor-pointer">Find Doctors</span>
                    <span className="border-bottom border-transparent hover-border-success cursor-pointer">Lab Tests</span>
                    <span className="border-bottom border-transparent hover-border-success cursor-pointer">Personal Care</span>
                    <span className="border-bottom border-transparent hover-border-success cursor-pointer">Diabetes Reversal</span>
                    <span className="border-bottom border-transparent hover-border-success cursor-pointer">Health Insurance</span>
                </div>

                {/* Green Bar */}
                <div className="d-flex justify-content-around bg-success text-white fw-bold py-2 mt-2 text-uppercase small flex-wrap">
                    <span>Buy Medicines</span>
                    <span>DoctorsFind</span>
                    <span>Find Doctors</span>
                    <span>Lab Tests</span>
                    <span>Personal Care</span>
                    <span>Diabetes Reversal</span>
                    <span>Health Insurance</span>
                </div>
            </div>

            {showPopup && <Auth handleClosePopup={handleClosePopup} />}
        </>
    );
};

export default Nabvar;
