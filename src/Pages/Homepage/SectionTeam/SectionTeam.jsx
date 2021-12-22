import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './SectionTeamStyle';

const SectionTeam = () => {

    const classes = useStyles();

    return (
        <Box className={classes.sectionTeam}>
            <Container>
                <Typography variant='h6'>Meet our team</Typography>
                <Typography className={classes.sectionHeading} variant='h3'>Our Team Member</Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <img className={classes.teamImg} src="http://mui.com//static/images/avatar/1.jpg" alt="team photo" />
                        <Typography variant='h6'>Elon Mask</Typography>
                        <Typography variant='body1'>SpaceX CEO</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img className={classes.teamImg} src="http://mui.com//static/images/avatar/2.jpg" alt="team photo" />
                        <Typography variant='h6'>Elon Mask</Typography>
                        <Typography variant='body1'>SpaceX CEO</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img className={classes.teamImg} src="http://mui.com//static/images/avatar/3.jpg" alt="team photo" />
                        <Typography variant='h6'>Elon Mask</Typography>
                        <Typography variant='body1'>SpaceX CEO</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img className={classes.teamImg} src="http://mui.com//static/images/avatar/4.jpg" alt="team photo" />
                        <Typography variant='h6'>Elon Mask</Typography>
                        <Typography variant='body1'>SpaceX CEO</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img className={classes.teamImg} src="http://mui.com//static/images/avatar/5.jpg" alt="team photo" />
                        <Typography variant='h6'>Elon Mask</Typography>
                        <Typography variant='body1'>SpaceX CEO</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img className={classes.teamImg} src="http://mui.com//static/images/avatar/6.jpg" alt="team photo" />
                        <Typography variant='h6'>Elon Mask</Typography>
                        <Typography variant='body1'>SpaceX CEO</Typography>
                    </Grid>
                
                </Grid>
            </Container>

        </Box>
    );
};

export default SectionTeam;