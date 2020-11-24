import React from 'react';
import { connect } from 'react-redux';
import { fetchBoard,updateBoard, createBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditBoardForm from './edit_board_form';
import {withRouter} from 'react-router-dom';



const mapStateToProps = (state, ownProps) => {

    return {

        board: state.entities.boards[ownProps.match.params.boardId],
        id: ownProps.match.params.boardId,
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
        updateBoard: board => dispatch(updateBoard(board)),
        closeModal: () => dispatch(closeModal()),
        editBoard: (
            <button onClick={() => dispatch(openModal('edit'))}>
                Edit Board
            </button>
        ),
    }

}













export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBoardForm));