import { ReactReduxContext } from "react-redux";
import { combineReducers } from 'redux';
import boardsReducer from "./boards_reducer";
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer

})





export default entitiesReducer;