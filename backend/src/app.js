const express = require("express");
const { json } = require("express");
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

app.use(json());
app.use(cors());
app.listen(process.env.PORT || 8080);

app.get('/summoner/:summonerName', async (req, res) => {
  const { summonerName } = req.params

  const summonerIdResponse = await axios.get(`${process.env.LOL_REGION}/lol/summoner/v4/summoners/by-name/${encodeURI(summonerName)}`,
  { headers:
    { 'X-Riot-Token': process.env.LOL_KEY }
  })
  .catch((error) => {
    console.log('error ' + error);
  });

  const { id, profileIconId, summonerLevel } = summonerIdResponse.data;
  
  const responseRanked = await axios
    .get(`${process.env.LOL_REGION}/lol/league/v4/entries/by-summoner/${id}`, {
      headers: { 'X-Riot-Token': process.env.LOL_KEY },
    })
    .catch((error) => {
      console.log('error ' + error);
    });

  const { tier, rank, wins, losses, queueType } = responseRanked.data[1]
    ? responseRanked.data[1]
    : responseRanked.data[0];

  res.json({
    summonerName,
    iconUrl: `${process.env.LOL_ICONS}/${profileIconId}.png`,
    summonerLevel,
    tier,
    rank,
    wins,
    losses,
    queueType,
    winRate: ((wins / (wins + losses)) * 100).toFixed(1),
  });

});
