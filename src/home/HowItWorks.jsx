import React from 'react';

function HowItWorks() {
    const steps = [
        {
            icon: "fas fa-file-signature",
            title: "1. Submit Details",
            description: "Fill out our secure form with your current appointment info and preferred dates."
        },
        {
            icon: "fas fa-satellite-dish",
            title: "2. We Monitor",
            description: "Our automated system scans the consulate portal continuously for cancellations."
        },
        {
            icon: "fas fa-calendar-check",
            title: "3. Slot Locked",
            description: "As soon as a slot matches your criteria, we instantly secure it for you."
        },
        {
            icon: "fas fa-plane-departure",
            title: "4. You Fly",
            description: "Receive your confirmation email and get ready for your earlier interview."
        }
    ];

    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="text-center mb-5" id='how-it-works'>
                    <h2 className="display-5 fw-bold">How It Works</h2>
                    <p className="lead text-muted">Rescheduling your US Visa appointment in 4 simple steps.</p>
                    <div className="mx-auto bg-primary" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
                </div>
                <div className="row g-4">
                    {steps.map((step, index) => (
                        <div key={index} className="col-md-6 col-lg-3 text-center position-relative">
                            <div className="mb-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle shadow-sm" style={{ width: '90px', height: '90px' }}>
                                    <i className={`${step.icon} fa-2x`}></i>
                                </div>
                            </div>
                            <h5 className="fw-bold">{step.title}</h5>
                            <p className="text-muted">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;