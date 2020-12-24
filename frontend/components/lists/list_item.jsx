import React from 'react';
import { withRouter } from "react-router-dom";
import CardItem from '../cards/card_item';
import CardFormContainer from '../cards/card_form_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
// npm install --save-dev @iconify/react @iconify-icons/fa-solid
import { Icon, InlineIcon } from '@iconify/react';
import ellipsisH from '@iconify-icons/fa-solid/ellipsis-h';


class ListItem extends React.Component{
constructor(props){
super(props);

this.state = {

listed: false,

}

this.handleCards = this.handleCards.bind(this);
this.listMenu = this.listMenu.bind(this);
this.showDropdown = this.showDropdown.bind(this);
this.renderCardForm = this.renderCardForm.bind(this);

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

        return (
        
             <div className="cardz-container">

                            {cardz}
                          
            </div>


        )     
    }


    renderCardForm(){

    const {list} = this.props;

    return (  <CardFormContainer
                listId={list.id}
                     />

    )
    }


    listMenu(){

         const {deleteList} = this.props;
         const {deleteCard} = this.props;
         const {list} = this.props;

         const cardz = this.props.cards.map(  (card, index) => {

             return (

                    <div className="cardz-container" >

                        <span key={index}> {card.task} </span> <button className="del-card-btn" onClick={() => deleteCard(card.id)}>Delete</button>

                    </div>


             )



         })

    return(
    <section className="list-menu">

        <h2 className="list-menu-head">  List Actions <span className="menu-x" onClick={this.showDropdown("listed")}>X</span></h2>
        
        <hr className="linebreak"/> 
        <div className="list-menu-list">

            
           
            <span onClick={() => this.renderCardForm()}> Add a Card </span>

             <hr className="linebreak"/> 

            <span> Current Cards </span> 

                {cardz}
            
             {/* <hr className="linebreak"/>  */}

            <span className="archive-list" onClick={ () => deleteList(list.id)}> Archive this list </span>

        </div>

    </section>



    )



    }




render(){


      if (!this.props.lists) return null; 
        const {list} = this.props;
        const{deleteList} = this.props;

return (

    

   

        <>

        <div className="list-item-contents">
            <span className="list-item-header" key={list.id}>   {list.title}
             <button onClick={this.showDropdown("listed")} className="title-delete"> <Icon icon={ellipsisH} />  </button>

            </span>
                 {this.state.listed ? this.listMenu() : null}
   
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


  



    





















