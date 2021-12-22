import { Box, Container, Typography, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useStyles } from './SectionProjectStyle';
import demo1 from '../../../assets/img/demo1.jpg'
import demo2 from '../../../assets/img/demo2.jpg'
import demo3 from '../../../assets/img/demo3.jpg'
import demo4 from '../../../assets/img/demo4.jpg'
import demo5 from '../../../assets/img/demo5.jpg'
import demo6 from '../../../assets/img/demo6.jpg'


const SectionProject = () => {
    const classes = useStyles()
    return (
        <Box xs={{flexGrow:1}} className={classes.sectionProject}>
            <Container>
                <Typography variant='h6'>Project Demos</Typography>
                <Typography className={classes.sectionHeading} variant='h3'>Stuning Homepage</Typography>

                <Grid container spacing={3}>
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={0}>
                        <img className={classes.demoImg} src={demo1} alt="agency" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0}>
                        <img className={classes.demoImg} src={demo2} alt="agency" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0}>
                        <img className={classes.demoImg} src={demo3} alt="agency" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0}>
                        <img className={classes.demoImg} src={demo4} alt="agency" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0}>
                        <img className={classes.demoImg} src={demo5} alt="agency" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0}>
                        <img className={classes.demoImg} src={demo6} alt="agency" />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default SectionProject;