import React from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';



const mapStateToProps = state => {

    return {

        board: {

            title: '',
            description: ''
        },
        

    }


}

const mapDispatchToProps = dispatch => {

    return {

        createBoard: board => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal()),
        makeBoard: (
            <button onClick={() => dispatch(openModal('board'))}>
                Create new board
            </button>
        ),
    }

}













export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);