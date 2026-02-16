import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container my-5" style={{ maxWidth: '800px' }}>
      <header className="border-bottom mb-5 pb-4">
        <h1 className="text-primary display-4 fw-bold mb-2">Terms of Service</h1>
        <p className="text-muted small">Last Updated: October 26, 2023</p>
      </header>

      <section className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-3">1. Acceptance of Terms</h2>
        <p>Welcome to Naxgat Visa Services. By accessing our website and using our visa rescheduling and consultation services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
      </section>

      <section className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-3">2. Services Description</h2>
        <p>Naxgat Visa Services provides third-party assistance for scheduling and rescheduling visa appointments. We are an independent service provider and are not directly affiliated with any government embassy, consulate, or official visa reporting agency unless explicitly stated.</p>
      </section>

      <section className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-3">3. User Responsibilities</h2>
        <p>You agree to provide accurate, current, and complete information during the application process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
      </section>

      <section className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-3">4. Payments and Refunds</h2>
        <p>All fees for our services are due upon booking. Refunds are processed in accordance with our Refund Policy. Please note that government visa fees are generally non-refundable and are separate from our service fees.</p>
      </section>

      <section className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-3">5. Limitation of Liability</h2>
        <p>Naxgat Visa Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
      </section>

      <section className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-3">6. Modifications to Service</h2>
        <p>We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.</p>
      </section>

      <section className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-3">7. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:naxgat@gmail.com">naxgat@gmail.com</a>.</p>
      </section>

      <footer className="mt-5 pt-4 border-top text-center text-muted small">
        <p>&copy; 2023 Naxgat Visa Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;