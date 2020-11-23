import * as APIUtil from '../utils/board_util';
import { RECEIVE_BOARD, REMOVE_BOARD} from './board_actions';




export const ADD_MEMBER = 'ADD_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';


const receiveMember = user => {

return {

    type: ADD_MEMBER,
    user
}


}

const removeMember = () => {

return {

    type: REMOVE_MEMBER, 

}


}


