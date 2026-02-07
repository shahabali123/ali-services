import React from 'react';

function WhyChooseUs() {
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="display-5 fw-bold mb-4">Why Trust Naxgat Visa Services?</h2>
                        <p className="lead text-muted mb-4">We don't just monitor; we strategize. Our automated systems combined with expert oversight ensure you get the earliest possible date.</p>
                        
                        <div className="d-flex mb-3">
                            <div className="me-3">
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                    <i className="fas fa-bolt"></i>
                                </div>
                            </div>
                            <div>
                                <h5 className="fw-bold">Unmatched Speed</h5>
                                <p className="text-muted">Our algorithms scan 24/7, catching slots milliseconds after they are released.</p>
                            </div>
                        </div>
                        
                        <div className="d-flex mb-3">
                            <div className="me-3">
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                            </div>
                            <div>
                                <h5 className="fw-bold">Secure & Private</h5>
                                <p className="text-muted">Your passport and DS-160 details are encrypted. We prioritize your data privacy.</p>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="me-3">
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                    <i className="fas fa-users"></i>
                                </div>
                            </div>
                            <div>
                                <h5 className="fw-bold">Expert Support</h5>
                                <p className="text-muted">Beyond rescheduling, we offer guidance on documentation and interview prep.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6">
                                <div className="p-4 bg-white shadow-sm rounded text-center h-100 border-bottom border-primary border-4">
                                    <h3 className="display-4 fw-bold text-primary">1500+</h3>
                                    <p className="text-muted mb-0">Appointments Rescheduled</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-4 bg-white shadow-sm rounded text-center h-100 border-bottom border-primary border-4">
                                    <h3 className="display-4 fw-bold text-primary">98%</h3>
                                    <p className="text-muted mb-0">Success Rate</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-4 bg-white shadow-sm rounded text-center h-100 border-bottom border-primary border-4">
                                    <h3 className="display-4 fw-bold text-primary">24/7</h3>
                                    <p className="text-muted mb-0">System Monitoring</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-4 bg-white shadow-sm rounded text-center h-100 border-bottom border-primary border-4">
                                    <h3 className="display-4 fw-bold text-primary">4.9</h3>
                                    <p className="text-muted mb-0">Client Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;