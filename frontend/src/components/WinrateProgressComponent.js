import { React } from 'react';
import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export function CircularProgressWinrate(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} size='6.5vw' thickness={2.5} sx={{color: '#EDC988',}}/>
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Typography
            variant="caption"
            component="div"
            color="white"
            sx={{ textAlign: 'center', fontSize: '0.8vw', fontFamily: 'Lexend Deca', fontWeight: 700}}
        >
            {`${Math.round(props.value)}%`}
            <br/>
            WINRATE
        </Typography>
        </Box>
      </Box>
    );
}
