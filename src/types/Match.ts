export interface Match {
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  formattedDate?: string;
  formattedTime?: string;
  score_a: number;
  score_b: number;
  status: string;
}

export interface Team {
  rank: number;
  name: string;
  logo?: string;
  image: string;
}