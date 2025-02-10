mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHlhbW9mZmF0IiwiYSI6ImNtNmI0d3puaTA0dG0yam84dzNiZTQ5NjIifQ.A1PSOyaJV6TF-lKcIFMHQA'; // Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
container: 'my-map', // map container ID
style: 'mapbox://styles/emilyamoffat/cm6zhee9000s201sbc2m0g0xc', // style URL
center: [-79.3832, 43.6532], // starting position [lng, lat]
zoom: 9, // starting zoom level
});

//Toronto bounds\
map.fitBounds([
    [-79.62, 43.6], // Southwest corner
    [-79.12, 43.83] // Northeast corner
]);

// Add layers to mapbox basemap
map.on('load', function() {

    // Add parks data - vector line tileset housed in mapbox
    map.addSource('parks-data', { 
        'type': 'vector',
        'url': 'mapbox://emilyamoffat.1ndjd2c9' // Tileset ID
    });

    map.addLayer({
        'id': 'parks-line',
        'type': 'line',
        'source': 'parks-data', 
        'paint': {
            'line-color': '#556b2f',
            'line-width': 2
        },
        'source-layer': 'ON_prr-4eotyv' // Mapbox tileset source layer name
    });

    // Add Toronto Public Water Fountains point data from GeoJSON file, housed in GitHub
    map.addSource('fountains-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/emilyamoffat/GGr472_lab2/main/Parks%20Drinking%20Fountains%20-%204326.geojson'
    });

    map.addLayer({
        'id': 'fountains-point',
        'type': 'circle',
        'source': 'fountains-data',
        'paint': {
            'circle-radius': 2.5,
            'circle-color': '#6495ed'
        }
    });
});