import React from "react";
import { fetchLists, updateList, deleteList } from "../../actions/list_actions";
import ListIndex from './list_index';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {userLists, userListIds, userCardIds} from './../../reducers/selector';



const mapStateToProps = (state, {match}) => {
   
   
   return{
    lists: userLists(state.entities, parseInt(match.params.boardId)),
     boardId: parseInt(match.params.boardId),
     listIds: userListIds(state.entities, parseInt(match.params.boardId)),
   }
  
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLists: boardId => dispatch(fetchLists(boardId)),
        deleteList: listId => dispatch(deleteList(listId)),
        updateList: list => dispatch(updateList(list)),
    };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));
