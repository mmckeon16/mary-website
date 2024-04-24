import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavButton from './NavButton';
import './Appbar.css';


function Appbar() {
  const navItems = ['Home', 'About', 'Contact'];

  return (
      <AppBar component="nav">
        <Toolbar className="nav-bar">
          <Typography
            variant="h6"
            component="div"
          >
            Menu
          </Typography>
          <div>
            {navItems.map((item) => (
              <NavButton item={item} />
            ))}
            </div>
          
        </Toolbar>
      </AppBar>

  );
}

export default Appbar;
