function Faqs() {
    const cta = (
        <div className="mt-3">
            <a href="https://wa.me/923420475187?text=Hi%20Naxgat%2C%20I%20want%20to%20reschedule%20my%20US%20visa%20appointment" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success rounded-pill fw-bold px-3">
                <i className="fab fa-whatsapp me-2"></i>Reschedule Now
            </a>
        </div>
    );

    return ( 
        <section className="py-5 bg-white" id="faqs">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
                <div className="mx-auto bg-primary" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="accordion shadow-sm" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        What is the refund policy?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
        <strong>We prioritize your satisfaction.</strong> If we are unable to secure an earlier appointment slot for you within the agreed-upon monitoring period, we offer a 100% money-back guarantee <i>(minus any minor processing fees).</i> Please note that once a slot is successfully booked and confirmed on your portal, the service fee becomes non-refundable.
        {cta}
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
        {cta}
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
        <strong>Activation is almost instant</strong>. Once your payment is verified and you provide your portal details, our 24/7 monitoring system begins tracking availability in Pakistan, UAE & Saudi Arabia immediately. Most clients see their appointments moved up significantly within the first 7 to 14 days of service.
        {cta}
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
        {cta}
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
        {cta}
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
        {cta}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
        Do you provide rescheduling services for UAE (Dubai & Abu Dhabi)?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>Yes, we specialize in UAE.</strong> We monitor appointment slots for both the US Embassy in Abu Dhabi and the US Consulate General in Dubai. Whether you are a resident or applying from UAE, our system tracks these locations 24/7 to find earlier dates.
        {cta}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
        Can you help with US Visa slots in Saudi Arabia?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>Yes, we cover all major KSA locations.</strong> We actively monitor appointment availability for Riyadh, Jeddah, and Dhahran. Wait times in Saudi Arabia can be long, but cancellations occur frequently, and our automated system catches them instantly.
        {cta}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
        Is it faster to get an appointment in Islamabad or Karachi?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>It varies, but we track both.</strong> Availability fluctuates between Islamabad and Karachi. Our system tracks both simultaneously. If you are flexible with traveling between cities, we can secure the earliest possible date regardless of the location.
        {cta}
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