import "../App.css";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

// Using direct URLs instead of local images
const googlePlay = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStore = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h4>About Apollo Pharmacy</h4>
                    <ul>
                        <li>About Us</li>
                        <li>FAQs</li>
                        <li>Find a Pharmacy</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Blogs</li>
                        <li>Health Queries</li>
                        <li>Know Your Health Credits</li>
                        <li>About One Apollo Program</li>
                        <li>Corporate</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Services</h4>
                    <ul>
                        <li>Online Doctor Consultation</li>
                        <li>Apollo Pro Health Program</li>
                        <li>All Doctors List</li>
                        <li>Consult Physicians</li>
                        <li>Consult Dermatologists</li>
                        <li>Consult Paediatricians</li>
                        <li>Consult Gynaecologists</li>
                        <li>Consult Gastroenterologists</li>
                        <li>Consult Cardiologists</li>
                        <li>Consult Dietitians</li>
                        <li>Consult ENT Specialists</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Book Lab Tests at Home</h4>
                    <ul>
                        <li>RT PCR Test At Home</li>
                        <li>Book Lab Tests at Home</li>
                        <li>Renal Profile (KFT, RFT Test)</li>
                        <li>Hemogram Test</li>
                        <li>Lipid Profile Test</li>
                        <li>Thyroid Profile Test (T3 T4 Tsh Test)</li>
                        <li>D Dimer Test</li>
                        <li>Urine Culture Test</li>
                        <li>Complete Blood Count (CBC Test)</li>
                        <li>Widal Test</li>
                        <li>Liver Function Test (LFT Test)</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Product Categories</h4>
                    <ul>
                        <li>View All Categories</li>
                        <li>View All Brands</li>
                        <li>View All Salts</li>
                        <li>View All Medicine</li>
                        <li>View All OTC</li>
                        <li>View All Manufacturers</li>
                        <li>Health Devices</li>
                        <li>Personal Care</li>
                        <li>Baby Care</li>
                        <li>Nutrition</li>
                        <li>Dolo 650</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Top Videos</h4>
                    <ul>
                        <li>Pregnancy Week 1</li>
                        <li>Pregnancy Week 5</li>
                        <li>Pregnancy Week 6</li>
                        <li>Pregnancy Week 31</li>
                        <li>Pregnancy Week 32</li>
                        <li>Pregnancy Week 34</li>
                        <li>Pregnancy Week 35</li>
                        <li>Pregnancy Month 1</li>
                        <li>Pregnancy Month 2</li>
                        <li>Pregnancy Month 3</li>
                        <li>Pregnancy Month 4</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Most Searched</h4>
                    <ul>
                        <li>Fertility</li>
                        <li>Ovulation</li>
                        <li>First Trimester</li>
                        <li>Second Trimester</li>
                        <li>Third Trimester</li>
                        <li>Labour</li>
                        <li>Breastfeeding & Formula</li>
                        <li>Preconception</li>
                        <li>Pregnancy</li>
                        <li>Postpartum</li>
                        <li>Infant</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-logo">
                    <img
                        src="https://images.apollo247.in/images/pharmacy_logo.svg?tr=q-80,w-100,dpr-2,c-at_max"
                        alt="Apollo Logo"
                        height={50}
                    />
                </div>

                <div className="footer-app-links">
                    <h4>Get Apollo App on</h4>
                    <div className="app-badges">
                        <img src={googlePlay} alt="Google Play" height={40} />
                        <img src={appStore} alt="App Store" height={40} />
                    </div>
                </div>

                <div className="footer-social">
                    <h4>Find us on</h4>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
