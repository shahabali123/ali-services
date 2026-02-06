import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../blogs/blog';

function RecentBlogs() {
    // Get the last 3 blogs
    const recentPosts = [...blogs].reverse().slice(0, 3);

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-end mb-5">
                    <div>
                        <h2 className="display-5 fw-bold">Latest Insights</h2>
                        <p className="lead text-muted mb-0">Expert tips and news for your visa journey.</p>
                    </div>
                    <Link to="/blogs" className="btn btn-outline-primary rounded-pill px-4">View All Articles</Link>
                </div>
                
                <div className="row g-4">
                    {recentPosts.map(blog => (
                        <div key={blog.id} className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm hover-card">
                                <img src={blog.image} className="card-img-top" alt={blog.title} style={{height: '200px', objectFit: 'cover'}} />
                                <div className="card-body p-4">
                                    <div className="small text-muted mb-2">
                                        <i className="far fa-calendar-alt me-2"></i>{blog.date}
                                    </div>
                                    <h5 className="card-title fw-bold mb-3">
                                        <Link to={`/blogs/${blog.id}`} className="text-decoration-none text-dark stretched-link">
                                            {blog.title}
                                        </Link>
                                    </h5>
                                    <p className="card-text text-secondary small">{blog.excerpt.substring(0, 90)}...</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .hover-card { transition: transform 0.3s ease; }
                .hover-card:hover { transform: translateY(-5px); }
            `}</style>
        </section>
    );
}

export default RecentBlogs;