<script lang="ts">
    export let data;
</script>

{#if data}
    <h1>{data.prediction.name}</h1>
{:else}
    <h1>{data.prediction === undefined ? "Loading..." : "Error loading prediction"}</h1>
{/if}
