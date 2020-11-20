import {connect} from 'react-redux';
import React from 'react';
import {createNewUser} from '../../actions/session';
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
    closeModal: () => dispatch(closeModal())

}

}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);