import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Masterplan = () => {
    return(
        <div className="section text-center" id="tour-virtual">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">Tour Virtual</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="embed-responsive-vt">
                            <iframe className="embed-responsive-item-vt" title='masterplan' src="https://www.lanube360.com/puerto-colico/"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Masterplan