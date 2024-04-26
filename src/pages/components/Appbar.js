import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavButton from './NavButton';
import './Appbar.css';


function Appbar() {
  const navItems = [{title:'Home', url:'/'}, {title:'Projects', url:'/projects'}, {title:'Contact', url:'/contact'}];

  return (
      <AppBar component="nav">
        <Toolbar className="nav-bar">
          <div>
            {navItems.map(({title, url}) => (
              <NavButton title={title} url={url} />
            ))}
          </div>
        </Toolbar>
      </AppBar>

  );
}

export default Appbar;
