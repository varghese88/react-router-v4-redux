import React from "react";
import {NavLink} from "react-router-dom"

export class NavBar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">React-Boom</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/login" >login</NavLink></li>
                        <li><NavLink to="/about" >About</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}