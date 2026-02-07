function Reviews() {
  return (
    <section className="py-5 bg-white">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Client Success Stories</h2>
        <p className="lead text-muted">Don't just take our word for it.</p>
        <div className="mx-auto bg-primary" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card col-lg-6 col-md-8 col-sm-12 bg-white shadow-sm border-0 text-center d-flex flex-column align-items-center p-5 mx-auto">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" className="img-fluid rounded-circle mb-3 shadow" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Saad Waseem" />
                <h4 className="fw-bold">Saad Waseem</h4>
                <div className="text-warning mb-3">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-muted fst-italic">"I was skeptical at first, but they delivered. Moved my appointment from Nov 2026 to Feb 2025. The team is very responsive on WhatsApp."</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card col-lg-6 col-md-8 col-sm-12 bg-white shadow-sm border-0 text-center d-flex flex-column align-items-center p-5 mx-auto">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" className="img-fluid rounded-circle mb-3 shadow" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Hina Altaf" />
                <h4 className="fw-bold">Hina Altaf</h4>
                <div className="text-warning mb-3">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-muted fst-italic">"My graduation ceremony was in May and my appointment was in September. Naxgat Visa Services helped me secure an April slot. Forever grateful!"</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card col-lg-6 col-md-8 col-sm-12 bg-white shadow-sm border-0 text-center d-flex flex-column align-items-center p-5 mx-auto">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" className="img-fluid rounded-circle mb-3 shadow" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Kamran Akmal" />
                <h4 className="fw-bold">Kamran Akmal</h4>
                <div className="text-warning mb-3">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-muted fst-italic">"Best visa consultancy in Islamabad. They don't make false promises. They told me it would take 2 weeks to find a slot, and they did it in 10 days."</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card col-lg-6 col-md-8 col-sm-12 bg-white shadow-sm border-0 text-center d-flex flex-column align-items-center p-5 mx-auto">
                <img src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" className="img-fluid rounded-circle mb-3 shadow" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Sana Mir" />
                <h4 className="fw-bold">Sana Mir</h4>
                <div className="text-warning mb-3">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-muted fst-italic">"Highly recommended for families. We needed 4 slots together and they managed to find a group cancellation. Saved us so much stress."</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Reviews;
