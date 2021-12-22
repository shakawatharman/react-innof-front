import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './SectionBannerStyle';
import bannerBg from '../../../assets/img/banner-img.jpg';
const bannerBg3 = 'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg'
const bannerBg4 = 'https://panda.axiomthemes.com/wp-content/uploads/2021/11/image-1-copyright.svg'

const SectionBanner = () => {
    const classes = useStyles()
    return (
        <Box style={{backgroundImage:'url('+bannerBg3+')'}} className={classes.bannerSection}>
            <Container className={classes.bannerText}>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.bannerHeading} variant='h2'>Let Us serve you</Typography>
                    <Button variant='contained' color='primary'>Contact Us</Button>
                </Grid>
                {/* <Grid md="6" sm="12">
                    <img src='https://panda.axiomthemes.com/wp-content/uploads/2021/11/image-1-copyright.svg' alt=""></img>
                </Grid> */}
            </Container>
        </Box>
    );
};

export default SectionBanner;