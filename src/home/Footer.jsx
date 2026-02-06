import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold mb-3 text-primary">Naxgat Visa Services</h5>
                        <p className="small text-white-50">
                            We specialize in US Visa appointment rescheduling for Islamabad and Karachi consulates. Our automated system ensures you get the earliest possible dates.
                        </p>
                        <div className="mt-4">
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle me-2"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold mb-3">Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none hover-white">Home</Link></li>
                            <li className="mb-2"><Link to="/blogs" className="text-white-50 text-decoration-none hover-white">Insights</Link></li>
                            <li className="mb-2"><a href="/#services" className="text-white-50 text-decoration-none hover-white">Pricing</a></li>
                            <li className="mb-2"><a href="/#faqs" className="text-white-50 text-decoration-none hover-white">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold mb-3">Legal</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Terms of Service</a></li>
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Disclaimer</a></li>
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-white">Refund Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                        <ul className="list-unstyled small text-white-50">
                            <li className="mb-3 d-flex"><i className="fas fa-map-marker-alt mt-1 me-3 text-primary"></i> Islamabad, Pakistan</li>
                            <li className="mb-3 d-flex"><i className="fas fa-envelope mt-1 me-3 text-primary"></i> contact@naxgatvisaservices.com</li>
                            <li className="mb-3 d-flex"><i className="fas fa-phone mt-1 me-3 text-primary"></i> +92 342 0475187</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 border-secondary" />

                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p className="small text-white-50 mb-0">&copy; {new Date().getFullYear()} Naxgat Visa Services. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="small text-white-50 mb-0">Designed for Excellence</p>
                    </div>
                </div>
            </div>
            <style>{`
                .hover-white:hover { color: #fff !important; }
            `}</style>
        </footer>
    );
}

export default Footer;