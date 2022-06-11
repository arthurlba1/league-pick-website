import { styled } from '@mui/material/styles';

import logo from './../assets/logo/logo-navbar-background.png'

const Logo = styled('div')(({ theme }) => ({
    position: 'relative',
    top: '0.3em',
    width: '13em',
}));

export default function LeaguePickLogoComponent() {
    return (
        <Logo>
            <img
                src={logo}
                width='170px'
                height='65px'
                alt='logo'
            />
        </Logo>
    );
}
