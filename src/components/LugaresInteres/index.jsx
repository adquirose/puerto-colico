import React from 'react'
import  { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap'
function Atractivos(){
    return(
        <div id="alrededores" className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title text-center">Alrededores</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/images/atractivos/lago-colico.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-warning">Travel</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Lago Colico
                      </a>
                    </CardTitle>
                    {/* <p className="card-description">
                      7 colegios en las inmediaciones del proyecto y 4 de ellos a menos de 1 km. 
                    </p> */}
                    <br />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/images/atractivos/laguna-carilafquen.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-info">Travel</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Laguna Carilafquen
                      </a>
                    </CardTitle>
                    {/* <p className="card-description">
                      Farmacias, supermercados, stripcenter, bombas de bencina a 5 minutos.
                    </p> */}
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/images/atractivos/cunco.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-danger">Lifestyle</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Cunco
                      </a>
                    </CardTitle>
                    {/* <p className="card-description">
                      Futuro Hospital de la Serena a 4 minutos y 1.6 km.
                    </p> */}
                    <br />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/images/atractivos/volcan-llaima.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-success">Best Seller</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Volcan Llaima
                      </a>
                    </CardTitle>
                    {/* <p className="card-description">
                      Canchas de pádel y gimnasios a minutos. Senderos de trekking y bicicleta en el Parque Urbano Cerro Grande colindante al proyecto.
                    </p> */}
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/images/atractivos/volcan-villarica.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-danger">Lifestyle</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Volcán Villarrica
                      </a>
                    </CardTitle>
                    {/* <p className="card-description">
                      Extensa playa  que se extienden desde el Faro Monumental hasta Playa Canto del Agua.
                    </p> */}
                    <br />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/images/atractivos/aeropuerto-temuco.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    {/* <h6 className="card-category text-success">Best Seller</h6> */}
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Aeropuerto Temuco
                      </a>
                    </CardTitle>
                    {/* <p className="card-description">
                      La Zona Típica de La Serena cuenta con 16 edificios declarados Monumentos Nacionales, 99 edificios Patrimoniales y 27 espacios Urbanos Patrimoniales.
                    </p> */}
                    <br />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
export default Atractivos