import React from "react";
import { Container, Row, Col } from "reactstrap";
import Map from './map'

function Ubicacion() {
  return (
    <>
      <div className="section section-feature cd-section" id="ubicacion">
        <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Ubicación</h2>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <Map/>
          </Col>
          
        </Row>
      </Container>
      </div>
    </>
  );
}

export default Ubicacion;
