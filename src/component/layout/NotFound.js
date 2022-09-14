import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='body'>
      <div class='number'>404</div>
      <div class='text'>
        <span>Ooops...</span>
        <br />
        <Link class='me' to='/' target='_blank'>
          page not found
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
