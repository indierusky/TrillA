import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createCard, fetchCards} from "../../actions/card_actions";
import CardForm from "./card_form";

const mapStateToProps = (state, ownProps) => {
    
    return {
        listId: ownProps.listId,
        card:  {  task:  "",

        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCard: (listId, card) => dispatch(createCard(listId, card)),
        fetchCards: (listId) => dispatch(fetchCards(listId)),
    };
};



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CardForm));
