import { React } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import LeaguePickLogoComponent from './LeaguePickLogoComponent';
import RoutesComponent from './RoutesComponent';
import SearchPlayerComponent from './SearchPlayerComponent';

export default function NavbarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position='static' sx={{width: '100%', background: '#1D1B23'}}>
        <Toolbar sx={{padding: 0 }}>
          <LeaguePickLogoComponent />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <RoutesComponent />
          </Typography>
          <SearchPlayerComponent />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
