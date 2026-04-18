import { Box, TextField, Typography } from '@mui/material';
import React, { useEffect, useState, useMemo } from 'react';
// import HeroImg from '../../assets/HomePage/HeroImg.png';
// import HeroImg from '../../assets/HomePage/BestImg.avif';
import HeroImg from '../../assets/HomePage/beachImg.jpg';
import { Search } from '@mui/icons-material';
import {
  Button,
  Badge,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const [zoom, setZoom] = useState(1);
const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setZoom((prevZoom) => (prevZoom === 1 ? 1.1 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const transformStyle = useMemo(() => ({
    transform: `scale(${zoom})`,
    transition: 'transform 5s ease-in-out',
  }), [zoom]);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '24rem', sm: '100vh' },
        borderRadius: '0.5rem',
        position: 'relative',
        mt: 0.1,
        overflow: 'hidden', // Prevents image overflow on zoom
      }}
    >
      {/* Background Image with Zoom Effect */}
      <Box
        component="img"
        src={HeroImg}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
          position: 'absolute',
          top: 0,
          left: 0,
          ...transformStyle,
        }}
      />

      {/* Search Box */}
      <Box
        sx={{
          position: 'absolute',
          top: {xs:"70%" ,lg:'70%'},
          left: {xs:"60%" ,lg:'75%'},
          transform: 'translate(-50%, -50%)',
          width: { xs: '80%', sm: '60%', md: '50%', lg: '40%' },
          maxWidth: '600px',
          justifyContent : "center", 
          display : "flex", 
          alignItems : "center",
          flexDirection : "column", 
       gap : "50px"

        }}
      >
       <Typography  variant='h4'  sx={{textAlign:"center",   top : "10vh", color:"white", fontFamily:" 'Waltograph',sans-serif ",fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }, px: { xs: 2, sm: 3 },  }}>Leave Only Footprints, Take Only Memories.</Typography>
      
       <Button
                onClick={()=>{
                  navigate("/stays")
                }}
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  display: "flex",
                 
                  alignItems: "center",
                  textTransform: "none",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
              >
                <Typography sx={{ mr: 1 }}>
                  {" "}
                 Explore Tours
                </Typography>
              </Button>

      </Box>
    </Box>
  );
};

export default HeroSection;
