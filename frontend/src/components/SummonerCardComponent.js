import { React } from 'react';

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CircularProgressWinrate } from './WinrateProgressComponent'
import { EloValidation } from '../helpers/SummonerElo';

export default function SummonerCardComponent(props){

    return (
        <Card sx={{ height: '50%', width: '100%', background: '#201E27', color: 'white', border: 1, borderColor: 'grey.500'}}>
            <CardHeader sx={{ height: '50%'}}
                avatar={
                    <Avatar
                        variant='square'
                        alt='Summoner icon'
                        src={props.summoner.iconUrl}
                        sx={{width:'5.5vw', height: '5.5vw', marginLeft: '1.5vw'}}
                    />
                }
                action={
                    <Container sx={{height: '210px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {EloValidation(props.summoner.tier)}
                    </Container>
                  }
                title={
                    <Typography sx={{ fontSize: '1.7vw', fontFamily: 'Lexend Deca', fontWeight: 700 }} >
                        {props.summoner.summonerName}
                    </Typography>
                    }
                subheader={
                    <Typography sx={{ fontSize: '1vw', fontFamily: 'Lexend Deca', fontWeight: 300 }}>
                        Nível {props.summoner.summonerLevel} - {props.summoner.tier} {props.summoner.rank}
                    </Typography>
                }
            />
            <Divider variant='middle' sx={{backgroundColor: 'darkgray'}}/>
            <CardContent sx={{ height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid container columns={16}>
                <Grid item xs={8}>
                    <Typography sx={{ fontSize: '1.7vw', fontFamily: 'Lexend Deca', fontWeight: 800, color: '#EDC988' }}>
                        WINS: {props.summoner.wins}
                    </Typography>
                    <Typography sx={{ fontSize: '1.7vw', fontFamily: 'Lexend Deca', fontWeight: 800, color: '#D7385E' }}>
                        LOSSES: {props.summoner.losses}
                    </Typography>
                </Grid>
                <Grid item xs={8} sx={{textAlign: 'center'}}>
                <CircularProgressWinrate value={parseInt(props.summoner.winRate)} />
                </Grid>
            </Grid>
        </CardContent>
        </Card>
    )
}
