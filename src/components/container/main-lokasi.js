import React, { Component } from "react";
import MapLokasi from "./map/map-lokasi";
import Card from "react-bootstrap/Card";
import InfoView from "./info/info-review";

const parap =
  "Lokasi berada sebelum pos pintu masuk taman sentosa, tepatnya di jalan taman sentosa raya. Belok kanan sebelum pos masuk taman sentosa";

class MainLokasi extends Component {
  render() {
    return (
      <div id="mapLocation" className="mapSize container mt-5">
        <MapLokasi />
        <div className="container mt-2">
          <Card bg={"dark"} text={"white"} body>
            {parap}
          </Card>
        </div>
        <InfoView />
      </div>
    );
  }
}
export default MainLokasi;
