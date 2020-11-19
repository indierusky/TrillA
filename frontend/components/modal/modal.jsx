import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SigninFormContainer from '../session/signin_container';
import SignupFormContainer from '../session/signup_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <SigninFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-container" onClick={closeModal}>
        <div className="modals" onClick={e => e.stopPropagation()}>
                {component}
        </div>
        </div>
    );
}

const mstp = state => {
    return {
        modal: state.ui.modal
    };
};

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mstp, mdtp)(Modal);
