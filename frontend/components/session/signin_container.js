import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Signin from './signin';
import React  from 'react';
import {openModal, closeModal} from '../../actions/modal_actions'


const mapStateToProps = ({errors}) => {
    return {
    user: {
            email: '',
            password: ''
    },
    
    errors:  errors.session  
    
    
    }
}


const mapDispatchToProps = dispatch => {

    return {

        login: formUser => dispatch(login(formUser)),
        other: (
            <button className="buttonform" onClick={() => dispatch(openModal('signup'))}>
                Sign Up
            </button>
        ),
        closeModal: () => dispatch(closeModal())

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);