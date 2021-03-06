# Documentation
Oficial league pick project documentation.

![Banner](/league_pick_banner.png?raw=true)

## About
The focus of the project is for you to be able to view the best hero choice to use within
a league of legends match, in addition to being able to view your personal status and
information about the heroes available in the game.

## Technologies used
Some technologies were used for the proper functioning and development of the project,
both in the backend and in the frontend.

### Frontend
The framework used for development was ReactJs for its solid state in UI creation,
along with it some libraries and dependencies were added.

- React
- Material UI
- Material UI Icons
- Axios

### Backend
In the backend, NodeJS is the execution environment used to handle the amount of requests that
will be made in the creation of the choice, requesting the champions that are in the match.
- Express
- Axios
- Cors


## League pick communication flow
User requests are sent to the backend that will handle and request the riot api, returning the necessary
to the user after handling the response.

All requests will pass through the backend being handled, returning to the user the response with the necessary data.

###### _Note:_ flow visualized through the image below.

![Banner](/flux_of_leaguepick.png)

### Use case
_..._

### Figma
_..._

### Deploy
_..._

### Troubleshooting

_..._

##### Documentation under construction
