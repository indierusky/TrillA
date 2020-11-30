import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardNav from './boardnav';
import {userBoards} from '../../reducers/selector';
import {fetchBoards} from '../../actions/board_actions';

const mapStateToProps = (state) => ({
    modal: state.ui.modal,
    currentUser: state.session.currentUser,
    boards: userBoards(state.entities, state.session.currentUser.id)

})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchBoards: () => dispatch(fetchBoards()),
    makeBoard: (
        <button onClick={() => dispatch(openModal('board'))}>
            Create new board
        </button>
    ),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardNav));