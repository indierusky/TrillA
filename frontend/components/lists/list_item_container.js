import React from "react";
import { connect } from "react-redux";
import { fetchCards, updateCard, deleteCard } from "../../actions/card_actions";
// import CardItemContainer from "../cards/card_item";
import CardFormContainer from "../cards/card_form_container";
import ListItem from './list_item';
import {listedCards, userLists} from '../../reducers/selector';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => {
  
    return {
     cards:  listedCards(state.entities, ownProps.listId),
     lists:  userLists(state.entities, ownProps.boardId)
    
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateList: (list) => dispatch(updateList(list)),
        fetchCards: (listId) => dispatch(fetchCards(listId)),
        updateCard: (card) => dispatch(updateCard(card)),
        deleteCard: (cardId) => dispatch(deleteCard(cardId)),
       
    };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItem));