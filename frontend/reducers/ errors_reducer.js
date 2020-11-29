import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer';
import cardsErrorsReducer from './cards_errors_reducer';
import listsErrorsReducer from './lists_errors_reducer';
import boardsErrorsReducer from './boards_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    boards: boardsErrorsReducer,
    lists: listsErrorsReducer,
    cards: cardsErrorsReducer
});

export default errorsReducer; 
