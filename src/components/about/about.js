import React from "react";
import {Route, Redirect} from 'react-router-dom';

export const About = (props) =>(
     <div className="container">
        <div className="form-group">
            <label>Name:{props.match.url}</label>
            
        </div>
        <div className="form-group">
            <label>Age:</label>
        </div>
        <button onClick={()=> props.history.push(`${props.match.url}/test`)}>test</button>
        <button onClick={()=> props.history.push(`${props.match.url}/test2`)}>test2</button>
        <Redirect from={props.match.url} to={`${props.match.url}/test`} />
        <Route path={`${props.match.url}/test`} component={()=> <div>test</div>} />
        <Route path={`${props.match.url}/test2`} component={()=> <div>test2</div>} />
    </div>
)