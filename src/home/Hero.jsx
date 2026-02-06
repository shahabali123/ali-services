import React from 'react';
import { Link } from 'react-router-dom';

function Hero({ onPlanSelect }) {
    return (
        <div className="hero-section position-relative text-white overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
                backgroundImage: `url('/media/images/hero.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1
            }}></div>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
                background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%)',
                zIndex: -1 
            }}></div>

            <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '85vh' }}>
                
                {/* Animated Badge */}
                <div className="animate-fade-down badge bg-white text-primary px-3 py-2 rounded-pill mb-4 shadow-sm fw-bold text-uppercase tracking-wider">
                    <i className="fas fa-bolt me-2"></i> Fast-Track Your Visa
                </div>

                {/* Main Heading */}
                <h1 className="display-3 fw-bolder mb-4 animate-fade-up text-shadow">
                    Skip the <span className="text-primary">2-Year Wait</span> <br/> for Your US Visa
                </h1>

                {/* Subheading */}
                <p className="lead fs-4 mb-5 col-lg-8 text-white-50 animate-fade-up delay-100">
                    Stop refreshing the portal. Our automated system finds and books earlier B1/B2 visa appointment slots in Islamabad & Karachi for you.
                </p>

                {/* CTA Buttons */}
                <div className="d-flex flex-column flex-md-row gap-3 animate-fade-up delay-200 w-100 justify-content-center">
                    <button 
                        type="button" 
                        className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hover-lift"
                        onClick={() => onPlanSelect('Premium Rescheduling')}
                    >
                        Get an Earlier Date <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                    
                    <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold hover-lift backdrop-blur">
                        Contact Us
                    </Link>

                    <Link to="/blogs" className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold text-primary hover-lift">
                        Read Articles
                    </Link>
                </div>

                {/* Social Proof */}
                <p className="mt-5 small text-white-50 animate-fade-up delay-300">
                    <i className="fas fa-check-circle text-success me-2"></i> Join 1500+ successful applicants
                </p>
            </div>

            {/* Custom Styles for Animations */}
            <style>{`
                .text-shadow { text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
                .tracking-wider { letter-spacing: 0.1em; }
                .backdrop-blur { backdrop-filter: blur(5px); }
                
                .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

                .animate-fade-down { animation: fadeDown 0.8s ease-out forwards; opacity: 0; transform: translateY(-20px); }
                .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }

                @keyframes fadeDown {
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeUp {
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

export default Hero;