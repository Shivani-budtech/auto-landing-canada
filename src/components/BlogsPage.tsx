import React from 'react';
import InternalHeader from './InternalHeader/index.tsx';
import AllBlogsNew from './Blogs/index.tsx';

function BlogsPage() {
    return (
        <section className='blogs-page-new'>
            <InternalHeader />
            <AllBlogsNew />
        </section>
    );
}

export default BlogsPage;
