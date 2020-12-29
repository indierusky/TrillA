import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createList } from "../../actions/list_actions";
import ListForm from "./list_form";



const mapStateToProps = (state, ownProps) => {

    
    return {
        boardId: parseInt(ownProps.match.params.boardId),
        list: { title: "", },
        showList: ownProps.showList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createList: (boardId, list) => dispatch(createList(boardId, list)),
        fetchCards: listId => dispatch(fetchCards(listId))
    }
}

















export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm));