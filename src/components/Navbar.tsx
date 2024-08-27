import React from 'react';
import { Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, TextField, Popover, MenuItem, Avatar } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface Doctor {
  name: string;
  image: string;
  specialty: string;
}

interface Doctors {
  [key: string]: Doctor[];
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [speciality, setSpeciality] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState<string>('');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>, name: string) => {
    setAnchorEl(event.currentTarget);
    setSpeciality(name);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSpeciality(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlePersonIconClick = () => {
    setDrawerOpen(true);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { name: 'Home', submenu: null },
    { 
      name: 'Departments', 
      submenu: ['IT', 'Administrative', 'Pharmacy', 'Emergency'] 
    },
    { 
      name: 'Doctors', 
      submenu: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'] 
    },
    { name: 'Patients', submenu: null },
  ];

  const doctors: Doctors = {
    Cardiology: [
      { name: 'Dr. Ahlam Ballouchi', image: 'https://i.ytimg.com/vi/Rj-M1VQVRRU/maxresdefault.jpg', specialty: 'Cardiology' },
      { name: 'Dr. Abdillah Sadki', image: 'https://th.bing.com/th/id/R.99b44a7b51e68bcaf18b19db23fb681f?rik=kNTAJZEnVYAuBQ&pid=ImgRaw&r=0', specialty: 'Cardiology' },
    ],
    Neurology: [
      { name: 'Dr. Ahlam Ballouchi', image: 'https://i.ytimg.com/vi/Rj-M1VQVRRU/maxresdefault.jpg', specialty: 'Neurology' },
      { name: 'Dr. Abdillah Sadki', image: 'https://th.bing.com/th/id/R.99b44a7b51e68bcaf18b19db23fb681f?rik=kNTAJZEnVYAuBQ&pid=ImgRaw&r=0', specialty: 'Neurology' },
    ],
    Orthopedics: [
      { name: 'Dr. Ahlam Ballouchi', image: 'https://i.ytimg.com/vi/Rj-M1VQVRRU/maxresdefault.jpg', specialty: 'Orthopedics' },
      { name: 'Dr. Abdillah Sadki', image: 'https://th.bing.com/th/id/R.99b44a7b51e68bcaf18b19db23fb681f?rik=kNTAJZEnVYAuBQ&pid=ImgRaw&r=0', specialty: 'Orthopedics' },
    ],
    Pediatrics: [
      { name: 'Dr. Ahlam Ballouchi', image: 'https://i.ytimg.com/vi/Rj-M1VQVRRU/maxresdefault.jpg', specialty: 'Pediatrics' },
      { name: 'Dr. Abdillah Sadki', image: 'https://th.bing.com/th/id/R.99b44a7b51e68bcaf18b19db23fb681f?rik=kNTAJZEnVYAuBQ&pid=ImgRaw&r=0', specialty: 'Pediatrics' },
    ],
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Profile', 'Settings', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className={styles.navbarContainer} sx={{ display: 'flex', alignItems: 'center', bgcolor: darkMode ? 'background.default' : 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={(event) => handleButtonClick(event, item.name)}
            className={styles.menuButton} 
            endIcon={item.submenu ? <ExpandMore /> : null}
            sx={{ marginRight: 2 }} 
          >
            {item.name}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
      <IconButton
        color="inherit"
        sx={{ marginLeft: 2, color: darkMode ? 'yellow' : 'grey' }} 
        onClick={toggleDarkMode}
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <IconButton
        color="inherit"
        sx={{ marginLeft: 3, marginRight: 2, color: darkMode ? 'yellow' : 'grey' }} 
        onClick={handlePersonIconClick}
      >
        <PersonIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{ 
          style: { 
            width: '300px',
            backgroundColor: darkMode ? 'rgba(26, 133, 214, 0.5)' : 'rgba(255, 255, 255, 0.8)', 
          } 
        }}
      >
        {speciality && menuItems.find(item => item.name === speciality)?.submenu?.map((option, subIndex) => (
          <MenuItem 
            key={subIndex} 
            onClick={() => setSpeciality(option)}
            className={styles.submenuItem}
          >
            <Typography variant="subtitle1">{option}</Typography>
          </MenuItem>
        ))}
        {speciality && doctors[speciality]?.map((doctor: Doctor, docIndex: number) => (
          <MenuItem key={docIndex}>
            <Avatar src={doctor.image} sx={{ width: 56, height: 56, marginRight: 2 }} />
            <Typography variant="body1">{doctor.name}</Typography>
          </MenuItem>
        ))}
      </Popover>
    </Box>
  );
};

export default Navbar;
