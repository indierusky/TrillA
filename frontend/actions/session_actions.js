import {postUser, deleteSession, postSession, demoLogin} from '../utils/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';




const receiveCurrentUser = user => {

return {

    type: RECEIVE_CURRENT_USER,
    user
}
};

const logoutCurrentUser = () => {

    return {

        type: LOGOUT_CURRENT_USER,
        
    }
};


const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
    
})


export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})


export const createNewUser = formUser => dispatch => (

    postUser(formUser).then(user => dispatch(receiveCurrentUser(user)), error => 
        dispatch(receiveErrors(error.responseJSON)) )

);

export const login = formUser => dispatch => (

    postSession(formUser).then(user => dispatch(receiveCurrentUser(user)), error => 
        dispatch(receiveErrors(error.responseJSON)))

);

export const logout = () => dispatch => (

    deleteSession().then(() => dispatch(logoutCurrentUser()), 
                          error =>dispatch(receiveErrors(error.responseJSON)) )

);

export const loginDemo = () => dispatch => (
    demoLogin().then(demoUser => dispatch(receiveCurrentUser(demoUser)),
        errors => dispatch(receiveErrors(errors.responseJSON)) )
    


);

export const clearSessionErrors = () => dispatch (


   dispatch(clearErrors())
)



