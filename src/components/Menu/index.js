import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

// reactstrap components
import { Button, Collapse, NavbarBrand, Navbar, NavItem, Nav, NavLink, Container } from "reactstrap";
// import Logo from '../../assets/images/logo.png'


function Menu() {

  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  // const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);
  // const [imgLogo, setImgLogo] = useState(Logo)
  
  useEffect(() => {
    // initialise
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        // setImgLogo(Logo)
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
        // setImgLogo(Logo)
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      <Navbar className={classnames("fixed-top", navbarColor)} expand="lg" id="navbar-main">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" className="py-0" to="/#header" tag={Link}>
              {/* <img src={imgLogo} style={{height:'85px'}} alt="logo-umbrales"/> */}
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink to="/#proyecto" tag={Link}>
                    Proyecto
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/#atributos" tag={Link}>
                    Atributos
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/#tour-virtual" tag={Link}>
                    Tour Virtual
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/#fotos" tag={Link}>
                    Fotos
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#alrededores" tag={Link}>
                  Alrededores 
                </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/#ubicacion" tag={Link}>
                    Ubicación 
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/#cotizar" tag={Link}>
                    Cotizar 
                  </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-round outline"
                  color="primary"
                  to="/#contact-us"
                  tag={Link}
                >
                  <i className="nc-icon nc-phone" /> Contacto
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
