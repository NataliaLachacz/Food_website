mapboxgl.accessToken = 'pk.eyJ1IjoiZHJlYW10ZWFtaGVyb2luIiwiYSI6ImNqeWcwNWFjdjBmdjgzanJ6Y3JjNGlka2IifQ.p5i_GH2mH4vsbaayaGl3Bw';
    // eslint-disable-next-line no-undef
    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding.forwardGeocode({
    query: 'Zirakpur, Mohali',
    autocomplete: false,
    limit: 1
    })
    .send()
    .then(function (response) {
    if (response && response.body && response.body.features && response.body.features.length) {
    var feature = response.body.features[0];
     
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: ([76.630081, 30.612176]),
    zoom: 10
    });

    map.scrollZoom.disable();

    new mapboxgl.Marker()
    .setLngLat(feature.center)
    .addTo(map);
    }
    });