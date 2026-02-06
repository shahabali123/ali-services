import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        currentDate: '',
        preferredDate: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "923420475187";
        const text = `*New Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Current Appointment:* ${formData.currentDate}\n*Preferred Date:* ${formData.preferredDate}\n\n*Query:* ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4 p-md-5">
                                <h2 className="text-center mb-4 fw-bold text-primary">Contact Me</h2>
                                <p className="text-center text-muted mb-4">
                                    Have questions about visa rescheduling? Fill out the form below to send me a message directly on WhatsApp!
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                                            <input
                                                type="tel"
                                                className="form-control form-control-lg"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+92 300 1234567"
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="name@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="currentDate" className="form-label fw-semibold">Current Appointment Date</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="currentDate"
                                            name="currentDate"
                                            value={formData.currentDate}
                                            onChange={handleChange}
                                            placeholder="e.g., Nov 2026 or Not Booked"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="preferredDate" className="form-label fw-semibold">When do you want to reschedule?</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="preferredDate"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            required
                                            placeholder="e.g., ASAP, March 2025"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label fw-semibold">Query / Message</label>
                                        <textarea
                                            className="form-control form-control-lg"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Any specific requirements or questions?"
                                        ></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-success btn-lg rounded-pill fw-bold">
                                            <i className="fab fa-whatsapp me-2"></i> Send Message on WhatsApp
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;