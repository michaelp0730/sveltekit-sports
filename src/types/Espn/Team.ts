import type { Venue } from './Venue';
import type { Link } from './Link';

export interface Team {
    id: string,
    uid: string,
    location: string,
    name: string,
    abbreviation: string,
    displayName: string,
    shortDisplayName: string,
    color: string,
    alternateColor: string,
    isActive: boolean,
    venue: Venue,
    links: Link[],
    logo: string,
    conferenceId: string,
}