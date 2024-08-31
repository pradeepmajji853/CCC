import React from 'react'
import Navbar from '../components/Navbar'
import "./LearningResources.css"
import { Box, CircularProgress, Typography } from '@mui/material';

function LearningResources() {
  return (
    <div className='learning-resources'>
      <Navbar/>
      <div className="resources">
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: '#fff',
      }}
    >
      <CircularProgress color="primary" size={60} thickness={4} />
      <Typography variant="h4" sx={{ mt: 3 }}>
        Coming Soon
      </Typography>
    </Box>


      </div>      
    </div>
  )
}

export default LearningResources
