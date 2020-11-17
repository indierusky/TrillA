import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Signin from './signin';



const mapStateToProps = (state) => {
    return {
    user: {
            email: '',
            password: ''
    }
    }
};


const mapDispatchToProps = dispatch => {

    return {

        login: formUser => dispatch(login(formUser))

    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);