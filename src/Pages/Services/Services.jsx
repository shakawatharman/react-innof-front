import { Box, CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CardService from '../../Components/CardService/CardService.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import PageBanner from '../../Components/PageBanner/PageBanner.jsx';
import useAuth from '../../Hooks/useAuth.js';
import useServices from '../../Hooks/useServices.js';
import SectionBanner from '../Homepage/SectionBanner/SectionBanner.jsx';
import SectionServices from '../Homepage/SectionServices/SectionServices.jsx';
import { useStyles } from './ServicesStyle.js';

const Services = () => {
    const classes = useStyles()
    const [services] = useServices();
    const { loading } = useAuth();
    return (
        <>
            <Navbar></Navbar>
            <PageBanner></PageBanner>
            <Box style={{padding:"50px 0"}} className={classes.sectionTeam}>
                <Container>
                    <Typography variant='h6'>We help companies to create great</Typography>
                    <Typography className={classes.sectionHeading} variant='h3'>---</Typography>
                    <Grid container spacing={4}>
                        {
                            services.map((service)=>
                                <CardService key={service._id} service={service} />
                            )

                        }
                    </Grid>
                </Container>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Services;