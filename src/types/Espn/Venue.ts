export interface Venue {
    id: string,
    fullName: string,
    indoor: boolean,
    address: VenueAddress,
}

export interface VenueAddress {
    city: string,
    state: string,
}