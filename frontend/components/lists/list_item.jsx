import React from 'react';
import { withRouter } from "react-router-dom";
import CardItemContainer from '../cards/card_item_container';
import CardFormContainer from '../cards/card_form_container';
import CardIndexContainer from '../cards/cards_index_container';
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
list: this.props.list, 

}

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

   this.props.fetchCards(this.props.listId);

  }

// componentDidUpdate(prevProps) {
//     if (prevProps.cards.length !== this.props.cards.length) {
//         this.props.fetchCards(this.props.listId);
//     }
// }





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

                        <span key={`index-${index}`}> {card.task} </span> <button className="del-card-btn" onClick={() => deleteCard(card.id)}>Delete</button>

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

            <span className="archive-list" onClick={ () => deleteList(list.id)}> Remove this list </span>

        </div>

    </section>



    )



    }




render(){


      if (!this.props.list) return null; 
        const {list} = this.props;
        const{deleteList} = this.props;
        const {cards} = this.props;


return (

    

   

        <>

        <div className="list-item-contents">
            <span className="list-item-header" key={list.id}>   {list.title}
             <button onClick={this.showDropdown("listed")} className="title-delete"> <Icon icon={ellipsisH} />  </button>

            </span>
                 {this.state.listed ? this.listMenu() : null}
   
                    
                        <CardIndexContainer listId= {list.id} list={list}  cards={cards}/>
                      
                </div>


            








        </>






     );


};



}

     export default withRouter(ListItem);


  



    





















