import React from "react";
import { Link } from 'react-router-dom'
// reactstrap components
import { Button, Container, Row, Col, Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

// core components
const itemsEsp = [
  {
    src: "url(" + require("assets/images/header/banner1.jpg") + ")",
    content: (
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center ml-md-4" md="6">
            <h1 className="title">Parcelas de 5.000 m2 en un entorno privilegiado</h1>
            {/* <h5 className="header-texto">
              Exito de ventas 70% Vendido
            </h5> */}
            <br />
            <div className="buttons">
              <Button
                className="btn-round"
                color="info"
                to="/#proyecto"
                tag={Link}
                size="lg"
              >
                Leer Más
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + require("assets/images/header/banner2.jpg") + ")",
    content: (
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center ml-md-4" md="6">
            <h1 className="title">Hermosas praderas con bosque nativo.</h1>
            {/* <h5 className="header-texto">
              Exito de ventas 70% Vendido
            </h5> */}
            <br />
            <div className="buttons">
              <Button
                className="btn-round"
                color="info"
                to="/#proyecto"
                tag={Link}
                size="lg"
              >
                Leer Más
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    src: "url(" + require("assets/images/header/banner3.jpg") + ")",
    content: (
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center ml-md-4" md="6">
            <h1 className="title">Vistas al volcán y lagos cercanos.</h1>
            {/* <h5 className="header-texto">
              Exito de ventas 80% Vendido
            </h5> */}
            <br />
            <div className="buttons">
              <Button
                className="btn-round"
                color="info"
                to="/#proyecto"
                tag={Link}
                size="lg"
              >
                Leer Más
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  }
];

function HeaderApp(props) {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemsEsp.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemsEsp.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  
  return (
    <>
      <div id="header">
        <div className="header-3">
          <div className="page-carousel">
            <div className="filter" />
            <Carousel interval="7000" activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={itemsEsp}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {itemsEsp.map((item) => {
                return (
                  <CarouselItem  
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                  >
                    <div
                      className="page-header"
                      style={{ backgroundImage: item.src }}
                    >
                      <div className="filter" />
                      <div className="content-center">{item.content}</div>
                    </div>
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </div>
        </div>
        </div>
    </>
  );
}

export default HeaderApp;
