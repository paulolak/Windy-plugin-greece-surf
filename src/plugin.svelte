<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { map } from '@windy/map';

    // We can easily add more regions to this list later
    const spots = [
        { name: "Vouliagmeni", lat: 37.8126, lon: 23.7770, desc: "The legendary Oceanida." },
        { name: "Davis Beach", lat: 37.9547, lon: 24.0108, desc: "East coast secret." },
        { name: "Legrena", lat: 37.6616, lon: 23.9982, desc: "Clean lines near Sounio." },
        { name: "Agios Nikolaos", lat: 37.7280, lon: 23.9050, desc: "Anavyssos classic." },
        { name: "Agios Dimitrios", lat: 37.8051, lon: 23.8512, desc: "Saronic local break." }
    ];

    let markers: L.Marker[] = [];

    onMount(() => {
        // Zoom into Attica for the start
        map.setView([37.85, 23.95], 10);

        // Define a custom surf icon
        const surfIcon = L.divIcon({
            html: `<div style="font-size: 24px;">🏄‍♂️</div>`,
            className: 'surf-marker',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        spots.forEach(spot => {
            const m = new L.Marker([spot.lat, spot.lon], { icon: surfIcon })
                .addTo(map)
                .bindPopup(`<b>${spot.name}</b><br>${spot.desc}`);
            markers.push(m);
        });
    });

    onDestroy(() => {
        // Essential: cleanup markers when plugin closes
        markers.forEach(m => map.removeLayer(m));
    });
</script>

<div class="plugin__content">
    <div class="plugin__title">Greece Surf Map</div>
    <p>Current Region: <b>Attica</b></p>
    <ul>
        {#each spots as spot}
            <li>{spot.name}</li>
        {/each}
    </ul>
</div>

<style>
    .plugin__content { padding: 15px; color: #eee; }
    .plugin__title { font-weight: bold; font-size: 1.1em; margin-bottom: 10px; }
    li { margin-bottom: 4px; font-size: 0.9em; }
</style>
