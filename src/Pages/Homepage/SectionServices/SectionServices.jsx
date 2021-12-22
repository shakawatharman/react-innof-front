import React from 'react';
import { Box, CircularProgress, Container, Grid, Link, Paper, Typography } from '@material-ui/core';
import { useStyles } from './SectionServicesStyle';
import { Laptop, MobileFriendly, Star } from '@material-ui/icons';
import useServices from '../../../Hooks/useServices';
import CardService from '../../../Components/CardService/CardService';
import useAuth from '../../../Hooks/useAuth';


const SectionServices = () => {

    const classes = useStyles();
    const [services] = useServices();
    const { loading } = useAuth();



    return (
        <Box className={classes.sectionTeam}>
            <Container>
                <Typography variant='h6'>We help companies to create great</Typography>
                <Typography className={classes.sectionHeading} variant='h3'>Our Services</Typography>
                {
                loading ??
                    <Box sx={{ display: 'flex',justifyContent:'center',mt:10 }}>
                        <CircularProgress />
                    </Box> 
                }
                <Grid container spacing={4}>
                    {
                        services.slice(0, 4).map((service)=>
                            <CardService key={service.id} service={service} />
                        )

                    }
                    
                </Grid>
            </Container>

        </Box>
    );
};

export default SectionServices;