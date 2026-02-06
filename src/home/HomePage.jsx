import { Helmet } from 'react-helmet-async';
import React, { useState, useEffect } from 'react';
import Faqs from "./Faqs";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Team from "./Team";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import RecentBlogs from "./RecentBlogs";
import ContactCTA from "./ContactCTA";

function HomePage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        numberOfSlots: '1',
        preferredTime: ''
    });

    // Load saved data from cache/localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem('whatsapp_form_data');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handlePlanSelect = (planName) => {
        setSelectedPlan(planName);
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        // Save to cache immediately
        localStorage.setItem('whatsapp_form_data', JSON.stringify(updatedData));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `*New Plan Inquiry*\n\n*Plan:* ${selectedPlan}\n*Slots Needed:* ${formData.numberOfSlots}\n*Preferred Time:* ${formData.preferredTime}\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n\n*Message:* ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/923420475187?text=${encodedText}`, '_blank');
        setShowModal(false);
    };

    return ( 
        <div className="container-fluid">
            <Helmet>
                <title>US Visa Appointment Rescheduling Pakistan | Naxgat Visa Services</title>
                <meta name="description" content="Secure earlier US Visa interview slots in Islamabad and Karachi. We specialize in B1/B2 visa appointment rescheduling and monitoring services to fast-track your travel." />
                <meta name="keywords" content="US Visa Pakistan, Visa Appointment Rescheduling, Islamabad Consulate, Karachi Consulate, Early Visa Slots, US Visa Consultant, CGI Federal Monitor" />
                <link rel="canonical" href="https://naxgat.com/" />
            </Helmet>
            <Hero onPlanSelect={handlePlanSelect} />
            <WhyChooseUs/>
            <HowItWorks/>
            <Pricing onPlanSelect={handlePlanSelect} />
            <RecentBlogs/>
            <Faqs/>
            <Team/>
            <Reviews/>
            <ContactCTA onPlanSelect={handlePlanSelect} />

            {/* WhatsApp Inquiry Modal */}
            {showModal && (
                <>
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content shadow-lg">
                        <div className="modal-header bg-success text-white">
                        <h5 className="modal-title fw-bold"><i className="fab fa-whatsapp me-2"></i>Inquire about {selectedPlan}</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)} aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Your Name</label>
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Phone Number</label>
                                <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+92 300 1234567" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Email Address</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">How many slots do you need?</label>
                                <select className="form-select" name="numberOfSlots" value={formData.numberOfSlots} onChange={handleChange}>
                                    <option value="1">1 Slot</option>
                                    <option value="2">2 Slots</option>
                                    <option value="3">3 Slots</option>
                                    <option value="4">4 Slots</option>
                                    <option value="5+">5+ Slots</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Preferred Month/Dates</label>
                                <input type="text" className="form-control" name="preferredTime" value={formData.preferredTime} onChange={handleChange} placeholder="e.g., Anytime in March 2025" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Message (Optional)</label>
                                <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Any specific requirements?"></textarea>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-success fw-bold py-2"><i className="fab fa-whatsapp me-2"></i>Send Inquiry on WhatsApp</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
                </>
            )}
        </div>
     );
}

export default HomePage;