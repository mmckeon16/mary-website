
import AppbarNav from '../components/AppbarNav';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import starImg from './starImg.png';
import tabImg from './tabImg.png';
import mkdwnImg from './mkdwnImg.png';

import './Projects.css';

function Projects() {
  return (
    <div className="projectsPage">
      <AppbarNav/>
      <div className="projectsGroup">
        <ProjectCard title="Star game" description="This is an intro to phaser game" img={starImg} url="https://github.com/mmckeon16/star-game"/>
        <ProjectCard title="Tab project" description="This was a part of a takehome project for an interview to create accessible tabs." img={tabImg} url="https://github.com/mmckeon16/mailchimp-takehome"/>
        <ProjectCard title="Markdown converter" description="This was a part of a takehome project for an interview to create a script that converts markdown to html." img={mkdwnImg} url="https://github.com/mmckeon16/mailchimp-takehome-take2"/>
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;
