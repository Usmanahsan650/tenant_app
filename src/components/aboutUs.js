import React from "react";
import { Link } from "react-router-dom";
import { Container,Col,Row,Breadcrumb,BreadcrumbItem } from "reactstrap";
export function About(props){
    return(
        <React.Fragment>
            <Container>
            <Breadcrumb>
                        <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to="/ads">Listings</Link></BreadcrumbItem>
                        <BreadcrumbItem active>AboutUS</BreadcrumbItem>
            </Breadcrumb>
            <h1> About Us</h1>
                <Row className="jumbotron">
                    <Col sm="12" md ="6" className="mr-auto" >
                        <p>This is web site created to help you find best tenant </p>
                        
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}