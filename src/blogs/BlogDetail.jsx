import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './blog';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container mt-5 text-center">
        <h2>Blog not found</h2>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const title = blog.title;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <article>
            <h1 className="fw-bold mb-3">{blog.title}</h1>
            <div className="d-flex align-items-center text-muted mb-4">
              <span className="me-3">
                <i className="fas fa-calendar-alt me-2"></i>
                {blog.date}
              </span>
              <span>
                <i className="fas fa-user me-2"></i>
                {blog.author}
              </span>
            </div>
            
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="img-fluid rounded w-100 mb-4"
              style={{ objectFit: 'cover', maxHeight: '500px' }}
            />

            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
          </article>

          <hr className="my-5" />

          {/* Share Section */}
          <div className="share-section mb-5">
            <h5 className="fw-bold mb-3">Share this article:</h5>
            <div className="d-flex flex-wrap gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center"
                style={{ backgroundColor: '#3b5998', borderColor: '#3b5998' }}
              >
                <i className="fab fa-facebook-f me-2"></i> Facebook
              </a>
              
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info text-white d-flex align-items-center"
                style={{ backgroundColor: '#1da1f2', borderColor: '#1da1f2' }}
              >
                <i className="fab fa-twitter me-2"></i> Twitter
              </a>
              
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center"
                style={{ backgroundColor: '#0077b5', borderColor: '#0077b5' }}
              >
                <i className="fab fa-linkedin-in me-2"></i> LinkedIn
              </a>
              
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success d-flex align-items-center"
                style={{ backgroundColor: '#25d366', borderColor: '#25d366' }}
              >
                <i className="fab fa-whatsapp me-2"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;