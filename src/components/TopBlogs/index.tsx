import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../../responsive.css';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
import './index.css';

function TopBlogs() {
    const [blogs, setBlogs] = useState({});
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 835,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 615,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],
    };
    const fetchBlogs = async () => {
        try {
            const response = await axios.get(API_URL+"blog_random"); // Replace with your API URL
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
        <section className="top-blog-sec container">
            <div className="sec-title">More Blogs</div>
            <div className="top-blog-grid">
                <Slider {...settings}>
                {Object.entries(blogs).map(([key, blog]) => (
                    <div key={key} className="top-blog-item">
                        <div className='top-blog-image'>
                            {blog.is_featured ? <span className="badge">Featured</span> : ''}
                            <img src={BACKEND_URL+"public/uploads/"+blog.image} />
                        </div>
                        <div className='top-blog-title'>
                            {blog.title}
                        </div>
                        <div className='top-blog-info'>
                            <div className='top-blog-date'>
                                {formateDate(blog.created_at)}
                            </div>
                            <div className='top-blog-btn'>
                                <Link to={`/blog/` + blog.id} className="primary-link">Read more</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    );
}

export default TopBlogs;
