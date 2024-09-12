import type { Season } from './Season';

export interface EspnEvent {
    id: string,
    uid: string,
    date: string,
    name: string,
    shortName: string,
    season: Season,
}