import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
            <div className="text-center">
                <h1 className="display-1 fw-bold text-primary mb-0">404</h1>
                <h2 className="display-6 fw-bold text-dark mb-3">Page Not Found</h2>
                <p className="lead text-muted mb-4">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm">
                    <i className="fas fa-home me-2"></i>Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;