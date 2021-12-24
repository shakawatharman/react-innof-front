import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { Link,useMatch,Routes,Route, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import ManageServices from '../ManageServices/ManageServices';
import AddService from '../AddService/AddService';
import AddTeamMember from '../AddTeamMember/AddTeamMember';
import AddReview from '../AddReview/AddReview';
import ManageUsers from '../ManageUsers/ManageUsers';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { Avatar, Button, Chip } from '@mui/material';
import { useStyles } from "./DashboardStyle"

const drawerWidth = 200;


function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles()
  const { user, admin, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link to={`/home`}>
            <ListItem button>
                <ListItemIcon style={{minWidth:30}}>
                <ArrowCircleRightOutlined />
                </ListItemIcon>
                <ListItemText primary='Homepage' />
            </ListItem>
          </Link>
        {/* <Link to="/dashboard/ManageOrders">
            <ListItem button>
                <ListItemIcon style={{minWidth:30}}>
                <ArrowCircleRightOutlined />
                </ListItemIcon>
                <ListItemText primary='Manage Order' />
            </ListItem>
          </Link>
        <Link to="/dashboard/MyOrders">
            <ListItem button>
                <ListItemIcon style={{minWidth:30}}>
                <ArrowCircleRightOutlined />
                </ListItemIcon>
                <ListItemText primary='My Order' />
            </ListItem>
          </Link> */}
        </List>
      {
        !admin && 
          <List>
            {['My Orders', 'Add Review'].map((text, index) => (
            <Link key={text} to={`/dashboard/${text.replace(/\s/g, '')}`}>
              <ListItem button>
                  <ListItemIcon style={{minWidth:30}}>
                  <ArrowCircleRightOutlined />
                  </ListItemIcon>
                  <ListItemText primary={text} />
              </ListItem>
            </Link>
            ))}
          </List>
      }
      <Divider />
      { admin && 
          <List>
            {['Manage Users','Manage Orders','Manage Services', 'Add Service','Add Team Member','Make Admin'].map((text, index) => (
              <Link className={classes.menulink} key={text} to={`/dashboard/${text.replace(/\s/g, '')}`}>
                <ListItem button>
                    <ListItemIcon style={{minWidth:30}}>
                    <ArrowCircleRightOutlined />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          {
            user?.email &&
            <>
            <Chip size="medium"
                avatar={<Avatar alt="Sajib" src={user.photoURL}></Avatar>}
                label={user.displayName}
                style={{marginLeft:40}}
                variant="contained"
                color="primary"
                />
              <Button onClick={logout} size="small" variant='' color="secondary">Logout</Button>
            </>
            }
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        style={{background:'#f1f4f6',height:'100vh'}}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph></Typography>

        <Routes>
              {
                !admin ? <Route path="/" element={<MyOrders />} /> :
                <Route path="/" element={<ManageOrders />} />
              }


              <Route path="/ManageUsers" element={<ManageUsers />} />
              <Route path="/ManageOrders" element={<ManageOrders />} />
              <Route path="/ManageServices" element={<ManageServices />} />
              <Route path="/MyOrders" element={<MyOrders />} />
              <Route path="/AddService" element={<AddService />} />
              <Route path="/AddTeamMember" element={<AddTeamMember />} />
              <Route path="/AddReview" element={<AddReview />} />
              <Route path="/MakeAdmin" element={<MakeAdmin />} />
        </Routes>
      </Box>


        

    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
