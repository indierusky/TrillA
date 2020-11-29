import * as APIUtil from '../utils/list_util';



export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const CLEAR_LIST_ERRORS = "CLEAR_LIST_ERRORS";



const receiveAllLists = lists => {

    return {

        type: RECEIVE_ALL_LISTS,
        lists
    }

}

const receiveList = list => {

    return {

        type: RECEIVE_LIST,
        list
    }

}

const removeList = listId => {

    return {

        type: REMOVE_LIST,
        listId
    }

}

const receiveErrors = errors => {

    return{

        type: RECEIVE_LIST_ERRORS,
        errors

    }

}


export const fetchLists = (boardId) => dispatch => (

    APIUtil.fetchLists(boardId).then(lists => dispatch(receiveAllLists(lists)),
                                      errors => dispatch(receiveErrors(errors.responseJSON)) )

)

export const fetchList = listId => dispatch => (

    APIUtil.fetchList(lisId).then(list => dispatch(receiveList(list)))

)

export const deleteList = listId => dispatch => (

    APIUtil.deleteList(listId).then(() => dispatch(removeList(listId)),
                                           errors => dispatch(receiveErrors(errors.responseJSON)) )

)

export const createList = (boardId,list) => dispatch => (

    APIUtil.createList(boardId, list).then(list => dispatch(receiveList(list)), 
                                           errors =>  dispatch(receiveErrors(errors.responseJSON)) )

)

export const updateList = list => dispatch => (

    APIUtil.updateList(list).then(list => dispatch(receiveList(list)), 
                                   errors => dispatch(receiveErrors(errors.responseJSON)) )

)


