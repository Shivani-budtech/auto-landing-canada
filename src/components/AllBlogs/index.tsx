import React, { useState, useEffect } from 'react';
import './index.css';
import '../../responsive.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
function AllBlogs() {
    const arr = [
        {
            desc: "I was nervous about applying for a car loan, but the process was so easy! The team helped me navigate everything, and I was approved within hours. Now I’m driving my new SUV, and I couldn’t be happier!",
            name: "Sarah M.",
        },
        {
            desc: "After comparing several lenders, I found the best rates here. The customer service was outstanding—they took the time to explain all my options clearly. I’m thrilled with my new ride!",
            name: "James T.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        },
        {
            desc: "As a first-time car buyer in Canada, I had a lot of questions. Thankfully, my loan officer was incredibly patient and guided me through every step. I found a loan that works perfectly with my budget!",
            name: "Linda R.",
        }
    ]
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
                        <div className='blog-title'>
                            {blog.title}
                        </div>
                        <div className='blog-info'>
                            <div className='blog-date'>
                                {formateDate(blog.created_at)}
                            </div>
                            <div className='blog-btn'>
                                <Link to={`/blog/` + blog.id} className='primary-link'>Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AllBlogs;
