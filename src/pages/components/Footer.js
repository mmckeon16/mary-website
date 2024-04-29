import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';
import './Footer.css';

function Footer() {
  return (
    <Box
      className="box"
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12} className="footerGrid">
            <Typography color="textSecondary" variant="subtitle1" className="footerText">
              {`${new Date().getFullYear()} | `}
            </Typography>
            <IconButton aria-label="github">
              <GitHubIcon />
            </IconButton>
            <Typography color="textSecondary" variant="subtitle1" className="footerText">{`| mmckeon204@gmail.com`} </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;