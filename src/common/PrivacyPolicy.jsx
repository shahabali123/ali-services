import React from 'react';
import { Helmet } from 'react-helmet-async';

function PrivacyPolicy() {
    return (
        <div className="container py-5">
            <Helmet>
                <title>Privacy Policy | Naxgat Visa Services</title>
                <meta name="description" content="Privacy Policy for Naxgat Visa Services. Learn how we handle your data." />
            </Helmet>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="mb-4 fw-bold">Privacy Policy</h1>
                    <p className="text-muted mb-5">Last updated: {new Date().toLocaleDateString()}</p>

                    <h3 className="fw-bold mt-4">1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you fill out a contact form, request our services, or communicate with us via WhatsApp. This may include your name, email address, phone number, and visa application details.</p>

                    <h3 className="fw-bold mt-4">2. How We Use Your Information</h3>
                    <p>We use the information we collect to provide, maintain, and improve our services, specifically to assist with US Visa appointment rescheduling. We may use your contact information to send you updates and communicate with you about your appointment.</p>

                    <h3 className="fw-bold mt-4">3. Data Security</h3>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your credentials are used solely for the purpose of securing your appointment and are handled with strict confidentiality.</p>

                    <h3 className="fw-bold mt-4">4. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at naxgat@gmail.com.</p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;