import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import {
  kos1,
  kos2,
  kos3,
  kos4,
  kos5,
  kos6,
  kos7,
  kos8,
} from "../../assets/img";

const styles = {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "justify",
  padding: 20
};

class MainImage extends Component {
  render() {
    const RenderImage = ({ source, caption, title }) => (
      <div className="col-sm-12 col-sm-3 col-lg-3">
        <Card className="mobile">
          <Card.Img variant="top" src={source} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{caption}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );

    return (
      <div className="h-50 mb-5 " style={styles}>
        <div className="row">
          <RenderImage
            source={kos8}
            title="Depan"
            caption="Tampak depan, terlihat salah satu penghuni kos menggunakan motor antik"
          />
          <RenderImage
            source={kos2}
            title="Depan"
            caption="Dapur untuk memasak, bisa juga dijadikan tempat nongkrong atau pun untuk hal lainnya"
          />
          <RenderImage
            source={kos3}
            title="Depan"
            caption="Kamar Mandi, terlihat wc jongkok berwarna putih dan sebuah ember tersipu malu"
          />
          <RenderImage
            source={kos4}
            title="Depan"
            caption="Ruang tidur, sudut dari ruang tidur yg tampak putih dan terlihat saklar yg kesepian"
          />
        </div>
        <div className="row jarak-atas">
          <RenderImage
            source={kos5}
            title="Depan"
            caption="Sudut kamar terlihat dari depan, terlihat juga dapur tadi dan pancaran cahaya"
          />
          <RenderImage
            source={kos6}
            title="Depan"
            caption="Ruang depan, ruangan sebelum masuk ke ruang tidur dengan gulungan kabel yg menggoda"
          />
          <RenderImage
            source={kos7}
            title="Depan"
            caption="Ruang depan dilihat dari sudut yg berbeda, terlihat colokan yg kesepian"
          />
          <RenderImage
            source={kos1}
            title="Depan"
            caption="Depan kamar, pintu yg kokoh dan meteran listrik yg berani di dampingi toren yg perkasa"
          />
        </div>
      </div>
    );
  }
}
export default MainImage;
