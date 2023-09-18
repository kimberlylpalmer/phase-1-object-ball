function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assits: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evens": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assits: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assits: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assits: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assits: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assits: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assits: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assits: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assits: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Hayword": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assits: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  const gameObj = gameObject();
  const players = { ...gameObj.home.players, ...gameObj.away.players }
  
  const playerStatsObj = (playerName) => {
    return players[playerName]
  }
  
  
  
  function playerPointsScored() {
    let pointsScored = numPointsScored(playerName);
    return pointsScored;
  }
  
  const numPointsScored = playersName => {
    return playerStatsObj(playersName) ? playerStatsObj(playersName).points : "No players exist by that name!"
  }
  
  const shoeSize = playersName => {
    for (let team in gameObj) {
      const teamPlayerObj = gameObj[team].players
      const player = teamPlayerObj[playersName]
      if (player) {
        return player.shoe
      }
    }
    return "Not on this roster!"
  }
  
  const teamColors = teamName => {
      for (let team in gameObj) {
          if (gameObj[team].teamName === teamName) {
              return gameObj[team].colors;
          }
      }
      return "Team Does Not Exist!";
  }
  
  console.log(teamColors("Charlotte Hornets"));
  
  function teamNames() {
      return [gameObj.home.teamName, gameObj.away.teamName];
  }
  console.log(teamNames());
  
  function playerNumbers(teamName) {
    for (let team in gameObj) {
      if(gameObj[team].teamName === teamName) {
        let players = gameObj[team].players;
          return Object.values(players).map(function(player) {
             return player.number;
      });
    }
    }   
    return "Team Does Not Exist";
  }
  
  console.log(playerNumbers("Brooklyn Nets"));
  
  function playerStats(playerName) {
    return players[playerName] || "No player exists by that name!";
  }
  
  console.log(playerStats("DeSagna Diop"))
  
  function bigShoeRebounds() {
    let maxShoeSize = 0;
    let playerWithMaxShoeSize = null;
  
    for (let team in gameObj) {
      for (let player in gameObj[team].players) {
        if (gameObj[team].players[player].shoe > maxShoeSize) {
          maxShoeSize = gameObj[team].players[player].shoe;
          playerWithMaxShoeSize = gameObj[team].players[player];
        }
      }
    }
  
    return playerWithMaxShoeSize ? playerWithMaxShoeSize.rebounds : "No player found"
  }
  console.log(bigShoeRebounds());
  