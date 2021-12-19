import React from "react";
import { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Form,Row,Col, Input, Button } from "reactstrap";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        const target=e.target;
        this.setState({...this.state,[target.name]:target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
        //auth fethch
        this.props.setLogin(true);
        
    }
    render(){
        return(
            <div>
                {
                this.props.isLogin==false?
                <Container >
                    <Row>
                        
                        <Col  sm="12" md="6" className="offset-md-6"   >
                            <h3>Login</h3>
                            <Form onSubmit={this.handleSubmit}> 
                                <div>User Name
                                <Input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                                </div>
                                <div>Password
                                <Input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <Button outline type="submit">Login</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            :
            <Navigate to="/addList" replace={true}/>
            }
            </div>
        )
    }
}
export default Login