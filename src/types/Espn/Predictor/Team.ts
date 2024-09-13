export interface Team {
    statistics: TeamStatistics[],
}

export interface TeamStatistics {
    name: string,
    displayName: string,
    shortDisplayName: string,
    description: string,
    abbreviation: string,
    value: number,
    displayValue: string,
}