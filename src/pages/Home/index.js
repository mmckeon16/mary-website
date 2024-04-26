
import { Typography } from '@mui/material';

import './Home.css';
import Appbar from '../components/Appbar';
import hobokenImg from './hoboken-water.jpg';

function Home() {

  return (
    <div className="homePage">
      <Appbar/>
      <div className="homePageContent">
        <img src={hobokenImg} className="image" />
        <div className="homePageText">
          <Typography variant='h5' component='h1' className="textContent">
            My name is 
          </Typography>
          <Typography variant='h1' component='h2' className="textContent">
            Mary McKeon
          </Typography>
          <Typography variant='body1' className="textContent">
            I am a passionate full stack software engineer with a passion for customer obsession and developer experience.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;
