import * as APIUtil from '../utils/board_util';



export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';


const receiveAllBoards = () => {

return {

    type: RECEIVE_ALL_BOARDS,
    boards
}

}

const receiveBoard = board => {

    return {

        type: RECEIVE_BOARD,
        board
    }

}

const removeBoard = boardId => {

    return {

        type: REMOVE_BOARD,
        boardId
    }

}


export const fetchBoards = () => dispatch => (
 
    APIUtil.fetchBoards().then(boards => dispatch(receiveAllBoards(boards)))

)

export const fetchBoard = boardId => dispatch => (

    APIUtil.fetchBoard(boardId).then(board => dispatch(receiveBoard(board)))

)

export const deleteBoard = boardId => dispatch => (

    APIUtil.deleteBoard(boardId).then( () => dispatch(removeBoard(board)))

)

export const createBoard = board => dispatch => (

    APIUtil.createBoard(board).then(board => dispatch(receiveBoard(board)))

)

export const updateBoard = board => dispatch => (

    APIUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)))

)







