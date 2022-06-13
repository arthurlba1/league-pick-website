import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { React } from 'react';

import AboutView from '../views/PicksView';
import ChampionsView from '../views/ChampionsView';
import PicksView from '../views/PicksView';
import SummonerProfileView from '../views/SummonerProfileView';

export default function RoutesPath(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <PicksView /> } />
                <Route exact path='/summoner/:id' element={ <SummonerProfileView /> } />
                <Route exact path='/about' element={ <AboutView /> } />
                <Route exact path='/champions' element={ <ChampionsView /> } />
            </Routes>
        </BrowserRouter>
    )
}
