function Team() {
    return ( 
        <section className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold">Executive Team</h2>
                <div className="mx-auto bg-primary" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4">
                        <img src="media/images/profile.png" alt="Shahab Ali" className="rounded-circle img-fluid shadow-sm mb-3" style={{width: '150px', height: '150px', objectFit: 'cover'}}/>
                        <h4 className="fw-bold mb-1">Shahab Ali</h4>
                        <p className="text-muted">Expert Advisor</p>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4">
                        <img src="https://automaster.ee/wp-content/uploads/2019/02/person6.jpg" alt="" className="rounded-circle img-fluid w-50"/>
                        <h3 className="mt-3">Second Person</h3>
                        <p>Chief Executive Officer</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4">
                        <img src="https://law.northeastern.edu/wp-content/uploads/2021/02/Sharon-Persons-web-NUSL-2022_6301-1024x1024.jpg" alt="" className="rounded-circle img-fluid w-50"/>
                        <h3 className="mt-3">Adward Persons</h3>
                        <p>Chief Executive Officer</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4">
                        <img src="https://s48151.pcdn.co/wp-content/uploads/2025/01/Matthew-Persons.webp" alt="" className="rounded-circle img-fluid w-50"/>
                        <h3 className="mt-3">Michel Json</h3>
                        <p>Chief Executive Officer</p>
                </div> */}
            </div>
        </div>
        </section>
     );
}

export default Team;