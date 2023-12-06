/*eslint-disable*/
import React from "react";

// reactstrap components
import { Col, Container, Row } from "reactstrap";
import LogoFacebook from "components/Icons/Facebook";
import LogoInstagram from "components/Icons/Instagram";
// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <Row className="d-flex justify-content-center">
            <a className="pr-2 py-2" href="https://www.facebook.com/profile.php?id=100087557980042">
              <LogoFacebook width={36} height={36}/>
            </a>
           
            <a className="pl-2 py-2" href="https://www.instagram.com/nuevaumbrales.cl/?hl=en">
              <LogoInstagram width={36} height={36}/>
            </a>
           {/* <Col sm="4">
              <div className="credits ml-auto">
                <span className="copyright">
                  © {new Date().getFullYear()}
                  <i className="fa fa-heart heart" />
                </span>
              </div>
           </Col> */}
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
