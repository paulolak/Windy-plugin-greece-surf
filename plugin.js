import { map } from '@windy/map';

const surfSpots = [
    { name: "Davis Beach", lat: 37.9547, lon: 24.0108, desc: "East coast gem near Vravrona." },
    { name: "Legrena", lat: 37.6616, lon: 23.9982, desc: "Pristine south coast spot near Sounio." },
    { name: "Agios Nikolaos", lat: 37.7280, lon: 23.9050, desc: "Classic Anavyssos break." },
    { name: "Agios Dimitrios", lat: 37.8051, lon: 23.8512, desc: "Reliable Saronic beach break." },
    { name: "Vouliagmeni Beach", lat: 37.8126, lon: 23.7770, desc: "The legendary Oceanida spot." },
    { name: "Varkiza Beach", lat: 37.8180, lon: 23.8160, desc: "Works well on big South swells." },
    { name: "Artemida Beach", lat: 37.9900, lon: 24.0287, desc: "Consistent NE windswell spot." },
    { name: "Rafina", lat: 38.0160, lon: 24.0110, desc: "Port side waves on NE winds." }
];

export const onmount = () => {
    // Zoom map into Attica region
    map.setView([37.85, 23.95], 10);

    surfSpots.forEach(spot => {
        // Creates a marker for each spot
        new L.Marker([spot.lat, spot.lon])
            .addTo(map)
            .bindPopup(`<b>${spot.name}</b><br>${spot.desc}`);
    });
};
