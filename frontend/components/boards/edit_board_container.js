import React from 'react';
import { connect } from 'react-redux';
import { updateBoard, createBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditBoardForm from './board_form';



const mapStateToProps = (state, ownProps) => {

    return {

        board: state.entities.boards[ownProps.match.params.boardId],
        id: ownProps.match.params.boardId,
        newBoard: {

            title: '',
            description: ''
        },


    }


}

const mapDispatchToProps = dispatch => {

    return {
        createBoard: board => dispatch(createBoard(board)),
        updateBoard: board => dispatch(updateBoard(board)),
        closeModal: () => dispatch(closeModal()),
        makeBoard: (
            <button onClick={() => dispatch(openModal('board'))}>
                Edit Board
            </button>
        ),
    }

}













export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);