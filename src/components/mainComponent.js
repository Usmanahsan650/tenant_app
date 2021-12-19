import React from "react";
import Header from "./header";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router";
import { Component } from "react";
import { About } from "./aboutUs";
import Login from "./login";
import { Alert } from "reactstrap";
import { Listings } from "./Listings";
import houses  from "./data/houseData";

import { Home } from "./home";
import { AddHouse } from "./addListing";
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:false
        }
        this.setLogin=this.setLogin.bind(this);
    }
    setLogin(value){
        this.setState({isLogin:value})
    }
    render(){
        console.log(houses)
       return(
           <div>
            <Header isLogin={this.state.isLogin} setLogin={this.setLogin} /> 
            <Routes>
            <Route path="/about" element={<About/>} />
            
            <Route path="/ads" element={<Listings house={houses} />}/>
            <Route path="/login" element={<Login isLogin={this.state.isLogin} setLogin={this.setLogin}/>} />
            <Route path="/addList" element={<AddHouse isLogin={this.state.isLogin} />} />
            <Route path="/*"  element={<Home house={houses.filter((house)=>house.featured==true)}/>}/>
            </Routes>
        </div>
       )
    }
}
export default Main