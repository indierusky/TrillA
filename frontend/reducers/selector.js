import { fetchCards } from "../utils/card_util";
import { fetchLists } from "../utils/list_util";

export const selectBoard = ({ boards}, id) => {

    if (boards[id]) {
        const board = boards[id];
        return board;
    }
    return {};
};
export const asArray = ({ boards }) => (
    Object.keys(boards).map(key => boards[key])
);


export const userBoards = ({boards}, id) => {

        let currentBoards = [];

    Object.values(boards).map( board => {
        if(board.user_id === id){
            currentBoards.push(board);


        }

    })
    return currentBoards;
}


export const userLists = ({ lists }, id) => {

    // fetchLists(id)
    let currentLists = [];


    Object.values(lists).map(list => {
        if (list.board_id === id) {
            currentLists.push(list);


        }

    })

    return currentLists;
}


export const selectCard = ({ cards }, id) => {

    if (cards[id]) {
        const card = cards[id];
        return card;
    }
    return {};
};


export const listedCards = ({ cards }, id) => {
    // fetchCards(id)
    let currentCards = [];

    Object.values(cards).map(card => {
        if (card.list_id === id) {
            currentCards.push(card);


        }

    })
    return currentCards;
}



