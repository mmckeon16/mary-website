import React from 'react';
import Button from '@mui/material/Button';
import {
  useNavigate,
} from "react-router-dom";
import './Appbar.css';


function Appbar({title, url}) {
  const navigate = useNavigate();

  return (
    <Button key={title} sx={{ color: '#fff' }} onClick={()=>{navigate(url);}}>
      {title}
    </Button>
  );
}

export default Appbar;
