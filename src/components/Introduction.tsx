import React from 'react';
import Box from '@mui/system/Box';

const Introduction: React.FC = () => {
  return (
    <Box id="aboutMe" 
      sx={{
      display: 'flex',
      backgroundColor: '#e3dddd',
      width: '800px',
      height: '350px',
      margin: '150px auto',
      color: 'black', 
    }}>
      <Box sx={{ flex: '1' }}>
        <h1>Here is who I am</h1>
        <p> Hello</p>
      </Box>
      <Box sx={{ flex: '1' }}>
        <img src="/face.png"/>
      </Box>
    </Box>
  );
}

export default Introduction;


