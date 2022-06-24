import { React } from 'react';

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SummonerCardComponent(props){

    return (
        <Card sx={{ height: '50%', width: '100%', background: '#201E27', color: 'white', border: 1, borderColor: 'grey.500'}}>
            <CardHeader sx={{ height: '50%' }}
                avatar={
                    <Avatar
                        variant='square'
                        alt='Summoner icon'
                        src={props.summoner.iconUrl}
                        sx={{width:'5.5vw', height: '5.5vw'}}
                    />
                }
                title={
                    <Typography
                        sx={{
                            fontSize: '1.7vw',
                            fontFamily: 'Lexend Deca',
                            fontWeight: 700
                        }}
                    >
                        {props.summoner.summonerName}
                    </Typography>
                    }
                subheader={
                    <Typography
                        sx={{
                            fontSize: '1vw',
                            fontFamily: 'Lexend Deca',
                            fontWeight: 300
                        }}>
                        Nível {props.summoner.summonerLevel} - {props.summoner.tier} {props.summoner.rank}
                    </Typography>
                }
            />
            <CardContent sx={{ height: '50%' }}>
                <p>test</p>
        </CardContent>
        </Card>
    )
}
