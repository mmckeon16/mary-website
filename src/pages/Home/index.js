
import './Home.css';
import Appbar from './components/Appbar';


function Home() {
  return (
    <div className="Home">
      <Appbar/>
      <p>
        This is a website about me, Mary.
      </p>
      <a
        className="git-link"
        href="https://github.com/mmckeon16"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn about me
      </a>
    </div>
  );
}

export default Home;
