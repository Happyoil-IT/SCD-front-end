import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { signOut } from 'firebase/auth';
import { auth } from '../../server/firebase';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import HailIcon from '@mui/icons-material/Hail';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Box, CssBaseline, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';

const drawerWidth = 230;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    height: 50
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function PersistentDrawerLeft() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const UserSignOut = () => {
    withReactContent(Swal).fire({
      title: 'ต้องการออกจากระบบใช่หรือไม่',
      icon : 'error',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
      showCancelButton: true ,
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth).then(() => {
          navigate("/")
          Swal.fire('ออกจากระบบเรียบร้อย', '', 'success');
        }).catch(( error ) => {
          Swal.fire('ไม่สามารถออกจากระบบได้', '', 'error');
          console.log(error);
        })
      } else if (result.isDenied) {
          Swal.fire('ออกจากระบบล้มเหลว', '', 'error');
          console.log(error);
      }
    });
  }

  return (
    < >
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: theme.palette.warning.light }}>
        <Toolbar variant='dense'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
            {
                !open ?
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
                    <Typography variant="h5" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
                    <Typography variant="h5" color={theme.palette.error.dark} fontWeight="bold"gutterBottom>C</Typography>
                    <Typography variant="h5" color={theme.palette.info.dark} fontWeight="bold"gutterBottom>D</Typography>
                </Box>
                : ""
            }
            <Grid container spacing={2}>
              <Grid item xs={6}>

              </Grid>
              <Grid item xs={6} justifyContent="right" display="flex">
                <IconButton color="inherit">
                  <ManageAccountsIcon/>
                </IconButton>
                <IconButton color="inherit" onClick={UserSignOut}>
                  <MeetingRoomIcon/>
                </IconButton>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} >
                <Typography variant="h4" color={theme.palette.warning.dark} fontWeight="bold" gutterBottom>S</Typography>
                <Typography variant="h4" color={theme.palette.error.dark} fontWeight="bold" gutterBottom>C</Typography>
                <Typography variant="h4" color={theme.palette.info.dark} fontWeight="bold" gutterBottom>D</Typography>
            </Box>
          <IconButton onClick={handleDrawerClose} size="small">
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
          {['Dashboard','operation', 'order'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
               component={Link}
               to={index === 0 ? '/dashboard' : index === 1 ? '/operation' : "/order"}>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon /> : index === 1 ? <AccountCircleIcon /> : <ListAltIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['customerid', 'depot', 'poduct', 'restpoint', 'seller', 'situation', 'truck'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
               component={Link}
               to={index === 0 ? '/customers' : index === 2 ? "/product" : index === 3 ? "/respoint" : index === 4 ? "/seller" : index === 6 ? "/truck" : ""}>
                <ListItemIcon>
                  {index === 0 ? <SupportAgentIcon /> : index === 1 ? <StoreMallDirectoryIcon /> : index === 2 ? <Inventory2Icon/> : index === 3 ? <NaturePeopleIcon/> :index === 4 ? <HailIcon/> : index === 5 ? <SensorOccupiedIcon/> : index === 6 ? <LocalShippingIcon/> : ""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </ >
  );
}
