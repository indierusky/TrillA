import React from "react";
import { connect } from "react-redux";
import { fetchCards, updateCard, deleteCard,createCard } from "../../actions/card_actions";
import { updateList, deleteList } from "../../actions/list_actions";

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
        deleteList: (listId) => dispatch(deleteList(listId)), 
        fetchCards: (listId) => dispatch(fetchCards(listId)),
        updateCard: (card) => dispatch(updateCard(card)),
        deleteCard: (cardId) => dispatch(deleteCard(cardId)),
        createCard: (card) => dispatch(createCard(card)),
       
    };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItem));