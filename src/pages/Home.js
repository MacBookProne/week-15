import ParallaxBanner from '../components/ParallaxBanner';
import CattleCards from '../components/CattleCards';
import Cattle from './Cattle';
import "../styles.css";

function Home() {
  return (
    <div>
      <ParallaxBanner />
      <h1 className="homeheader">Our Operation</h1>
      <CattleCards />
      <Cattle />
    </div>
  );
}

export default Home;
