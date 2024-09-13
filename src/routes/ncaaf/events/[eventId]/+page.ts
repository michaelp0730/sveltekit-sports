export async function load({ params, fetch }) {
    try {
        const eventId = params.eventId;
        console.log('Event ID:', eventId);  // Log the eventId to check its value

        const res = await fetch(`https://sports.core.api.espn.com/v2/sports/football/leagues/college-football/events/${eventId}/competitions/${eventId}/predictor`);

        if (!res.ok) {
            console.error(`Failed to fetch data: ${res.statusText}`);
            return { status: res.status, error: new Error('Failed to load data') };
        }

        const prediction = await res.json();
        console.log('Fetched prediction:', prediction);

        if (!prediction || !prediction.name) {
            console.error('500 - Invalid data received');
            return { status: 500, error: new Error('Invalid data received') };
        }

        return { prediction };
    } catch (err) {
        console.error('Error in load function:', err);
        return { status: 500, error: new Error('Internal Server Error') };
    }
}
