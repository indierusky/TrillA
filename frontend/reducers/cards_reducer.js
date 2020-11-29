import { RECEIVE_BOARD } from "../actions/board_actions";
import { RECEIVE_ALL_CARDS, RECEIVE_CARD, REMOVE_CARD } from "../actions/card_actions";


const cardsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {

        case RECEIVE_ALL_CARDS:
            return action.cards;
        case RECEIVE_CARD:
            nextState[action.card.id] = action.card;
            return nextState;
        case RECEIVE_BOARD:
             return action.cards;
        case REMOVE_CARD:
            delete nextState[action.cardId];
            return nextState;
        default:
            return state;
    }
}
  

export default cardsReducer;