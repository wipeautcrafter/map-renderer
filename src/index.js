const protocol = new pmtiles.Protocol()
maplibregl.addProtocol('pmtiles', protocol.tile)

const map = new maplibregl.Map({
  container: 'map',
  style: mapStyle,
  center: [5.123, 52.0919],
  zoom: 10,
  attributionControl: false,
})
