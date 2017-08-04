import React from "react";

export class Login extends React.Component{
    render(){
        return (
            <div>
                <div>Username</div>
                <div><input type="text"/></div>
                <div>Password</div>
                <div><input type="password"/></div>
                <div><button onClick={() => this.props.history.push('/')}>login</button></div>
            </div>
        );
    }
}