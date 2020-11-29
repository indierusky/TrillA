import * as APIUtil from '../utils/card_util';



export const RECEIVE_ALL_CARDS = 'RECEIVE_ALL_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const CLEAR_CARD_ERRORS = "CLEAR_CARD_ERRORS";



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
        cardId
    }

}

const receiveErrors = errors => {

    return {

        type: RECEIVE_CARD_ERRORS,
        errors
    }

}


export const fetchCards = listId => dispatch => (

    APIUtil.fetchCards(listId).then(cards => dispatch(receiveAllCards(cards)),
                              errors => dispatch(receiveErrors(errors.responseJSON)) )

)

export const fetchCard = cardId => dispatch => (

    APIUtil.fetchCard(cardId).then(card => dispatch(receiveCard(card)),
                                errors => dispatch(receiveErrors(errors.responseJSON)) )

)

export const deleteCard = cardId => dispatch => (

    APIUtil.deleteCard(cardId).then(() => dispatch(removeCard(cardId)),
                                    errors => dispatch(receiveErrors(errors.responseJSON)) )

)

export const createCard = (listId,card) => dispatch => (

    APIUtil.createCard(listId,card).then(card => dispatch(receiveCard(card)),
                                  errors => dispatch(receiveErrors(errors.responseJSON)) )

)

export const updateCard = card => dispatch => (

    APIUtil.updateCard(card).then(card => dispatch(receiveCard(card)),
                                  errors => dispatch(receiveErrors(errors.responseJSON)) )

)


