import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../blogs/blog';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        
        // If parent provided a search handler (like BlogPage filtering), call it
        if (onSearch) {
            onSearch(value);
        }

        // Generate suggestions for dropdown
        if (value.length > 0) {
            const filtered = blogs.filter(blog => 
                blog.title.toLowerCase().includes(value.toLowerCase()) ||
                blog.category.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
        } else {
            setSuggestions([]);
        }
    };

    const handleLinkClick = () => {
        setSuggestions([]);
        setQuery(''); // Clear search after navigation
    };

    return (
        <div className="position-relative w-100">
            <div className="input-group border rounded-pill shadow-sm bg-white">
                <input 
                    type="text" 
                    className="form-control border-0 rounded-pill ps-4 shadow-none" 
                    placeholder="Search..." 
                    value={query}
                    onChange={handleChange}
                />
                <button className="btn border-0 rounded-pill pe-3 text-primary" type="button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            {suggestions.length > 0 && (
                <div className="position-absolute w-100 bg-white shadow-lg rounded-4 overflow-hidden mt-2 border" style={{ zIndex: 1000 }}>
                    <ul className="list-group list-group-flush text-start">
                        {suggestions.map(blog => (
                            <li key={blog.id} className="list-group-item list-group-item-action p-0 border-0">
                                <Link 
                                    to={`/blogs/${blog.id}`} 
                                    className="d-block p-3 text-decoration-none text-dark"
                                    onClick={handleLinkClick}
                                >
                                    <div className="fw-bold small text-truncate">{blog.title}</div>
                                    <div className="text-muted small" style={{fontSize: '0.8rem'}}>{blog.category}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Search;