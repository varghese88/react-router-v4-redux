import {createStore,combineReducers,applyMiddleware} from "redux";
import nameReducer from "./reducers/user-reducer";
import logger from "redux-logger"
import thunk from "redux-thunk"
import {routerReducer as routing} from 'react-router-redux';
import promise from "redux-promise-middleware"
const store = createStore(
    combineReducers({userdetails:nameReducer}, routing),
    {},
    applyMiddleware(logger,thunk,promise())
);

export default store;