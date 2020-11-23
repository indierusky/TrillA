import React from 'react';
import BoardIndex from './boards_index';
import { deleteBoard} from '../../actions/board_actions';
import { connect } from 'react-redux';





const mapStateToProps = ({session}) => {
  
return {

      currentUser: session.currentUser,
      boards: session.currentUser.boards
      // board: state.boards[ownProps.match.params.boardId],
      // id: ownProps.match.params.boardId
      //dont think i need board and id inside board index will leave just in case
   
}


}


const mapDispatchToProps = dispatch => {

return {

//  fetchBoards: () => dispatch(fetchBoards()),
//  createBoard: board => dispatch(createBoard(board)),
 deleteBoard: () => dispatch(deleteBoard()), 
   




}



}


export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);