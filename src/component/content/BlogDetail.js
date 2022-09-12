import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHook/useFetch';
import Spinner from '../layout/Spinner';
const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    loading,
  } = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div className='blog-detail'>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
