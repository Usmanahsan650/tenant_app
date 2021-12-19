import React from "react";
import { Component } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from "reactstrap"
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false

        }
        this.logout=this.logout.bind(this);
    }
    logout(){
        this.props.setLogin(false)
    }
    render() {
        return (
            <Navbar dark={true} expand="md">
                <NavbarBrand  >Tenant App</NavbarBrand>
                <NavbarToggler toggle={toString(this.state.toggle)} onClick={() => { this.setState({ toggle: !this.state.toggle }) }} />
                <Collapse navbar isOpen={this.state.toggle}>
                    <Nav navbar>
                        <NavItem >
                            <NavLink className="nav-link" to="/home" >
                                <label className="fa fa-home fa-lg"></label>Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="mr-auto">
                            <NavLink className="nav-link" to="/ads" >
                                <label className="fa fa-list fa-lg"></label>Listings
                            </NavLink>
                        </NavItem>
                        <NavItem className="mr-auto">
                            <NavLink className="nav-link" to="/about" >
                                <label className="fa fa-info fa-lg"></label>About Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {
                      this.props.isLogin==false?  
                    <NavItem>
                        <NavLink to="/login">
                            <Button outline color="success" >Login</Button>
                        </NavLink>
                    </NavItem>
                    :
                    <NavItem>
                            <Button outline color="danger" onClick={this.logout} >Logout</Button>

                    </NavItem>
                    
                    }
                </Collapse>

            </Navbar>
        )
    }
}
export default Header;