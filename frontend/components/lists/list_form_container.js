import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createList } from "../../actions/list_actions";
import ListForm from "./list_form";



const mapStateToProps = (state, {match}) => {
    return {
        boardId: parseInt(match.params.boardId),
        list: { title: "",

    }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createList: (boardId, list) => dispatch(createList(boardId, list)),
        fetchCards: listId => dispatch(fetchCards(listId))
    }
}

















export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm));