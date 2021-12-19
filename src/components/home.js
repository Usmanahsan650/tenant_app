import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardFooter, CardImg, Col, Breadcrumb, BreadcrumbItem, Label, Container, Row, Modal } from "reactstrap";
import SimpleImageSlider from "react-simple-image-slider";
function RenderCard({ house }) {
    console.log(house)
    if (house == null)
        return (<div></div>)
    return (
        <Card >
            <CardImg src={window.location.origin + house.pics} />
            <CardBody>
                <CardTitle><h5>{house.town}</h5></CardTitle>
                <p>{house.desc}</p>
            </CardBody>
            <CardFooter>
                <Label className="rentTag"><span  ><b>Rent:</b></span>{house.rent}Rs/month</Label>
                <a role="button" style={{ float: "right" }} className="btn btn-success" href={"tel:" + house.phone}><i className="fa fa-phone"></i> Call</a>
            </CardFooter>
        </Card>

    )

}
export function Home(props) {
    const [toggle, setToggle] = useState([false, 1]);
    const toggleModal = (id = 1) => {
        console.log("toggled")
        setToggle([!toggle[0], id]);
    }
    console.log(props.house)
    const houses = props.house.map((house) => {
        return (
            <Col sm="12" md="6" lg="4"className="Listcard">
                <Card key={house.key} color="primary" onClick={() => { toggleModal(house.key) }}>
                    <CardImg  height="250px" src={window.location.origin+house.pics}/>
                       
                    <CardBody>
                        <CardTitle>{house.town}</CardTitle>
                    </CardBody>
                </Card>
            </Col>
        )

    })
    console.log(props.house)
    return (
        <React.Fragment>
            <Container >
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                        <BreadcrumbItem ><Link to="/ads">Listings</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/about">AboutUS</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <h1>Home</h1>
                </Row>
                <Row id="HomeHead">
                    <div className="ml-auto" style={{ textAlign: 'center' }}><h3 >Featured Houses:</h3></div>
                    {houses}

                </Row>

            </Container>
            <Modal isOpen={toggle[0]} backdrop={true} toggle={toggleModal} >
                <RenderCard house={props.house.filter((house) => house.key == toggle[1])[0]} />
            </Modal>
        </React.Fragment>
    )
}