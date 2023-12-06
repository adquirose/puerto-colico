import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from "reactstrap";

function Proyecto() {
    
  return (
    <>
      <div id="proyecto" className="section section-feature cd-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto left pb-5" md="8">
                <h2 className="title">Proyecto</h2>
                <h5 className="description">
                  Puerto Cólico es un proyecto de parcelas pensado para quienes buscan la tranquilidad del campo y la entretención que ofrece uno de los polos turísticos más importantes del sur de Chile.
                </h5>
                <div className="buttons mt-4">
                <Button
                  className="btn-round"
                  color="info"
                  to="/#masterplan"
                  tag={Link}
                  size="lg"
                >
                Mira el Tour Virtual
              </Button>
            </div>
              </Col>
            </Row>
        </Container>
        
        <div id="atributos" className="section">
        <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Atributos</h2>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon icon-property-agreement" />
              </div>
              <div className="description">
                <h4 className="info-title">Parcelas de 5000 m2 con rol propio </h4>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon icon-drop" />
              </div>
              <div className="description">
                <h4 className="info-title">Factibilidad de agua por pozo</h4>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon icon-plug-2" />
              </div>
              <div className="description">
                <h4 className="info-title">Factibilidad de luz por conexión al tendido eléctrico</h4>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon icon-road-2" />
              </div>
              <div className="description">
                <h4 className="info-title">Caminos interiores estabilizados</h4>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon icon-tree-2" />
              </div>
              <div className="description">
                <h4 className="info-title">Hermoso bosque nativo</h4>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon icon-water-aerobics" />
              </div>
              <div className="description">
                <h4 className="info-title"> Acceso a lagos cercanos</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
        </div>
      </div>
    </>
  );
}
export default Proyecto;
