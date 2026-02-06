import { Link, NavLink } from 'react-router-dom';
import Search from './Search';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
                    Naxgat <span className="text-secondary fs-6 fw-normal">Visa Services</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-lg-3">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link fw-medium ${isActive ? "text-primary active" : "text-dark"}`}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link fw-medium ${isActive ? "text-primary active" : "text-dark"}`}
                                to="/blogs"
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => `nav-link fw-medium ${isActive ? "text-primary active" : "text-dark"}`}
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex ms-lg-3 mt-3 mt-lg-0 search-container">
                        <Search />
                    </div>
                </div>
            </div>
            <style>{`
                .search-container {
                    width: 100%;
                }
                @media (min-width: 992px) {
                    .search-container {
                        width: 280px;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Navbar;