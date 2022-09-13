import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHook/useFetch';
import Spinner from '../layout/Spinner';
const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div className='blog-details'>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
