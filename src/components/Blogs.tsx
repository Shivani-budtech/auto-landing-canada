import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import AllBlogs from './AllBlogs/index.tsx';
import FeatureBlogs from './FeaturedBlogs/index.tsx';


function Blogs() {
    return (
        <section className='blogs-page'>
            <InternalHeader />
            <div className='all-blogs-row container'>
                <AllBlogs />
                <FeatureBlogs />
            </div>
        </section>
    );
}

export default Blogs;
