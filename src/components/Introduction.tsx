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
        <h1 style={{ fontSize:'40px'}}>Here is who I am</h1>
        <p style={{ fontSize:'20px'}}> First of all, 
            thank you for visiting my website. I am glad 
            you took this opportunity to know me more. I am originally from Japan and am currently a 
           <strong> computer 
            science student </strong> at the University of British Columbia (UBC). 
            My goal is to become an expert <strong>software engineer</strong> specializing in
            web development. </p>
      </Box>
      <Box sx={{ flex: '1' }}>
        <img src="/face.png" style={{ width: '100%',height: 'auto' }} />
      </Box>
    </Box>
  );
}

export default Introduction;


