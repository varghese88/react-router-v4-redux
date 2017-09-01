import React, { Component } from 'react';
import Button from './button';
export class TenderButton extends Component {
    render() {
        return (
            <Button 
                handleClickCallBack1 ={(handler) => this.handleClick1 = handler} 
                handleClickCallBack2 ={(handler) => this.handleClick2 = handler} 
            >
                <div>
                    <button onClick= {this.handleClick1} >hello</button>
                    <button onClick= {this.handleClick2} >hello</button>
               </div>
            </Button>
        );
    }
}