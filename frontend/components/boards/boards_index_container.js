import React from 'react';
import BoardIndex from './boards_index';
import { fetchBoards, deleteBoard} from '../../actions/board_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import {userBoards } from '../../reducers/selector';





const mapStateToProps = (state) => {


return {

      currentUser: state.session.currentUser,
       boards: userBoards(state.entities, state.session.currentUser.id)
      // board: state.boards[ownProps.match.params.boardId],
      // id: ownProps.match.params.boardId
      //dont think i need board and id inside board index will leave just in case
   
}


}


const mapDispatchToProps = dispatch => {

return {

//  fetchBoards: () => dispatch(fetchBoards()),
//  createBoard: board => dispatch(createBoard(board)),

      makeBoard: (
            <button onClick={() => dispatch(openModal('board'))}>
                  Create new board
            </button>
      ),
      editBoard: (
            <button onClick={() => dispatch(openModal('edit'))}>
                  Edit Board
            </button>
      ),
 deleteBoard: () => dispatch(deleteBoard()), 
 fetchBoards: () => dispatch(fetchBoards())
   




}



}


export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);