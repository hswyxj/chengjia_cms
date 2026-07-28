window.marker = null;

function initialize() {
  var latitude = $('#map').attr('data-latitude');
  var longitude = $('#map').attr('data-longitude');
  var mapMarker = $('#map').attr('data-marker');
  var mapMarkerName = $('#map').attr('data-marker-name');
  var center = new AMap.LngLat(longitude, latitude);
  var mapOptions = {
    center: center,
    zoom: 16,
    // mapStyle: 'amap://styles/light',
    viewMode: '2D',
    resizeEnable: true
  };
  var map = new AMap.Map(document.getElementById('map'), mapOptions);
  var icon = new AMap.Icon({
    image: mapMarker,
    size: new AMap.Size(46, 40),
    imageSize: new AMap.Size(46, 40)
  });
  marker = new AMap.Marker({
    position: center,
    map: map,
    icon: icon,
    title: mapMarkerName
  });
  new AMap.Text({
    text: mapMarkerName,
    position: center,
    offset: new AMap.Pixel(0, -15),
    style: {
      'background': 'none',
      'border': 'none',
      'padding': '0',
      'font-size': '12px',
      'font-weight': '600',
      'color': '#f75757'
    },
    map: map
  });
}
var map = document.getElementById('map');
if (map != null) {
  window.addEventListener('load', initialize);
}
