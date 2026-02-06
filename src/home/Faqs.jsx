function Faqs() {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            <hr/>
            <div className="row my-5">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        What is the refund policy?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <strong>We prioritize your satisfaction.</strong> If we are unable to secure an earlier appointment slot for you within the agreed-upon monitoring period, we offer a 100% money-back guarantee <i>(minus any minor processing fees).</i> Please note that once a slot is successfully booked and confirmed on your portal, the service fee becomes non-refundable.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Why are account credentials necessary?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>To secure a slot,</strong> our system needs to monitor the official CGI Federal/U.S. Travel Docs portal in real-time. Since slots appear and disappear in seconds, having direct access allows us to "grab" the earliest available date for you instantly. Your data is handled with strict confidentiality and is used exclusively for the automated scheduling process. We recommend changing your password once the slot is secured for your peace of mind.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        How long does it take to start the service?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>Activation is almost instant</strong>. Once your payment is verified and you provide your portal details, our 24/7 monitoring system begins tracking Islamabad and Karachi consulate availability immediately. Most clients see their appointments moved up significantly within the first 7 to 14 days of service.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        Can I choose a specific date for my appointment?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>Yes, you can set preferences.</strong> While we cannot manufacture slots, you can provide us with your preferred date range (e.g., "Anytime in March 2025"). Our system will prioritize booking slots that fall within your specified window.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
        Do you offer services for student (F1) or spouse (H4) visas?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>Absolutely.</strong> While B1/B2 visitor visas are our most popular service, we actively monitor and reschedule appointments for F1 (Student), H1B (Work), H4 (Dependent), and other non-immigrant visa categories.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
        What happens if the embassy cancels my appointment?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>We have you covered.</strong> Though rare, embassy cancellations do happen due to administrative reasons. If this occurs, we will immediately restart the monitoring process to secure the next best available slot for you at no extra cost.
      </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 text-center mt-5">
                    <p className="text-muted">"Don't let a 2027 date delay your dreams. Our team is available 24/7 to answer your specific concerns. Whether it's an emergency business trip or a family visit, we are here to help."</p>
                    <h3>We woul like to hear from you. </h3>                    
                    <a className="fs-1 text-success fw-bold" href="https://wa.me/923420475187?text=Hi%20Naxgat%20Visa%20Services,%20I%20have%20a%20question%20from%20your%20FAQ%20section%20regarding%20US%20Visa%20slots." target="_blank"><i className="fa-brands fa-whatsapp"/></a>
                </div>
            </div>
            <hr/>
        </div>
     );
}

export default Faqs;