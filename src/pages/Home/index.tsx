import { Link } from 'ice';
import Guide from '@/components/Guide';

const Home = () => {
  return (<>
    <Link to="/about"> About</Link>
    <Guide />
  </>);
};

export default Home;
