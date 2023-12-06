import React from "react";
// reactstrap components
import { CardContacto, ItemTelefono, ItemEmail, Icon, ItemWhatsapp } from "./styles";
import WhatsApp from "../Icons/WhatsApp";
import Mail from "../Icons/Mail";
import Phone from "../Icons/Phone"
import Formulario from "./Formulario.js";
import { Card, CardTitle, Container, Row, Col } from "reactstrap";
import LogoUmbrales from '../../assets/images/logo.png'
import LogoTavacorp from '../../assets/images/tavacorp.png'

function SectionContactUs() {
  
  return (
    <>
      <div className="section section-contactus cd-section" id="contact-us">
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/images/sections/contacto.jpg") + ")",
          }}
        >
          <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <Card className="card-contact no-transition">
              <CardTitle className="text-center" tag="h3">
                Contáctanos
              </CardTitle>
              <Row>
                <Col className="ml-auto" md="5">
                  <div className="d-flex justify-content-md-start justify-content-around align-items-center mt-4">
                    <img src={LogoUmbrales} style={{height:'85px'}} alt="logo-umbrales"/>
                    <img src={LogoTavacorp} className="pl-md-4" style={{height:'55px'}} alt="logo-tavacorp"/>
                  </div>
                  
                  <h4 className="info-title pl-3 pl-md-0">Información de Ventas</h4>
                  <CardContacto paddingTop="25px">
                    <ItemWhatsapp>
                      <Icon>
                        <WhatsApp size="25" color="#1EBEA5" />
                      </Icon>
                      <a className="pl-2" href="https://api.whatsapp.com/send?phone=+56984444636">
                        +56 9 8444 4636
                      </a>
                    </ItemWhatsapp>
                    <ItemTelefono>
                      <Icon>
                        <Phone size="25" color="#1EBEA5" />
                      </Icon>
                      <a className="pl-2 vertical-align-center" href="tel:+56984444636">
                        +56 9 8444 4636
                      </a>
                    </ItemTelefono>
                    <ItemEmail>
                      <Icon>
                        <Mail size="25" color="#1EBEA5" />
                      </Icon>
                      <a className="pl-2 vertical-align-center" href="mailto:nuevaumbrales@tavacorp.cl">
                        nuevaumbrales@tavacorp.cl
                      </a>
                    </ItemEmail>  
                  </CardContacto>
                  <hr />
                </Col>
                <Col className="mr-auto" md="5">
                  <Formulario/>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
      </div>
    </>
  );
}

export default SectionContactUs;
