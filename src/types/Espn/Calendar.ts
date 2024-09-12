export interface Calendar {
    label: string,
    value: string,
    startDate: string,
    endDate: string,
    entries: CalendarEntry[],
}

export interface CalendarEntry {
    label: string,
    alternateLabel: string,
    detail: string,
    value: string,
    startDate: string,
    endDate: string,
}