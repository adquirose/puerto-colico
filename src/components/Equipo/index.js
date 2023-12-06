import React from "react";
// reactstrap components
import { Card, CardBody, CardFooter, CardTitle, Container, Row, Col } from "reactstrap";
import Phone from '../Icons/Phone'

// core components

function Equipo(props) {
  const updateTitulo = () => {
    if(props.idioma === 'esp'){
      return(
        <h2 className="title">Equipo de ventas</h2>
      )
    }else{
      return(
        <h2 className="title">Sales Team</h2>
      )
    }
  }
  return (
    <>
      <div className="section section-team cd-section" id="equipo">
        <div className="team-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                {updateTitulo()}
                {/* <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5> */}
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="img"
                        src={require("assets/images/faces/genesis.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Génesis Gómez</CardTitle>
                        
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <a href="tel:+56942635546">
                        <Phone size="25" color="#1EBEA5"/>
                    </a>
                    <a href="mailto:genesis@chenue.cl">
                      <p className="description text-center pt-3">
                        genesis@chenue.cl
                      </p>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="img"
                        src={require("assets/images/faces/andres.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Andrés Oyarzún</CardTitle>
                        {/* <h6 className="card-category text-muted">Puerto Montt, Chile</h6> */}
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <a href="tel:+56966287537">
                        <Phone size="25" color="#1EBEA5"/>
                    </a>
                    <a href="mailto:andres@chenue.cl">
                      <p className="description text-center pt-3">
                        andres@chenue.cl
                      </p>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="img"
                        src={require("assets/images/faces/jaime.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Jaime Halabí</CardTitle>
                        {/* <h6 className="card-category text-muted"> DRE: 02060764</h6>
                        <h6 className="card-category text-muted">Los Ángeles California, U.S.A.</h6> */}
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <a href="tel:+569 82889914">
                        <Phone size="25" color="#1EBEA5"/>
                    </a>
                    <a href="mailto:jaime@chenue.cl">
                      <p className="description text-center pt-3">
                        jaime@chenue.cl
                      </p>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="img"
                        src={require("assets/images/faces/fernandamercado.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Fernanda Mercado</CardTitle>
                        
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <a href="tel:+56994991162">
                        <Phone size="25" color="#1EBEA5"/>
                    </a>
                    <a href="mailto:fernanda@chenue.cl">
                      <p className="description text-center pt-3">
                        fernanda@chenue.cl
                      </p>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="img"
                        src={require("assets/images/faces/sandyescarate.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sandy Escárate</CardTitle>
                        {/* <h6 className="card-category text-muted">Puerto Montt, Chile</h6> */}
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <a href="tel:+56998616141">
                        <Phone size="25" color="#1EBEA5"/>
                    </a>
                    <a href="mailto:sandy@chenue.cl">
                      <p className="description text-center pt-3">
                        sandy@chenue.cl
                      </p>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="img"
                        src={require("assets/images/faces/angelaguerra.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ángela Guerra</CardTitle>
                        {/* <h6 className="card-category text-muted"> DRE: 02060764</h6>
                        <h6 className="card-category text-muted">Los Ángeles California, U.S.A.</h6> */}
                      </div>
                    </a>
                    {/* <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <a href="tel:+56987319215">
                        <Phone size="25" color="#1EBEA5"/>
                    </a>
                    <a href="mailto:angela@chenue.cl">
                      <p className="description text-center pt-3">
                        angela@chenue.cl
                      </p>
                    </a>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Equipo;
