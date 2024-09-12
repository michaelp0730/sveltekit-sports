import type { Season } from './Season';
import type { EspnEvent } from './EspnEvent';
import type { Competition } from './Competition';

export interface FootballScoreboard {
    season: Season,
    week: Week,
    events: FootballEvent[],
}

export interface Week {
    number: number
}

export interface FootballEvent extends EspnEvent {
    week: Week,
    competitions: Competition[],
}