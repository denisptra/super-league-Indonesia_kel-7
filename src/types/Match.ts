interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
}

interface Team {
  id: number;
  name: string;
  // logo: string;
  // short_name: string;
}