
import useFetch from '../../customHook/useFetch';
import Spinner from '../layout/Spinner';
import BlogList from './BlogList';
const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch('http://localhost:8000/blogs');
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {loading && <Spinner />}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  );
};

export default Home;
