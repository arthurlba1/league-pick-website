import React from 'react';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function RoutesComponent(){

  const navigate = useNavigate();

  async function handlePicksRouter() {
    navigate(`/`)
  }
  
  async function handleChampionsRouter() {
    navigate(`/champions`)
  }
  
  async function handleAboutRouter() {
    navigate(`/about`)
  }

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, marginLeft: '1em%'}}>
            <Button
                onClick={handlePicksRouter}
                sx={{ my: 2, color: 'white', display: '', marginRight: 2, textTransform: 'lowercase', fontSize: '18px', fontFamily: 'Lexend Deca'}}
              >
                picks
            </Button>
            <Button
                onClick={handleChampionsRouter}
                sx={{ my: 2, color: 'white', display: '', marginRight: 2, textTransform: 'lowercase', fontSize: '18px', fontFamily: 'Lexend Deca'}}
              >
                champions
            </Button>
            <Button
                onClick={handleAboutRouter}
                sx={{ my: 2, color: 'white', display: '', marginRight: 2, textTransform: 'lowercase', fontSize: '18px', fontFamily: 'Lexend Deca'}}
              >
                about
            </Button>
        </Box>
    );
}
