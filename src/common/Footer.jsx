function Footer() {
  return (
    <div className="container-fluid mt-5 px-0">
      <footer className="text-white text-center text-lg-start bg-primary">
        <div className="container p-4">
          <div className="row mt-4">
            
            {/* Column 1: About Visa Services */}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 fw-bold">Naxgat Visa Services</h5>
              <p>
                Specializing in US B1/B2 Visa slot management for Pakistan. 
                We help you skip the 2027 waitlist by securing early appointments 
                at Islamabad and Karachi consulates through 24/7 monitoring.
              </p>
              <div className="mt-4">
                <a href="#!" className="btn btn-floating btn-outline-light btn-lg mx-1"><i className="fab fa-facebook-f"></i></a>
                <a href="#!" className="btn btn-floating btn-outline-light btn-lg mx-1"><i className="fab fa-instagram"></i></a>
                <a href="https://wa.me/923420475187" target="_blank" rel="noopener noreferrer" className="btn btn-floating btn-outline-light btn-lg mx-1"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

            {/* Column 2: Quick Links / Locations */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Our Coverage</h5>
              <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-map-marker-alt"></i></span>
                  <span className="ms-2">Islamabad Consulate Specialist</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-map-marker-alt"></i></span>
                  <span className="ms-2">Karachi Consulate Specialist</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-envelope"></i></span>
                  <span className="ms-2">info@naxgatvisaservices.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li"><i className="fas fa-shield-alt"></i></span>
                  <span className="ms-2">100% Secure Data Handling</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Operational Hours */}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Monitoring Hours</h5>
              <table className="table text-center text-white roundedborder-white">
                <tbody className="fw-normal">
                  <tr>
                    <td>System:</td>
                    <td>24/7 Monitoring</td>
                  </tr>
                  <tr>
                    <td>Support:</td>
                    <td>9am - 9pm (Mon-Sat)</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>Emergency Only</td>
                  </tr>
                </tbody>
              </table>
              <p className="small mt-2 text-info italic">
                *We monitor portal updates every 60 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          © 2026 Copyright: 
          <a className="text-white ms-1 fw-bold text-decoration-none" href="/">Naxgat Visa Services</a>
          <span className="ms-3 text-white-50 small">| US Visa Consultant Pakistan</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;