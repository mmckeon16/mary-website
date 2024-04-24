import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './Appbar.css';


function Appbar({item}) {
  return (
    <Button key={item} sx={{ color: '#fff' }} onClick={()=>{window.alert('clicked')}}>
      {item}
    </Button>
  );
}

export default Appbar;
