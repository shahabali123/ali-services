import React from 'react';
import { Link } from 'react-router-dom';

function Hero({ onPlanSelect }) {
    return (
        <section className="hero-section bg-light py-5 py-lg-0">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: '85vh' }}>
                    {/* Text Content Column */}
                    <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                        <div className="animate-fade-down badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-4 fw-bold text-uppercase tracking-wider">
                            <i className="fas fa-bolt me-2"></i> Fast-Track Your Visa
                        </div>

                        <h1 className="display-3 fw-bolder mb-4 animate-fade-up">
                            Skip the <span className="text-primary">2-Year Wait</span> for Your US Visa
                        </h1>

                        <p className="lead fs-4 mb-5 text-muted animate-fade-up delay-100">
                            Stop refreshing the portal. Our automated system finds and books earlier B1/B2 visa appointment slots in Pakistan, UAE & Saudi Arabia for you.
                        </p>

                        <div className="d-flex flex-column flex-sm-row gap-3 animate-fade-up delay-200 justify-content-center justify-content-lg-start">
                            <button 
                                type="button" 
                                className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hover-lift"
                                onClick={() => onPlanSelect('Premium Rescheduling')}
                            >
                                Get an Earlier Date <i className="fas fa-arrow-right ms-2"></i>
                            </button>
                            
                            <Link to="/contact" className="btn btn-outline-secondary btn-lg px-5 py-3 rounded-pill fw-bold hover-lift">
                                Contact Us
                            </Link>
                        </div>

                        <p className="mt-5 small text-muted animate-fade-up delay-300">
                            <i className="fas fa-check-circle text-success me-2"></i> Join 1500+ successful applicants
                        </p>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="hero-image-container animate-fade-in delay-200">
                            <img 
                                src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                                alt="Statue of Liberty and US Flag" 
                                className="img-fluid rounded-3 shadow-lg hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles for Animations */}
            <style>{`
                .hero-section {
                    overflow: hidden;
                }
                .tracking-wider { letter-spacing: 0.08em; }
                
                .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

                .animate-fade-in { animation: fadeIn 1s ease-out forwards; opacity: 0; }
                .animate-fade-down { animation: fadeDown 0.8s ease-out forwards; opacity: 0; transform: translateY(-20px); }
                .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }

                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes fadeDown {
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeUp {
                    to { opacity: 1; transform: translateY(0); }
                }
                .hero-image {
                    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
                }
            `}</style>
        </section>
    );
}

export default Hero;