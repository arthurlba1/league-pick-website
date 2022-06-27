import bronze from '../assets/ranked-emblems/Emblem_Bronze.png';
import challenger from '../assets/ranked-emblems/Emblem_Challenger.png';
import diamond from '../assets/ranked-emblems/Emblem_Diamond.png';
import gold from '../assets/ranked-emblems/Emblem_Gold.png';
import grandmaster from '../assets/ranked-emblems/Emblem_Grandmaster.png';
import iron from '../assets/ranked-emblems/Emblem_Iron.png';
import master from '../assets/ranked-emblems/Emblem_Master.png';
import platinum from '../assets/ranked-emblems/Emblem_Platinum.png';
import silver from '../assets/ranked-emblems/Emblem_Silver.png';

import Avatar from '@mui/material/Avatar';

export function EloValidation(elo) {
  switch (elo) {
    case 'BRONZE':
      return <Avatar src={bronze} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    case 'IRON':
      return <Avatar src={iron} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    case 'SILVER':
      return <Avatar src={silver} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    case 'GOLD':
      return <Avatar src={gold} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    case 'PLATINUM':
      return <Avatar src={platinum} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    case 'DIAMOND':
      return <Avatar src={diamond} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    case 'GRANDMASTER':
      return <Avatar src={grandmaster} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    case 'MASTER':
      return <Avatar src={master} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    case 'CHALLENGER':
      return <Avatar src={challenger} alt='elo' sx={{width:'5.5vw', height: 'auto'}}/>;
    default: break;
  }
}
