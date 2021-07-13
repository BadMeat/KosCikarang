import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import InfoSurvey from "./info/info-survey";

class MainInfo extends Component {
  render() {
    return (
      <div className="container mt-5" style={{ paddingTop: 15 }}>
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Info Dadakan</Card.Title>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Untuk pertanyaan bisa ditanyakan langsung, atau melalui mamikos{" "}
              </p>
              <footer className="blockquote-footer">
                Admin <cite title="Source Title">Arif Dwi Prasetya</cite>
              </footer>
            </blockquote>
          </Card.Body>
          <Card.Footer className="text-muted">1 days ago</Card.Footer>
        </Card>
        <InfoSurvey />
      </div>
    );
  }
}
export default MainInfo;
