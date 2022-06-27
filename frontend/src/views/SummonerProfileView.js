import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import api from '../services/backend'
import NavbarComponent from '../components/NavbarComponent'
import SummonerCardComponent from '../components/SummonerCardComponent'

export default function SummonerProfileView() {
    const [summoner, setSummoner] = useState(Object);
    const [loading, setLoading] = useState(0);
    const { id } = useParams();

    useEffect(() => {  
        async function requestSummonerData(){
            setLoading(1);
            await api.get(`/summoner/${id}`)
            .then(res => {
                setSummoner(res.data)
            })
            .catch(e => {
                alert('Something wrong happened')
            })
            setLoading(0)
        }
        requestSummonerData();
    }, []);
    
    return (
        <>
        <NavbarComponent />
        <Box sx={{ flexGrow: 1 }}>
            <Grid container sx={{ height: '91.9vh' }}>
                <Grid item xs />
                <Grid item xs sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    {
                        loading ?
                        <CircularProgress />
                        :
                        <SummonerCardComponent summoner={summoner}/>
                    }
                </Grid>
                <Grid item xs />
            </Grid>
        </Box>
        </>
    )
}
