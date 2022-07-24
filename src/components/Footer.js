import React from "react";
import {Container,Row,Col} from "react-bootstrap"
const Footer =()=>{
    return(
        <div>
            <footer>

                <Container>
                <Row className="text-center py-3">
                    <Col>Copyright &copy; ProShop</Col>
                </Row>
                </Container>
                
            </footer>
        </div>
    )
}

export default Footer