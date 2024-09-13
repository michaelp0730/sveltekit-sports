<script lang="ts">
    import type { PredictorResponse } from '../../../../types/Espn/Predictor/PredictorResponse';

    export let data: { prediction: PredictorResponse };

    const prediction: PredictorResponse = data.prediction;
</script>

{#if data}
    <h1>{prediction.name}</h1>
    <h2>Predictions</h2>
    <table cellpadding="5" cellspacing="5">
    <thead>
        <tr>
            <th>Type</th>
            <th>Away Team</th>
            <th>Home Team</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Win Probability</td>
            <td>{prediction.awayTeam.statistics[0].displayValue}%</td>
            <td>{prediction.homeTeam.statistics[0].displayValue}%</td>
        </tr>
        <tr>
            <td>Predicted Point Difference</td>
            <td>{prediction.awayTeam.statistics[6].displayValue}</td>
            <td>{prediction.homeTeam.statistics[6].displayValue}</td>
        </tr>
    </tbody>
    </table>
{:else}
    <h1>{prediction === undefined ? "Loading..." : "Error loading prediction"}</h1>
{/if}
