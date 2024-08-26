import React, { useState } from 'react';
import { Button, Typography, Box, Avatar, TextField, IconButton, Popover, MenuItem } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';

import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

interface Doctor {
  name: string;
  image: string;
  specialty: string;
}

interface DoctorsBySpecialty {
  [key: string]: Doctor[];
}

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [speciality, setSpeciality] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [openPopover, setOpenPopover] = useState<null | HTMLElement>(null);
  
  const navigate = useNavigate(); 

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
    navigate('/login'); 
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

  const doctors: DoctorsBySpecialty = {
    Cardiology: [
      { name: 'Dr. Ahlam Ballouchi', image: 'https://i.ytimg.com/vi/Rj-M1VQVRRU/maxresdefault.jpg', specialty: 'Cardiology' },
      { name: 'Dr. Abdillah Sadki', image: 'https://th.bing.com/th/id/R.99b44a7b51e68bcaf18b19db23fb681f?rik=kNTAJZEnVYAuBQ&pid=ImgRaw&r=0', specialty: 'Cardiology' },
    ],
    Neurology: [
      { name: 'Dr. Ahlam Ballouchi', image: 'https://i.ytimg.com/vi/Rj-M1VQVRRU/maxresdefault.jpg', specialty: 'Cardiology' },
      { name: 'Dr. Abdillah Sadki', image: 'https://th.bing.com/th/id/R.99b44a7b51e68bcaf18b19db23fb681f?rik=kNTAJZEnVYAuBQ&pid=ImgRaw&r=0', specialty: 'Cardiology' },
     ],
    Orthopedics: [
     { name: 'Dr. Ahlam Ballouchi', image: 'https://i.ytimg.com/vi/Rj-M1VQVRRU/maxresdefault.jpg', specialty: 'Cardiology' },
      { name: 'Dr. Abdillah Sadki', image: 'https://th.bing.com/th/id/R.99b44a7b51e68bcaf18b19db23fb681f?rik=kNTAJZEnVYAuBQ&pid=ImgRaw&r=0', specialty: 'Cardiology' },
     ],
    Pediatrics: [
     { name: 'Dr. Ahlam Ballouchi', image: 'https://i.ytimg.com/vi/Rj-M1VQVRRU/maxresdefault.jpg', specialty: 'Cardiology' },
      { name: 'Dr. Abdillah Sadki', image: 'https://th.bing.com/th/id/R.99b44a7b51e68bcaf18b19db23fb681f?rik=kNTAJZEnVYAuBQ&pid=ImgRaw&r=0', specialty: 'Cardiology' },
    ],
  };

  return (
    <Box className={styles.navbarContainer} sx={{ display: 'flex', alignItems: 'center' }}>
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
  sx={{ marginLeft: 20, marginRight: 3, color:'rgb(64, 155, 212)' }} 
  onClick={handlePersonIconClick}
>
  <PersonIcon />
</IconButton>
      

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
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
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
        {speciality && doctors[speciality]?.map((doctor, docIndex) => (
          <MenuItem key={docIndex} sx={{ display: 'flex', alignItems: 'center', padding: 1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
            <Avatar src={doctor.image} alt={doctor.name} sx={{ width: 50, height: 50, marginRight: 1 }} />
            <Typography>{doctor.name}</Typography>
          </MenuItem>
        ))}
      </Popover>
    </Box>
  );
};

export default Navbar;
