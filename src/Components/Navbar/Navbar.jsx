import { AppBar,Avatar,Badge,Box,Button,Chip,Container,Link,Paper,Toolbar,Typography} from '@material-ui/core';
import { Cancel, Notifications, Person, Search, PedalBikeIcon, Menu, CancelRounded } from '@material-ui/icons';
import React, { useState } from 'react';
import { useStyles } from './NavbarStyle';
import logo from '../../assets/img/innof-Logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Navbar = () => {
    
    const [menuOpen,setMenuOpen] = useState(false);
    const classes = useStyles({menuOpen});
    
    const {user,logout} = useAuth();

    //console.log(menuOpen);

    return (
        <>
          <AppBar className={classes.appbar}>
              <Container>
              <Toolbar className={classes.toolbar}>
                   
                    <img className={classes.logo} src={logo} alt="logo" />
                    {/* <Typography variant='h2'>INNOF</Typography><br />
                    <Typography>Innovation Factory</Typography> */}
                    
                   <Box className={classes.menu} sx={{ flexGrow: 1 }}>
                        <NavLink to="/"><Button>Home</Button></NavLink>
                        <NavLink to="/services"><Button>Services</Button></NavLink>
                        <NavLink to="/about"><Button>About</Button></NavLink>
                        <NavLink to="/contact"><Button>Contact</Button></NavLink>
                        <NavLink to="/dashboard"><Button>Dashboard</Button></NavLink>
                    </Box>
                
                   <div className={classes.login}>
                       {
                        !user?.email ? 
                        <NavLink to="/login"><Button variant='outlined' color="primary">Login</Button></NavLink>
                         :
                        <>
                        <Chip size="medium"
                            avatar={<Avatar alt="Sajib" src={user.photoURL}></Avatar>}
                            label={user.displayName}
                            variant="outlined"
                            color="primary"
                            /><Button onClick={logout} size="small" variant='outlined' color="secondary">Logout</Button></>
                        }
                   </div>
                   {
                       !menuOpen ? 
                       <Menu onClick={()=>setMenuOpen(true)} className={classes.menuBtn} /> : 
                        <Cancel onClick={()=>setMenuOpen(false)} className={classes.menuBtn} />
                   }
              </Toolbar>
              </Container>
          </AppBar>  
        </>
    );
};

export default Navbar;