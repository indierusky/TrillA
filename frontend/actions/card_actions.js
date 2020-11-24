import * as APIUtil from '../utils/card_util';



export const RECEIVE_ALL_CARDS = 'RECEIVE_ALL_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';


const receiveAllCards = cards => {

    return {

        type: RECEIVE_ALL_CARDS,
        cards
    }

}

const receiveCard = card => {

    return {

        type: RECEIVE_CARD,
        card
    }

}

const removeCard = cardId => {

    return {

        type: REMOVE_CARD,
        boardId
    }

}


export const fetchCards = () => dispatch => (

    APIUtil.fetchCards().then(cards => dispatch(receiveAllCards(cards)))

)

export const fetchCard = cardId => dispatch => (

    APIUtil.fetchCard(cardId).then(card => dispatch(receiveCard(card)))

)

export const deleteCard = cardId => dispatch => (

    APIUtil.deleteCard(cardId).then(() => dispatch(removeCard(card)))

)

export const createCard = card => dispatch => (

    APIUtil.createCard(card).then(card => dispatch(receiveCard(card)))

)

export const updateCard = card => dispatch => (

    APIUtil.updateCard(card).then(card => dispatch(receiveCard(card)))

)


