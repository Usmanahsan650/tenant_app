import React from "react";
import { Link } from "react-router-dom";
import { Card,CardBody,CardTitle,CardFooter,BreadcrumbItem,Breadcrumb,CardImg, Col, Label, Container, Row, Modal} from "reactstrap";
// export function Detail({house}){
//     return(
  
//         <div key={house.address}>
//         <Card color="primary">
//             <CardImg  height="250px" src={window.location.origin+house.pics}/>
//             <CardBody>
//                 <CardTitle><h5>{house.town}</h5></CardTitle>
//                 <p>{house.desc}</p>
//             </CardBody>
//             <CardFooter>
//                 <Label className="rentTag"><span  ><b>Rent:</b></span>{house.rent}Rs/month</Label>
//                 <a role="button" style={{float:"right"}} className="btn btn-success" href={"tel:"+house.phone}><i className="fa fa-phone"></i> Call</a>
//             </CardFooter>
//         </Card>

//     </div>
//     )
// }
export function Listings(props){
    const houses=props.house.map((house)=>{
        return(

            <Col sm="12" md="6" lg="4" className="Listcard" >
                <Card key={house.address} color="primary">
                    <CardImg height="250px" src={window.location.origin+house.pics}/>
                    <CardBody>
                        <CardTitle><h5>{house.town}</h5></CardTitle>
                        <p>{house.desc}</p>
                    </CardBody>
                    <CardFooter>
                        <Label className="rentTag"><span  ><b>Rent:</b></span>{house.rent}Rs/month</Label>
                        <a role="button" style={{float:"right"}} className="btn btn-success" href={"tel:"+house.phone}><i className="fa fa-phone"></i> Call</a>
                    </CardFooter>
                </Card>

            </Col>
        )

    })
    return(
        <Container >
            <Row>
            <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Listings</BreadcrumbItem>
                        <BreadcrumbItem><Link to="/about">AboutUS</Link></BreadcrumbItem>
            </Breadcrumb>
                    {houses}
            </Row>

        </Container>
    )
}