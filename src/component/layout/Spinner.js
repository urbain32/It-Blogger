import { Fragment } from 'react';
import loading from './loading.gif';
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={loading}
        alt='Loading...'
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
          background:'transparent'
        }}
      />
    </Fragment>
  );
};

export default Spinner;
