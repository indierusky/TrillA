import {connect} from 'react-redux';
import React from 'react';
import {createNewUser, clearSessionErrors, loginDemo} from '../../actions/session_actions';
import Signup from './signup';
import { openModal, closeModal } from '../../actions/modal_actions'


const mapStateToProps = ({ errors }) => {
    
    return {
       

        errors: errors.session
    }
}




const mapDispatchToProps = dispatch => {

return {

createNewUser: formUser => dispatch(createNewUser(formUser)),
other: (
    <button className="buttonform" onClick={() => dispatch(openModal('login'))}>
           Log In
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    loginDemo: () => dispatch(loginDemo()),


}

}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);