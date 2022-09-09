import React from 'react';
import { Link } from 'react-router-dom';
const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h1
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          fontWeight: '600',
        }}
      >
        {title}
      </h1>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <div className='row'>
            <div className='column'>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
              </Link>
            </div>
            <div className='column'>
              <div className='row'>
                <div className='column'></div>
                <div className='column'>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
