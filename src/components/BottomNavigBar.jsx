import {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import Paper from '@mui/material/Paper';


export default function BottomNavigBar() {
  const [value, setValue] = useState(0);


  return (
    <Box sx={{ pb: 7, display:{xs:"block", sm:"none"} }} >
      <CssBaseline />
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue)=> {setValue(newValue)}}
        >
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
          
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
