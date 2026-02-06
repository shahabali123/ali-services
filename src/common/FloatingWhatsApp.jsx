import React from 'react';

function FloatingWhatsApp() {
    return (
        <a 
            href="https://wa.me/923420475187" 
            target="_blank" 
            rel="noopener noreferrer"
            className="position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-lg text-decoration-none"
            style={{ width: '60px', height: '60px', zIndex: 1000, transition: 'transform 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <i className="fab fa-whatsapp fa-2x"></i>
        </a>
    );
}

export default FloatingWhatsApp;