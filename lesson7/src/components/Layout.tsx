import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
    Box, Drawer, List, ListItem, ListItemButton, 
    ListItemIcon, ListItemText, Switch, FormControlLabel, 
    Typography, Divider, Toolbar 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import { useColorMode } from './ThemeContext';

const drawerWidth = 240;

const Layout: React.FC = () => {
  const { toggleColorMode, mode } = useColorMode();
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Heroes', path: '/heroes', icon: <PeopleIcon /> },
    { text: 'About', path: '/about', icon: <InfoIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                Rick & Morty App
            </Typography>
        </Toolbar>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                component={Link} 
                to={item.path}
                selected={location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
            <FormControlLabel
                control={<Switch onChange={toggleColorMode} checked={mode === 'dark'} />}
                label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            />
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;