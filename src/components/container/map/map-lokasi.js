import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

class MapLokasi extends Component {
  render() {
    return (
      <div id="mapid">
        <MapContainer
          center={[-6.321609967646743, 107.13678616839616]}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-6.321609967646743, 107.13678616839616]}>
            <Popup>Disini Lokasinya</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}
export default MapLokasi;
