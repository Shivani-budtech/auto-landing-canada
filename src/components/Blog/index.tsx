import React, { useState, useEffect } from 'react';
import './index.css';
import '../../responsive.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
import { Helmet } from "react-helmet-async";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    try {
      const response = await axios.get(API_URL + "blog/" + id);
      if (typeof response.data.schema === 'string') {
        try {
          response.data.schema = JSON.parse(response.data.schema);
        } catch (e) {
          console.error("Invalid schema JSON:", e);
        }
      }
      setBlog(response.data);
    } catch (err) {
      console.error("Error fetching blog:", err);
    }
  };

  const formateDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (blog.schema && typeof blog.schema === 'object') {
    console.log('HELLO123', blog.schema);
  }
 
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{blog.meta_title}</title>
        <meta name="description" content={blog.meta_desc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={blog.canonical_url} />

        <meta property="og:type" content={blog.og_type} />
        <meta property="og:site_name" content={blog.og_site_name} />
        <meta property="og:title" content={blog.og_title} />
        <meta property="og:description" content={blog.og_desc} />
        <meta property="og:url" content={blog.og_url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AutoLendingCA" />
        <meta name="twitter:title" content={blog.og_title} />
        <meta name="twitter:description" content={blog.meta_desc} />
        <meta name="twitter:image" content={blog.image} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
      </Helmet>

      <section className="blog-detail-sec">
        <div className='blog-detail-img'>
          <img src={BACKEND_URL + "public/uploads/" + blog.image} alt={blog.img_alt} />
          <div className='blog-detail-img-text'>
            <div className="blog-detail-img-text-absolute"></div>
          </div>
        </div>
        <div className="blog-content">
          <h1>{blog.title}</h1>
          <span style={{ display: "inline-block", marginBottom: "10px", fontSize: "18px" }}>
            {formateDate(blog.created_at)}
          </span>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </section>
    </>
  );
}

export default Blog;
