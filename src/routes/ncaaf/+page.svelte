<script>
    import { onMount } from 'svelte';
    import dayjs from 'dayjs';

    let response = {};
    let uniqueDates = [];
    let selectedDate = '';
    let filteredGames = [];

    onMount(async () => {
        const res = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard');
        response = await res.json();
        console.log('response: ', response);

        // Extract unique dates
        const datesSet = new Set(response.events.map(evt => dayjs(evt.date).format('YYYY-MM-DD')));
        uniqueDates = Array.from(datesSet);

        // Initially display all games
        filteredGames = response.events;
    });

    function parseDate(utcString) {
        return dayjs(utcString).format('MMMM D, YYYY h:mm A');
    }

    function filterGames() {
        if (selectedDate) {
            filteredGames = response.events.filter(event =>
                dayjs(event.date).format('YYYY-MM-DD') === selectedDate
            );
        } else {
            filteredGames = response.events;
        }
    }
</script>

<h1>NCAAF Games</h1>

<select bind:value={selectedDate} on:change={filterGames}>
    <option value="">All Dates</option>
    {#each uniqueDates as date}
        <option value={date}>{dayjs(date).format('MMMM D, YYYY')}</option>
    {/each}
</select>

{#if response.events}
    {#if filteredGames.length}
        {#each filteredGames as game}
            <div style="border: 1px solid #ccc; margin-top: 20px; padding: 10px;">
                <h2>{game.name}</h2>
                <p>{parseDate(game.date)}</p>
                <p>Links</p>
                <ul>
                    {#each game.links as link}
                        <li>
                            <a href="{link.href}">{link.text}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    {:else}
        <p>No games available for the selected date.</p>
    {/if}
{:else}
    <p>Loading...</p>
{/if}