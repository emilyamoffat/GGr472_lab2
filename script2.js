mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pbHlhbW9mZmF0IiwiYSI6ImNtNmI0d3puaTA0dG0yam84dzNiZTQ5NjIifQ.A1PSOyaJV6TF-lKcIFMHQA'; // Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
container: 'my-map', // map container ID
style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
center: [-79.3832, 43.6532], // starting position [lng, lat]
zoom: 9, // starting zoom level
});

//intended bounds - -79.62,43.6,-79.12,43.83
// Add a data source from a GeoJSON file
map.addSource('buildings-data', {
    type: 'geojson',
    data: '...' // Your URL to your buildings.geojson file
    });
    map.addLayer({
    'id': 'buildings-point',
    'type': 'circle',
    'source': 'buildings-data',
    'paint': {
    'circle-radius': 5,
    'circle-color': '#007cbf'
    }
    });

    C:\Users\emily\OneDrive\Documents\GitHub\GGr472_lab2\script2.js
    