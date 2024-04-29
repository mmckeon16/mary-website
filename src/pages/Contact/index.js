
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import Footer from '../components/Footer';
import AppbarNav from '../components/AppbarNav';
import maryProfile from './mary.png'
import maryResume from './maryResume.pdf'
import './Contact.css';

function Contact() {
  return (
    <div className="contactPage">
      <AppbarNav/>
      <div className="contactBody">
        <img src={maryProfile} className="contactImg"/>
        <div className="contactText">
          <Typography variant="h3">
            Get in touch
          </Typography>
          <Typography variant="body1">
            If you want to chat about anything, reach me at the following!
          </Typography>
          <div className="logoDiv">
            <LocalPhoneIcon />
            <Typography>
              609-389-1474
            </Typography>
          </div>
          <div className="logoDiv">
            <EmailIcon />
            <Typography>
              mmckeon204@gmail.com
            </Typography>
          </div>
          <Button className="logoDiv button" onClick={()=> {
            window.location.href="https://github.com/mmckeon16"
          }}>
            <GitHubIcon />
            <Typography>
              My Github
            </Typography>
          </Button>
          <Button className="logoDiv button" onClick={(event) => { window.open(maryResume) }}>
            <ArticleIcon />
            <Typography>
              My Resume
            </Typography>
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
