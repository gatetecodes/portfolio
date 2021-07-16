import React from 'react';
import './Blog.scss';
import PageTitle from './PageTitle';

const Blog = () => {
  return (
    <section className="content-section">
      <div className="container">
        <PageTitle
          title="My Blog"
          subtitle="Launching soon..."
          style={{ margin: '1rem 0 2rem 0' }}
        />
      </div>
    </section>
  );
};

export default Blog;
