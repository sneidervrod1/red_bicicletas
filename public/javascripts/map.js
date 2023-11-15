var map = L.map('main_map').setView([4.60971, -74.08175],14)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([4.579067, -74.157777]).addTo(map);

var polygon = L.polygon([
  [4.579484, -74.15864],
  [4.58005, -74.158729],
  [4.579748, -74.157723]
]).addTo(map);
