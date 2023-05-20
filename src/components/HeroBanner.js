import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p= '20px'>
        <Typography color="#E08B28"
        fontWeight="600" fontSize="26px">
            BODYBOOST
        </Typography>
        <Typography fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px"}}} mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Discover a new level of fitness with our app's advanced features <br />
        such as a body fat calculator, personalized meal planner,<br /> 
        and workout planner, designed to help users achieve their fitness <br /> 
        goals with ease and efficiency.
        </Typography>
        <Button variant='contained' 
        color='error' href='#exercises' 
        sx={{ backgroundColor: "#E08B28", color:"#000000",
        padding:"10px"
        }}>
            Explore Exercises
        </Button>
        <Typography
            fontWeight="600"
            fontSize="200px"
            color="#E08B28"
            mt="50px"
            sx={{
                display: { lg: 'block', xs: 'none'},
                opacity: '0.1'
            }}
        >
            Get Ready
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner