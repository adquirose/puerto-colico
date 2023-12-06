import React from "react";

import Menu from "components/Menu"
import HeaderApp from "components/HeaderApp"
import Proyecto from 'components/Proyecto'
import Galeria from 'components/Galeria'
import LugaresInteres from 'components/LugaresInteres'
import Masterplan from 'components/Masterplan'
import Ubicacion from 'components/Ubicacion'
// import Contacto from 'components/Contacto'
import Ws from 'components/Ws'

// import FooterBlack from "components/Footers/FooterBlack.js"

function Index() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("section-page");
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
    return function cleanup() {
      document.body.classList.remove("section-page");
    };
  });
  return (
    <>
      <Menu/>
      <HeaderApp/>
      <Proyecto/>
      <Masterplan />
      <Galeria />
      <LugaresInteres />
      <Ubicacion/>
      {/* <Contacto/> */}
      <Ws/>
      {/* <FooterBlack />   */}
    </>
  );
}

export default Index;
