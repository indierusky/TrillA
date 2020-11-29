import React from 'react';
import { withRouter } from "react-router-dom";
import CardItem from '../cards/card_item';
import CardFormContainer from '../cards/card_form_container';

class ListItem extends React.Component{
constructor(props){
super(props);

this.handleCards = this.handleCards.bind(this)

}

componentDidMount(){

this.props.fetchCards(this.props.listId)

}


// componentDidUpdate(prevProps) {
//     if (prevProps.cards !== this.props.cards) {
//         this.props.fetchCards(this.props.listId);
//     }
// }


handleCards() {
        if (this.props.cards.length === 0) return null;
        const {deleteCard} = this.props;
        // const updateCard = this.props;


        const cardz = this.props.cards.map((card, index) => {
            return (
                <CardItem
                    card= {card}
                    id={card.id}
                    deleteCard={deleteCard}
                    key={index}
                    
                />
            );
        });

        return cardz;
    }




render(){


      if (!this.props.lists) return null; 
        const {list} = this.props;
        const{deleteList} = this.props;

return (

    

   

        <>

        <div className="list-item-contents">
            <span className="list-item-header">
             <button className="title-delete" onClick={() => deleteList(list.id)}>X</button>

            </span>

                       {list.title}
                    
                    <div className="cardz-container">

                            {this.handleCards()}
                          
                    </div>
                         <CardFormContainer
                            listId={list.id}
                            />

                      
                </div>


            








        </>






     );


};



}

     export default withRouter(ListItem);


  



    





















