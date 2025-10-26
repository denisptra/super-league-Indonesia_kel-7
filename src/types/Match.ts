export interface Match {
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  formattedDate?: string;
  formattedTime?: string;
}

export interface Team {
  name: string;
  logo?: string;
  // image?: string;
}