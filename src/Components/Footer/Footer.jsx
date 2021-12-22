import { Box, Button, Container, Grid, Link, Typography,ImageListItem,ImageList } from '@material-ui/core';
import React from 'react';
import { useStyles } from './FooterStyle';
import logo from '../../assets/img/innofLogo.png';
import { ArrowLeftSharp, Email, LocationCity, Person, Phone, PhoneCallback, WebAssetOutlined } from '@material-ui/icons';

const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Box xs={{flexGrow:1}} className={classes.sectionProject}>
                <Container>
                   <Grid container spacing={3}>
                        <Grid item xs={12} sm={4} md={3}>
                            <div className={classes.brandinfo}>
                            <img className={classes.logo} src={logo} alt="agency" />
                            <Typography variant='body2'>lobortis mattis, turpis lacus placerat tortor, quis convallis metus, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2}>
                            <Typography className={classes.footerTitle} variant='h6'>Footer Menu</Typography>
                            <Box className={classes.footerMenu} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Link href="#"><Button><ArrowLeftSharp /> Home</Button></Link>
                                <Link href="#"><Button><ArrowLeftSharp />Service</Button></Link>
                                <Link href="#"><Button><ArrowLeftSharp />About</Button></Link>
                                <Link href="#"><Button><ArrowLeftSharp />Contact</Button></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                        <Typography className={classes.footerTitle} variant='h6'>Photo Gallery</Typography>
                        <ImageList  style={{marginBottom:20}} sx={{ width: 100, height: 60 }} cols={3} rowHeight={100}>
                        {[1,2,3,4,5,6].map((item) => (
                            <ImageListItem key={item}>
                            <img
                                src={'http://mui.com//static/images/avatar/'+item+'.jpg'}
                                alt="gallery"
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                         <Typography className={classes.footerTitle} variant='h6'>Contact Info</Typography>
                         <Box className={classes.footerContact} style={{backgroundImage:'url(https://demo.joomshaper.com/2013/optima/images/optima/map.png)'}}>
                             <div className={classes.contactItem}>
                                 <LocationCity /><Typography gutterBottom variant='body1'>90 Barnard St, Suite 191 <br />United States, GA 22222</Typography>
                             </div>
                             <div className={classes.contactItem}>
                                 <WebAssetOutlined /><Typography gutterBottom variant='body1'> www.domain.com</Typography>
                             </div>
                             <div className={classes.contactItem}>
                                 <Email /><Typography gutterBottom variant='body1'>email@domian.com</Typography>
                             </div>
                             <div className={classes.contactItem}>
                                 <PhoneCallback /><Typography gutterBottom variant='body1'>+1 222 333-4455</Typography>
                             </div>

                         </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;