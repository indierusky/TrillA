import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import { logout, loginDemo} from '../../actions/session';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    loginDemo: () => dispatch(loginDemo())
});



export default connect(mapStateToProps, mapDispatchToProps)(Nav);
