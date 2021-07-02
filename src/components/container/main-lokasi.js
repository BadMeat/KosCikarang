import React, { Component } from "react";
import MapLokasi from "./map/map-lokasi";
import Card from "react-bootstrap/Card";

const parap =
  "Lokasi berada sebelum pos pintu masuk taman sentosa, tepatnya di jalan taman sentosa raya. Belok kanan sebelum pos masuk taman sentosa";

class MainLokasi extends Component {
  render() {
    return (
      <div id="mapLocation" className="mapSize container">
        <MapLokasi />
        <div className="container">
          <Card bg={"dark"} text={"white"} body>
            {parap}
          </Card>
        </div>
      </div>
    );
  }
}
export default MainLokasi;
