import type { Logo } from './Logo';
import type { Calendar } from './Calendar';

export interface League {
    id: string,
    uid: string,
    name: string,
    abbreviation: string,
    midsizeName: string,
    slug: string,
    season: LeagueSeason,
    logos: Logo[],
    calendarType: string,
    calendarIsWhitelist: boolean,
    calendarStartDate: string,
    calendarEndDate: string,
    calendar: Calendar[],
}

export interface LeagueSeason {
    year: number,
    startDate: string,
    endDate: string,
    displayName: string,
    type: LeagueSeasonType,
}

export interface LeagueSeasonType {
    id: string,
    type: number,
    name: string,
    abbreviation: string,
}