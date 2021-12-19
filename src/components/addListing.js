import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container,Row,Col,Form,Input, Label, Button} from "reactstrap";
export class AddHouse extends Component{
    constructor(props){
        super(props);
        this.state={
             town:"",
             address:"",
             pics:"",
             desc:"",
             rent:null,
             phone:null,
             featured:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        const target=e.target;
        this.setState({
            [target.name]:target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const Fd=new FormData(document.querySelector('#addListForm'));
        //senFormData to server
    }
    render(){
        return(
            <div>
            {
                this.props.isLogin?
            <Container>
                <Row>
                   
                </Row>
                <Col sm="12" md="6" className="offset-md-6">
                <h4>Add Your Ad!</h4>
                    <Form onSubmit={this.handleSubmit} id="addListForm">
                        <div>
                        <Label>Town</Label>
                        <Input type="text" required name="town" value={this.state.town} onChange={this.handleChange}/>
                        </div>
                        <div>
                        <Label>Address</Label>
                        <Input type="text" required name="address" value={this.state.address} onChange={this.handleChange} />
                        </div>
                        <div>
                        <Label>Image</Label>
                        <Input type="file" required name="pics" value={this.state.pics} onChange={this.handleChange} />
                        </div>
                        <div>
                        <Label>Description</Label>
                        <textarea className="form-control" name="desc" value={this.state.desc} onChange={this.handleChange}/>
                        </div>
                        <div>
                        <Label>Rent</Label>
                        <Input type="number" required name="rent" value={this.state.rent} onChange={this.handleChange}/>
                        </div>
                        <div>
                        <Label>Phone</Label>
                        <Input type="tel" required name="phone" maxLength={11} value={this.state.phone} onChange={this.handleChange} />
                        </div>
                        <Button type="submit" color="primary">Add</Button>
                    </Form>
                </Col>
            </Container>
            :
            <div>
            <h6>You need to login to add the ad</h6>
            <Link to="/login">Login</Link>
            </div>
            }
            
            </div>
        )
    }

}