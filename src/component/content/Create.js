import React, { useState } from 'react';
import Spinner from '../layout/Spinner';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setLoading(false);
    });
  };
  return (
    <div className='create'>
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        >
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
          <option value='urban'>urban</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading && (
          <button>
            <Spinner />
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
