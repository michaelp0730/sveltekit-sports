import type { Team } from './Team';

export interface PredictorResponse {
    name: string,
    shortName: string,
    lastModified: string,
    homeTeam: Team,
    awayTeam: Team,
}