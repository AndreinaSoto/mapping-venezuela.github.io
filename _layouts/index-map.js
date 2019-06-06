<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8' />
  <title>Display a map</title>
  <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
  <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js'></script>
  <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
  <style>
    body { margin:0; padding:0; }
    #map { position:absolute; top:0; bottom:0; width:100%; }
  </style>
</head>
<body>

<div id='map'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVpbmFzb3RvcyIsImEiOiJjanJoMWk3ZGUwNzl3NGF1N2o1OGRraXhvIn0.77PWcsUnK1LpBInYCK-phA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/andreinasotos/cjvq8874g1zwa1co805szx0ve',
  center: [-66.509205, 10.873788],
  zoom: 5.8
});
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['sacred-spaces-venezuela'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.Church + '</h3><p>' + feature.properties.Location + '</p><p>' + feature.properties.Date + '</p><p>' + feature.observations. + '</p><p>' + feature.history. + '</p><p>' + feature.source. + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});

</script>

</body>

</html>
$(document).ready(function() {
  var city, map;
  map = $('.ct-map');
  city = map.find('.ct-city');
  city.each(function() {
    var button, that;
    that = $(this);
    button = that.find('.ct-city__button');
    return button.on('click', function() {
      city.not(that).removeClass('active');
      if (that.hasClass('active')) {
        that.removeClass('active');
        return map.removeClass('popup-open');
      } else {
        that.addClass('active');
        return map.addClass('popup-open');
      }
    });
  });
});
