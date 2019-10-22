mapboxgl.accessToken =
  "pk.eyJ1IjoicmVkaGFidmIiLCJhIjoiY2sxbDJ2bzl4MDFjazNkdGNtbDkxajlzeSJ9.SiOMpqSzguHEGvML3-VWRg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/redhabvb/ck1l3clge15ew1cmpzjcjplex",
  center: [7.011903, 46.87491],
  zoom: 16
});

const bounds = new mapboxgl.LngLatBounds();
const el = document.createElement("i");
el.className = "marker fas fa-map-marker-alt";

new mapboxgl.Marker({
  element: el,
  anchor: "bottom"
})
  .setLngLat([7.011903, 46.87491])
  .addTo(map);
bounds.extend([7.011903, 46.87491]);
