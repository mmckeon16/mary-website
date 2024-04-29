import React from 'react';
import Button from '@mui/material/Button';
import {
  useNavigate,
} from "react-router-dom";

function NavButton({title, url}) {
  const navigate = useNavigate();

  return (
    <Button key={title} sx={{ color: '#fff' }} onClick={()=>{navigate(url);}}>
      {title}
    </Button>
  );
}

export default NavButton;
