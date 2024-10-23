import React from 'react';
import Blog from './Blog/index.tsx'
import FeatureBlogs from './FeaturedBlogs/index.tsx';
import TopBlogs from './TopBlogs/index.tsx';

function BlogDetail() {
    return (
        <section className='blog-detail-page header-marging'>
            <div className='blogs-detail-row'>
                <Blog />
                <FeatureBlogs />
            </div>
            <TopBlogs />
        </section>
        
    );
}

export default BlogDetail;
