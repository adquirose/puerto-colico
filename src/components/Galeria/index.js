import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { PhotoSwipeGallery } from 'react-photoswipe'
let options = {
    
}
  
let getThumbnailContent = item => {
    return (
        <div
            className="gallery-item"
            itemProp="associatedMedia"
            itemScope=""
            itemType="http://schema.org/ImageObject"
        >
            <a data-size="750x1002" href={item.src} itemProp="contentUrl">
            <img
                alt="..."
                className="img-rounded img-responsive"
                itemProp="thumbnail"
                src={item.src}
            />
            </a>
            <figcaption className="gallery-caption" itemProp="caption description">
            {item.title}
            </figcaption>
      </div>
    )
}
const photoSwipeItems = [
    {
      src: require("assets/images/galeria/galeria1.jpg"),
     
      w: "7000",
      h: "4000"
    },
    {
      src: require("assets/images/galeria/galeria2.jpg"),
      
      w: "7000",
      h: "4000"
    },
    {
      src: require("assets/images/galeria/galeria3.jpg"),
    
      w: "7000",
      h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria5.jpg"),
       
        w: "7000",
        h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria4.jpg"),
        w: "7000",
        h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria6.jpg"),
        w: "7000",
        h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria7.jpg"),
        w: "7000",
        h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria8.jpg"),
        w: "7000",
        h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria9.jpg"),
        w: "7000",
        h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria10.jpg"),
        w: "7000",
        h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria11.jpg"),
        w: "7000",
        h: "4000"
    },
    {
        src: require("assets/images/galeria/galeria12.jpg"),
        w: "7000",
        h: "4000"
    }
  ];
const Galeria = () => {
    return(
        <div className="section text-center" id="fotos">
            <Container>
                <Row className="pb-4">
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">Fotos</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="ml-auto mr-auto text-center">
                        <PhotoSwipeGallery
                            items={photoSwipeItems}
                            options={options}
                            thumbnailContent={getThumbnailContent}
                        />    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Galeria