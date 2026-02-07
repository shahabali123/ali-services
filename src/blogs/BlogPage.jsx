import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogs from './blog';

function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const itemsPerPage = 6;

    // Get unique categories automatically from blogs data
    const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

    // Sort blogs by newest first
    const sortedBlogs = [...blogs].reverse();

    // Filter blogs based on search query and category
    const filteredBlogs = sortedBlogs.filter(blog => {
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        return matchesCategory;
    });

    // Calculate pagination details
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getVisiblePages = () => {
        if (totalPages <= 3) {
            return [...Array(totalPages)].map((_, i) => i + 1);
        }

        let start = currentPage;
        if (currentPage > totalPages - 2) {
            start = totalPages - 2;
        }

        return [start, start + 1, start + 2];
    };

    return (
        <div className="container-fluid bg-light py-5">
            <Helmet>
                <title>Latest US Visa Updates & Tips | Naxgat Visa Services Blog</title>
                <meta name="description" content="Stay updated with the latest US visa news, interview tips, and appointment wait times for Pakistan. Expert advice for your visa journey." />
                <meta name="keywords" content="US Visa Blog, Visa Interview Tips, DS-160 Guide, Visa Wait Times 2025, US Visa News Pakistan" />
            </Helmet>
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-dark">Latest Insights</h1>
                    <p className="lead text-muted">Expert advice, news, and tips for your US Visa journey.</p>
                    <div className="mx-auto bg-primary" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
                </div>

                {/* Search and Filter Section */}
                <div className="row justify-content-center mb-5 g-3">
                    <div className="col-md-4 col-lg-3">
                        <div className="input-group shadow-sm h-100">
                            <span className="input-group-text bg-white border-0 ps-3">
                                <i className="fas fa-filter text-primary"></i>
                            </span>
                            <select 
                                className="form-select border-0 shadow-none" 
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value);
                                    setCurrentPage(1);
                                }}
                                style={{ cursor: 'pointer' }}
                                aria-label="Filter by topic"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category === 'All' ? 'All Topics' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {currentBlogs.length > 0 ? (
                        currentBlogs.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm hover-card position-relative" style={{ transition: 'transform 0.3s ease' }}>
                                <div className="position-relative">
                                    <img 
                                        src={blog.image} 
                                        className="card-img-top" 
                                        alt={blog.title} 
                                        style={{ height: '220px', objectFit: 'cover' }}
                                    />
                                    <span className="position-absolute top-0 end-0 bg-primary text-white px-3 py-1 m-2 rounded-pill small fw-bold shadow-sm">
                                        {blog.category}
                                    </span>
                                </div>
                                <div className="card-body d-flex flex-column p-4">
                                    <div className="mb-3 text-muted small">
                                        <i className="far fa-calendar-alt me-2"></i>{blog.date}
                                        <span className="mx-2">•</span>
                                        <i className="far fa-user me-2"></i>{blog.author}
                                    </div>
                                    <h4 className="card-title fw-bold mb-3 text-dark">
                                        {blog.title}
                                    </h4>
                                    <p className="card-text text-secondary mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                                        {blog.excerpt}
                                    </p>
                                    <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                        <Link to={`/blogs/${blog.id}`} className="text-decoration-none stretched-link">
                                            <span className="text-primary fw-bold small">Read Article <i className="fas fa-arrow-right ms-1"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <div className="text-muted mb-3">
                                <i className="fas fa-search fa-3x opacity-25"></i>
                            </div>
                            <h3>No results found</h3>
                            <p className="text-muted">We couldn't find any articles in this category.</p>
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <nav aria-label="Blog pagination" className="mt-5">
                        <ul className="pagination justify-content-center align-items-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button 
                                    className="page-link border-0 shadow-sm mx-1 rounded-circle" 
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                            </li>
                            {getVisiblePages().map((pageNumber) => (
                                <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                                    <button 
                                        className="page-link border-0 shadow-sm mx-1 rounded-circle fw-bold" 
                                        onClick={() => handlePageChange(pageNumber)}
                                        style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        {pageNumber}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button 
                                    className="page-link border-0 shadow-sm mx-1 rounded-circle" 
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
            
            <style>
                {`
                    .hover-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
                    }
                `}
            </style>
        </div>
    );
}

export default BlogPage;
