import { Box, Container, Typography, Grid, Paper } from '@material-ui/core';
import { Comment, CommentOutlined, FormatQuote, Person } from '@material-ui/icons';
import React from 'react';
import { useStyles } from './SectionFeaturesStyle';
import img from '../../../assets/img/FeatureImage.png'


const SectionFeatures = () => {
    const classes = useStyles()
    return (
        <Box xs={{flexGrow:1}} className={classes.sectionFeature}>
            <Container>
                

                <Grid container spacing={3}>
                    
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper elevation={0}>
                        <img className={classes.featureImg} src={img} alt="agency" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className={classes.featureRight}>
                        <Typography className={classes.sectionHeading} variant='h3'>We Are Good at!s</Typography>
                        <Paper className={classes.featureItem} elevation={0}>
                            <Person />
                            <Typography className={classes.featureText} variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sed do eiusmod tempor.</Typography>
                        </Paper>
                        <Paper className={classes.featureItem} elevation={0}>
                            <Person />
                            <Typography className={classes.featureText} variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sed do eiusmod tempor.</Typography>
                        </Paper>
                        <Paper className={classes.featureItem} elevation={0}>
                            <Person />
                            <Typography className={classes.featureText} variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sed do eiusmod tempor.</Typography>
                        </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default SectionFeatures;