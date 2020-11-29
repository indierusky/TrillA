import { ReactReduxContext } from "react-redux";
import { combineReducers } from 'redux';
import boardsReducer from "./boards_reducer";
import cardsReducer from "./cards_reducer";
import listsReducer from "./lists_reducer";
import usersReducer from './users_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer,
    cards: cardsReducer,
    lists: listsReducer

})





export default entitiesReducer;