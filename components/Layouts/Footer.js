import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/logo.png" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <p>We are a one stop solution marketing company for your one stop solutions.</p>

                                    <ul className="social-links">
                                        <li>
                                            <a href="https://t.me/joinchat/QuuUtxm_Ao0FuB7RK2bkzA" target="_blank">
                                                <i className="icofont-telegram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/collabadda" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/collabadda/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/collabadda/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li> 
                                           <li>
                                            <a href="http://Wa.me/+918177030549" target="_blank">
                                                <i className="icofont-whatsapp"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Explore</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio">
                                                <a>Portfolio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick Links</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>Pricing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>Faq</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Get in Touch</h3>

                                    <ul className="get-in-touch">
                                        <li><i className="icofont-home"></i> 1st Floor, Landmark, Sector 67, Gurugram, Haryana</li>
                                        <li>
                                            <i className="icofont-live-support"></i> 
                                            <a href="tel:+918382953422">+918-3829-53422</a>
                                        </li>
                                        <li>
                                            <i className="icofont-envelope"></i> 
                                            <a href="mailto:abhinav@collabadda.org">abhinav@collabadda.org</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>Copyright &copy; {currentYear} Collabadda. All Rights Reserved By <a href="#" target="_blank">Collabadda</a></p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
