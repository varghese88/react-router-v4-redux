import React, { Component } from 'react';
import {connect} from "react-redux";

class Button extends Component {
    componentWillMount() {
        this.props.handleClickCallBack1(this.props.onClickButton1); 
        this.props.handleClickCallBack2(this.props.onClickButton2); 
    }
    render() {       
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onClickButton1: () => console.log('hello1'),
        onClickButton2: () => console.log('hello2')
    }
}
export default connect(null,mapDispatchToProps)(Button);