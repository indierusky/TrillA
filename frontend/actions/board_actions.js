import * as APIUtil from '../utils/board_util';



export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_BOARD_ERRORS = "CLEAR_BOARD_ERRORS";



const receiveAllBoards = boards => {

return {

    type: RECEIVE_ALL_BOARDS,
    boards
}

}

const receiveBoard = board => {

    return {

        type: RECEIVE_BOARD,
        board
        // board: input.board,
        // lists: input.lists,
        // cards: input.cards,
    }

}

const removeBoard = boardId => {

    return {

        type: REMOVE_BOARD,
        boardId
    }

}

const receiveErrors = errors => {

    return {

        type: RECEIVE_BOARD_ERRORS,
        errors

    }

}






export const fetchBoards = () => dispatch => {
    
  return  APIUtil.fetchBoards().then(boards => dispatch(receiveAllBoards(boards)),
                              errors => dispatch(receiveErrors(errors.responseJSON)))
    }



export const fetchBoard = boardId => dispatch => {

    return APIUtil.fetchBoard(boardId).then(board => dispatch(receiveBoard(board)),
                                    errors => dispatch(receiveErrors(errors.responseJSON)))
   }



export const deleteBoard = boardId => dispatch => (

    APIUtil.deleteBoard(boardId).then( () => dispatch(removeBoard(boardId)),
                                     errors => dispatch(receiveErrors(errors.responseJSON)))


)

export const createBoard = board => dispatch => (

    APIUtil.createBoard(board).then(board => dispatch(receiveBoard(board)),
                                     errors => dispatch(receiveErrors(errors.responseJSON)))


)

export const updateBoard = board => dispatch => (

    APIUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)),
                                    errors => dispatch(receiveErrors(errors.responseJSON)))


)







