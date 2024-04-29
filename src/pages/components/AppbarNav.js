import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavButton from './NavButton';
import './AppbarNav.css';

function AppbarNav() {
  const navItems = [{title:'Home', url:'/'}, {title:'Projects', url:'/projects'}, {title:'Contact', url:'/contact'}];

  return (
      <AppBar component="nav" className="nav-content">
        <Toolbar className="nav-bar">
          <div>
            {navItems.map(({title, url}) => (
              <NavButton key={title} title={title} url={url} />
            ))}
          </div>
        </Toolbar>
      </AppBar>

  );
}

export default AppbarNav;
