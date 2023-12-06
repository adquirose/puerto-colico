import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Video = () => {
    return(
        <div className="section-p" id="video">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">Video</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <div className="embed-responsive embed-responsive-16by9">
                    <video
                        controls
                        preload="auto"
                        volume="0"
                        
                    >
                        <source
                        src={require("assets/video/video.mp4")}
                        type="video/mp4"
                        ></source>
                        Video not supported
                    </video>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Video 