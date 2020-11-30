import React from 'react';
import { connect } from 'react-redux';
import { fetchBoard,fetchBoards, updateBoard} from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditBoardForm from './edit_board_form';
import {withRouter} from 'react-router-dom';
import {selectBoard} from '../../reducers/selector';



const mapStateToProps = (state, {match}) => {

    return {
        board: selectBoard(state.entities, parseInt(match.params.boardId)),
        id: parseInt(match.params.boardId),

    

            
        
        // newBoard: {

        //     title: '',
        //     description: ''
        // },


    }


}

const mapDispatchToProps = dispatch => {

    return {
        // createBoard: board => dispatch(createBoard(board)),
        fetchBoard: id => dispatch(fetchBoard(id)),
        fetchBoards: () => dispatch(fetchBoards()),
        updateBoard: board => dispatch(updateBoard(board)),
        closeModal: () => dispatch(closeModal()),
        // editBoard: (
        //     <button onClick={() => dispatch(openModal('edit'))}>
        //         Edit Board
        //     </button>
        // ),
    }

}













export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBoardForm));