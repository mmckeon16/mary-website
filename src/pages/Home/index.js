
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import './Home.css';
import Appbar from '../components/Appbar';
import hobokenImg from './hoboken-water.jpg';

function Home() {
  return (
    <div className="homePage">
      <Appbar/>
      <img src={hobokenImg} className="image" />
      <Paper elevation={3} className="homeContent">
        <Typography variant='h3' component='h1'>
          This is a website about me, Mary.
        </Typography>
        <a
          className="git-link"
          href="https://github.com/mmckeon16"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about me
        </a>
      </Paper>
    </div>
  );
}

export default Home;
