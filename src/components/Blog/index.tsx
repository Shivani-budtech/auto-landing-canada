import React, { useState, useEffect } from 'react';
import './index.css';
import '../../responsive.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
import { Helmet } from "react-helmet-async";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}blog/${id}`);
        const data = response.data;

        let parsedSchema = null;
        if (typeof data.schema === 'string') {
          try {
            parsedSchema = JSON.parse(data.schema);
          } catch (error) {
            console.error('Schema JSON parse error:', error);
          }
        } else if (typeof data.schema === 'object') {
          parsedSchema = data.schema;
        }

        setBlog(data);
        setSchema(parsedSchema);

        // Inject schema script manually
        if (parsedSchema) {
          const script = document.getElementById('dynamic-schema');
          if (script) {
            script.remove(); // remove previous
          }
          const newScript = document.createElement('script');
          newScript.type = 'application/ld+json';
          newScript.id = 'dynamic-schema';
          newScript.innerHTML = JSON.stringify(parsedSchema);
          document.head.appendChild(newScript);
        }

      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{blog.meta_title || blog.title}</title>
        <meta name="description" content={blog.meta_desc || ''} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={blog.canonical_url || window.location.href} />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content={blog.og_type || 'article'} />
        <meta property="og:site_name" content={blog.og_site_name || 'Auto Lending Canada'} />
        <meta property="og:title" content={blog.og_title || blog.title} />
        <meta property="og:description" content={blog.og_desc || blog.meta_desc} />
        <meta property="og:url" content={blog.og_url || window.location.href} />
        <meta property="og:image" content={blog.image ? BACKEND_URL + 'public/uploads/' + blog.image : ''} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AutoLendingCA" />
        <meta name="twitter:title" content={blog.og_title || blog.title} />
        <meta name="twitter:description" content={blog.meta_desc || ''} />
        <meta name="twitter:image" content={blog.image ? BACKEND_URL + 'public/uploads/' + blog.image : ''} />
      </Helmet>

      <section className="blog-detail-sec">
        <div className='blog-detail-img'>
          <img src={`${BACKEND_URL}public/uploads/${blog.image}`} alt={blog.img_alt || blog.title} />
          <div className='blog-detail-img-text'>
            <div className="blog-detail-img-text-absolute"></div>
          </div>
        </div>
        <div className="blog-content">
          <h1>{blog.title}</h1>
          <span style={{ display: "inline-block", marginBottom: "10px", fontSize: "18px" }}>
            {formatDate(blog.created_at)}
          </span>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </section>
    </>
  );
}

export default Blog;
