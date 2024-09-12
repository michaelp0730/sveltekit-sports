import type { Team } from './Team';
import type { CuratedRank } from './CuratedRank';
import type { Record } from './Record';

export interface Competitor {
    id: string,
    uid: string,
    type: string,
    order: number,
    homeAway: string,
    team: Team,
    score: string,
    curatedRank: CuratedRank,
    records: Record[],
}