import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBoards, createBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';



const mapStateToProps = state => {

    return {

        board: {

            title: '',
           
        }
        

    }


}

const mapDispatchToProps = dispatch => {

    return {

        createBoard: board => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal()),
        fetchBoards: ()=> dispatch(fetchBoards()),
        makeBoard: (
            <button onClick={() => dispatch(openModal('board'))}>
                Create new board
            </button>
        ),
    }

}













export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardForm));