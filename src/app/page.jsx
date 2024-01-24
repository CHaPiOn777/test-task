import Hero from 'components/pages/home/hero';
import getMetadata from 'utils/get-metadata';

const Home = () => <Hero />;

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'Home - DevOptima',
    description: 'DevOptima home page',
    pathname: '/',
  });
}
