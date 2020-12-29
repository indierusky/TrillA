import React from "react";
import { connect } from "react-redux";
import { fetchCards, updateCard, deleteCard,createCard } from "../../actions/card_actions";

// import CardItemContainer from "../cards/card_item";
import CardFormContainer from "../cards/card_form_container";
import CardItemContainer from '../cards/card_item_container';
import {listedCards, listedCardIds} from '../../reducers/selector';
import { withRouter } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import ellipsisH from '@iconify-icons/fa-solid/ellipsis-h';



class CardIndex extends React.Component {

constructor(props){
super(props)

this.state = {

        cards: this.props.cards,
}

this.handleCards = this.handleCards.bind(this);
this.showDropdown = this.showDropdown.bind(this);


}



componentDidMount(){

this.props.fetchCards(this.props.listId)

}


componentDidUpdate(prevProps) {

        if (this.props.cards.length !== prevProps.cards.length) {

            let cards = this.props.cards;
            this.setState({ cards })
        }
    }

showDropdown(field) {
        return e => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({[field]: !this.state[field]}, () => {
            if (this.state[field] === true) { 
                document.addEventListener('click', this.showDropdown);
             } else {
                document.removeEventListener("click", this.showDropdown) 

            }
            });
        }
    }



handleCards() {
        if (this.state.cards.length === 0) return null;
        const {deleteCard} = this.props;


        const cardz = this.state.cards.map((card, index) => {
            return (
                <CardItemContainer
                    card= {card}
                    id={card.id}
                    deleteCard={deleteCard}
                    key={`card-index-${index}`} 
                    
                />
            );
        });

        return (
        
             <div className="cardz-container">

                            {cardz}
                          
            </div>


        )     
    }


  render() {

   if(!this.props.cards) return null;
   const list = this.props.list;
   


  return (
      <>

      <div className="cardz-container">

                            {this.handleCards()}
                            <CardFormContainer
                            listId={list.id}
                            />

                          
            </div>



    </>


  )









  }














}

const mapStateToProps = (state, ownProps) => {
  
    return {
     listId: ownProps.listId,
     list: ownProps.list,   
     cards:  listedCards(state.entities, ownProps.listId),
     cardIds: listedCardIds(state.entities, ownProps.listId),
    
        
    };

 

};

const mapDispatchToProps = (dispatch) => {
    return {
        
        fetchCards: (listId) => dispatch(fetchCards(listId)),
        updateCard: (card) => dispatch(updateCard(card)),
        deleteCard: (cardId) => dispatch(deleteCard(cardId)),
        createCard: (card) => dispatch(createCard(card)),
       
    };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardIndex));