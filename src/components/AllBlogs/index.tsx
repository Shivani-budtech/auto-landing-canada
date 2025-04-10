import React, { useState, useEffect } from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
function AllBlogs() {
    const arr = []
    const fetchBlogs = async () => {
        try {
            const response = await axios.get(API_URL+"blogs"); // Replace with your API URL
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

    const [blogs, setBlogs] = useState(arr);

    return (
        <section className="all-blogs-sec">
            <div className="blog-grid">
                {Object.entries(blogs).map(([key, blog]) => (
                    <div key={key} className="blog-item">
                        <div className='blog-image'>
                            <img src={BACKEND_URL+'public/uploads/'+blog.image} />
                        </div>
                        <h2 className='blog-title'>
                            {blog.title}
                        </h2>
                        <div className='blog-info'>
                            <div className='blog-date'>
                                {formateDate(blog.created_at)}
                            </div>
                            <div className='blog-btn'>
                                <Link to={`/blog/` + blog.slug} className='primary-link'>Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AllBlogs;
