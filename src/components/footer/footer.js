import "./style.css";

import facebook from "./../../img/socials/facebook.svg";
import twitter from "./../../img/socials/twitter.svg";
import instagram from "./../../img/socials/instagram.svg";

import ArrowRight from "../../img/icons/arrow-right-form.svg";

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__row">

                <div className="footer__copyright">
                    <div className="footer__title">
                         <h1 className="footer__title">Mukhammad Travel</h1>
                         <p className="footer__text">We always make our customers happy by providing as many choises as possible</p>
                         <ul className="footer__socials">
                            <li className="footer__socials-item">
                                <a href="" className="footer__socials-link">
                                    <img src={facebook} alt="Facebook"/>
                                </a>
                            </li>

                            <li className="footer__socials-item">
                                <a href="https://www.instagram.com/nurassylazamat/" className="footer__socials-link">
                                    <img src={instagram} alt="Instagram"/>
                                </a>
                            </li>

                            <li className="footer__socials-item">
                                <a href="#!" className="footer__socials-link">
                                    <img src={twitter} alt="Twitter"/>
                                </a>
                            </li>
                         </ul>
                    </div>
                </div>
                
                <div className="footer__nav-wrapper">

                    <div className="footer__nav">
                        <h3 className="footer__nav-title">About</h3>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <a href="About Us.html" className="footer__nav-link">About Us</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Features</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">News</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Menu</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__nav">
                        <h3 className="footer__nav-title">Company</h3>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Why Mukhammad Travel</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Partner With Us</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">FAQ</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__nav">
                        <h3 className="footer__nav-title">Support</h3>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <a href="https://wa.me/+77776669591" className="footer__nav-link">Account</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="https://wa.me/+77776669591" className="footer__nav-link">Support Center</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="https://wa.me/+77776669591" className="footer__nav-link">Feedback</a>
                            </li>

                            <li className="footer__nav-item">
                                <a href="https://wa.me/+77776669591" className="footer__nav-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__subscribe">
                    <div className="footer__subscribe-title">Subscribe on our destination review newsletters</div>

                    <form action="" className="subscribe">
                        <div className="subscribe__input-wrapper">
                            <input type="email" className="subscribe__input" placeholder="azamatnurassyl@gmail.com"/>
                            <label htmlFor="" className="subscribe__label">Your Email</label>
                        </div>
                        <div className="subscribe__btn-wparrer">
                            <button className="button button__subscribe">
                               <a href="https://mail.google.com/mail/u/0/?hl=en#inbox?compose=new">
                                <img src={ArrowRight} alt=""/>
                               </a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;