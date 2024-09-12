import type { Venue } from './Venue';
import type { Competitor } from './Competitor';

export interface Competition {
    id: string,
    uid: string,
    date: string,
    attendance: number,
    type: CompetitionType,
    timeValid: boolean,
    neutralSite: boolean,
    conferenceCompetition: boolean,
    playByPlayAvailable: boolean,
    recent: boolean,
    venue: Venue,
    competitors: Competitor[],
}

export interface CompetitionType {
    id: string,
    abbreviation: string,
}

export interface CompetitionStatus {
    clock: number,
    displayClock: string,
    period: number,
    type: CompetitionStatusType,
    isTBDFlex: boolean,
}

export interface CompetitionStatusType {
    id: string,
    name: string,
    state: string,
    completed: boolean,
    description: string,
    detail: string,
    shortDetail: string,
}