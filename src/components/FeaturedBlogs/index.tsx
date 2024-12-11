import React, { useState, useEffect } from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
function FeatureBlogs() {
    const [blogs, setBlogs] = useState({});

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(API_URL+"featured_blogs"); // Replace with your API URL
            setBlogs(response.data); // Assume the API returns an array of blogs

        } catch (err) {

        }
    };
    const formateDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <section className="featured-blogs-sec">
            <h1>Featured Blogs</h1>
            <div className="blog-list">
                {Object.entries(blogs).map(([key, blog]) => (
                    <div key={key} className="blog-list-item">
                        <div className='blog-list-image'>
                            <img src={BACKEND_URL+"public/uploads/"+blog.image} />
                        </div>
                        <div className='blog-list-info'>
                            <div className='blog-list-title'>
                                {blog.title}
                            </div>
                            <div className='blog-list-more'>
                                <div className='blog-list-date'>
                                    {formateDate(blog.created_at)}
                                </div>
                                <Link to={`/blog/` + blog.id} className='primary-link'>Read More</Link>
                            </div>
                        </div>
                        <Link to={`/blog/`+blog.id}></Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeatureBlogs;
