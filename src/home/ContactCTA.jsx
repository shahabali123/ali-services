import React from 'react';

function ContactCTA({ onPlanSelect }) {
    return (
        <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)' }}>
            {/* Decorative circles */}
            <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-white opacity-10" style={{ width: '300px', height: '300px' }}></div>
            <div className="position-absolute bottom-0 end-0 translate-middle rounded-circle bg-white opacity-10" style={{ width: '200px', height: '200px' }}></div>

            <div className="container position-relative z-1 py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center text-white">
                        <div className="mb-4">
                            <i className="fas fa-paper-plane fa-3x mb-3 text-white-50"></i>
                        </div>
                        <h2 className="display-4 fw-bold mb-3">Ready to Fast-Track Your Visa?</h2>
                        <p className="lead mb-5 opacity-75 fs-4">
                            Don't let long wait times delay your plans. Join hundreds of happy travelers who secured their appointments months in advance.
                        </p>
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <button onClick={() => onPlanSelect && onPlanSelect('Premium Rescheduling')} className="btn btn-light rounded-pill fw-bold px-4 py-3 px-md-5 text-primary shadow-lg hover-lift">
                                Reschedule My Appointment <i className="fas fa-arrow-right ms-2"></i>
                            </button>
                            <a href="https://wa.me/923420475187" target="_blank" className="btn btn-outline-light rounded-pill fw-bold px-4 py-3 px-md-5 hover-lift">
                                Chat on WhatsApp <i className="fab fa-whatsapp ms-2"></i>
                            </a>
                        </div>
                        <p className="small mt-4 opacity-50">
                            <i className="fas fa-shield-alt me-1"></i> 100% Secure & Confidential
                        </p>
                    </div>
                </div>
            </div>
            <style>{`
                .hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; }
                .hover-lift:hover { transform: translateY(-3px); box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; }
                .opacity-10 { opacity: 0.1; }
            `}</style>
        </section>
    );
}

export default ContactCTA;