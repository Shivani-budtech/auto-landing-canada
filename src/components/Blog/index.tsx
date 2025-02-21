import React, { useState, useEffect } from 'react';
import './index.css';
import '../../responsive.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, BACKEND_URL } from '../Constant.tsx';
function Blog() {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    const fetchBlog = async () => {
        try {
            const response = await axios.get(API_URL+"blog/"+id);
            setBlog(response.data);

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
        fetchBlog();
    }, [id]);

    return (
        <section className="blog-detail-sec">
            <div className='blog-detail-img'>
                <img src={BACKEND_URL+"public/uploads/"+blog.image} />
                <div className='blog-detail-img-text'>
                    <h1>{blog.title}
                        <span>
                            {formateDate(blog.created_at)}
                        </span>
                    </h1>
                </div>
            </div>
            <div className="blog-content">
                <div
                    dangerouslySetInnerHTML={{
                        __html: blog.content,
                    }}
                />
            </div>
        </section>
    );
}

export default Blog;
