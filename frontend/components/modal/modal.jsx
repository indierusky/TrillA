import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BoardFormContainer from './../boards/board_form_container';
import EditBoardContainer from './../boards/edit_board_container';


function Modal({ modal, closeModal }) {
   
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'board':
            component = <BoardFormContainer />;
            break;
        case 'edit':
            component = <EditBoardContainer />; 
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
