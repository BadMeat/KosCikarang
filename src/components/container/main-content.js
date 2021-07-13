import React, { Component } from "react";
import MainImage from "./main-image";
import kos from "../../assets/img/kos.png";
import Figure from "react-bootstrap/Figure";

const styles = {
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
};

class MainContent extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="container">
          <div className="row h-50" style={styles}>
            <div className="col-sm-12 col-sm-6 col-lg-6">
              <h3>Tentang Kos</h3>
              <p className="text-justify">
                Pada zaman kolonial Belanda di Indonesia, 'in de kost' adalah
                sebuah gaya hidup yang cukup populer di kalangan menengah ke
                atas untuk kaum pribumi, terutama sebagian kalangan yang
                mengagung-agungkan budaya barat / Eropa khususnya adat Belanda,
                dengan trend ini mereka berharap banyak agar anaknya dapat
                bersikap dan berprilaku layaknya bangsa Belanda atau Eropa yang
                dirasa lebih terhormat saat itu.
              </p>
            </div>
            <div className="col-sm-12 col-sm-6 col-lg-6">
              <Figure>
                <Figure.Image
                  width={500}
                  height={500}
                  alt="171x180"
                  src={kos}
                />
              </Figure>
            </div>
          </div>
          <div className="container-fluid w-75" style={{ height: 10 }}></div>
        </div>

        <MainImage />
      </div>
    );
  }
}
export default MainContent;
