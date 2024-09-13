<script lang="ts">
    import type { PredictorResponse } from '../../../../types/Espn/Predictor/PredictorResponse';

    export let data: { prediction: PredictorResponse };

    const prediction: PredictorResponse = data.prediction;
</script>

<style>
    .prediction-container {
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 8px;
    }

    .predictions-table {
        border: 1px solid #ccc;
        padding: 10px;
    }

    .predictions-table th,
    .predictions-table td {
        margin: 10px;
        padding: 10px;
    }
</style>

{#if data}
    <div class="prediction-container">
        <h1>{prediction.name}</h1>
        <h2>Predictions</h2>
        <table class="predictions-table">
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
    </div>
{:else}
    <h1>{prediction === undefined ? "Loading..." : "Error loading prediction"}</h1>
{/if}
