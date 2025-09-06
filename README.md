# Map Renderer

A ready-to-go 3D opengl map renderer using [tilemaker](https://github.com/systemed/tilemaker) and [maplibre](https://github.com/maplibre/maplibre-gl-js) with [pmtiles](https://docs.protomaps.com/pmtiles/maplibre) and the [osm-liberty](https://github.com/maputnik/osm-liberty) theme.

## Screenshots

![2d example screenshot](screenshots/2d.png)
![3d example screenshot](screenshots/3d.png)

## Setup

### Making Tiles

1. Download a map of your choice in `.osm.pbf` format. If you want full coverage, use the [planet OSM](https://planet.openstreetmap.org/).
2. Download [tilemaker](https://github.com/systemed/tilemaker/releases) and place the executable in the `tilemaker/` folder.
3. Tile your map into `.pmtiles` format using tilemaker:

```sh
# should be executed in the tilemaker folder
./tilemaker map.osm.pbf --output ../data/map.pmtiles
```

### Downloading Assets

1. Download the zip file from [openmaptiles](https://github.com/openmaptiles/fonts/releases/download/v2.0/v2.0.zip) and extract it into the `data/fonts/` folder.
2. _All other assets, like the sprites, are included in this repository._

## Running

- To run and view the map in _development_, use a dev server like [live server](https://www.npmjs.com/package/live-server).
- To serve everything in _production_, use a http server like [nginx](https://nginx.org/).

## Credits

The following libraries, sources and assets were used:

- https://planet.openstreetmap.org
- https://github.com/systemed/tilemaker
- https://github.com/maplibre/maplibre-gl-js
- https://docs.protomaps.com/pmtiles/maplibre
- https://github.com/maputnik/osm-liberty
- https://github.com/openmaptiles/fonts
