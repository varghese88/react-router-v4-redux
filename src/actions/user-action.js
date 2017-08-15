import axios from "axios";
import {history} from './../history';

export const setUser = (user)=>{
    return (dispatch)=>{
        dispatch({type:'SET_USER', payload:user});
        history.push('/about');
    }
}

export const getUsers = ()=>{
    return {
       type: 'GET_POST',
       payload:axios.get("https://jsonplaceholder.typicode.com/posts")
    }
    // return (dispatch)=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then((data)=>{
    //             dispatch({
    //                 type:'GET_POSTS_DATA',
    //                 payload:data
    //             });
    //         })
    // }
}
export const setCurrentName = (name)=> {
    return {
        type:'SET_CURRENT_NAME',
        payload:name
    };
}

export const setCurrentAge = (age)=>{
    return {
        type:'SET_CURRENT_AGE',
        payload:age
    };
}