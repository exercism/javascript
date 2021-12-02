export const tournamentTally = (input) => {
  const header = 'Team                           | MP |  W |  D |  L |  P';

  if (!input) return header;

  const scores = input.split('\n');

  let teamResults = calculateTeamResults(scores);
  teamResults
    .sort((teamA, teamB) => (teamA.name < teamB.name ? 1 : -1))
    .sort((teamA, teamB) => (teamA.points < teamB.points ? 1 : -1));
  teamResults = teamResults
    .map((result) => {
      return `${result.name.padEnd(30, ' ')} |  ${result.games} |  ${
        result.wins
      } |  ${result.draws} |  ${result.losses} | ${result.points
        .toString()
        .padStart(2, ' ')}`;
    })
    .join('\n');

  return `${header}\n${teamResults}`;
};

const calculateTeamResults = (scores) => {
  const results = [];

  for (const score of scores) {
    const [homeTeam, awayTeam, result] = score.split(';');

    let indexOfHomeTeam = results.map((team) => team.name).indexOf(homeTeam);
    if (indexOfHomeTeam === -1) {
      results.push(createTeamResults(homeTeam));
      indexOfHomeTeam = results.length - 1;
    }

    let indexOfAwayTeam = results.map((team) => team.name).indexOf(awayTeam);
    if (indexOfAwayTeam === -1) {
      results.push(createTeamResults(awayTeam));
      indexOfAwayTeam = results.length - 1;
    }

    results[indexOfHomeTeam].games += 1;
    results[indexOfAwayTeam].games += 1;

    switch (result) {
      case 'win':
        results[indexOfHomeTeam].points += 3;
        results[indexOfHomeTeam].wins += 1;
        results[indexOfAwayTeam].losses += 1;
        break;
      case 'loss':
        results[indexOfAwayTeam].points += 3;
        results[indexOfAwayTeam].wins += 1;
        results[indexOfHomeTeam].losses += 1;
        break;
      case 'draw':
        results[indexOfHomeTeam].points += 1;
        results[indexOfHomeTeam].draws += 1;
        results[indexOfAwayTeam].points += 1;
        results[indexOfAwayTeam].draws += 1;
        break;
      default:
        break;
    }
  }

  return results;
};

const createTeamResults = (teamName) => {
  return {
    name: teamName,
    wins: 0,
    losses: 0,
    draws: 0,
    points: 0,
    games: 0,
  };
};
