import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
               to={index === 0 ? '/' : index === 1 ? '/operation' : "/order"}>
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
          {['customerid', 'depot', 'poduct', 'restpoint', 'saller', 'situation', 'truck'].map((text, index) => (
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
