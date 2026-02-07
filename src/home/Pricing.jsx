import React from 'react';

function Pricing({ onPlanSelect }) {
  return (
    <section className="py-5 bg-white" id="services">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Premium Visa Services</h2>
        <p className="lead text-muted">Specialized B1/B2 Visa Rescheduling for Pakistan, UAE & Saudi Arabia</p>
        <div className="mx-auto bg-primary" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-8">
          <div className="card h-100 shadow-lg border-0 position-relative overflow-hidden" style={{borderRadius: '1rem'}}>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-10"></div>
            <div className="card-header bg-primary text-white text-center py-4 border-0 position-relative">
                <h3 className="fw-bold mb-0">Guaranteed Rescheduling</h3>
                <span className="badge bg-warning text-dark mt-2 px-3 py-2 rounded-pill shadow-sm">Most Popular</span>
            </div>
            <div className="card-body p-4 p-md-5 text-center position-relative">
              <div className="display-4 fw-bold text-dark mb-2">40,000 <small className="fs-5 text-muted">PKR</small></div>
              <p className="text-muted mb-4">Per Applicant</p>
              
              <div className="d-flex justify-content-center mb-4">
                  <div className="text-start">
                    <div className="d-flex align-items-center mb-3">
                        <div className="bg-white rounded-circle p-1 shadow-sm me-3 text-success">
                            <i className="fas fa-check-circle fa-lg"></i>
                        </div>
                        <span className="fs-5">Confirmed within <strong>90 Days</strong></span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="bg-white rounded-circle p-1 shadow-sm me-3 text-primary">
                            <i className="fas fa-clock fa-lg"></i>
                        </div>
                        <span>Possibility of <strong>1 Month</strong></span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="bg-white rounded-circle p-1 shadow-sm me-3 text-info">
                            <i className="fas fa-globe fa-lg"></i>
                        </div>
                        <span>Pakistan, UAE & Saudi Arabia</span>
                    </div>
                  </div>
              </div>

              <button className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow-sm hover-scale" onClick={() => onPlanSelect('Premium Rescheduling')}>
                Get Started Now
              </button>
            </div>
            <div className="card-footer bg-transparent border-0 text-center pb-4 position-relative">
                <small className="text-muted"><i className="fas fa-lock me-1"></i> 100% Secure & Confidential</small>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-scale { transition: transform 0.2s; }
        .hover-scale:hover { transform: scale(1.02); }
      `}</style>
    </div>
    </section>
  );
}

export default Pricing;