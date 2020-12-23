import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';




class CardForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state =  { card: this.props.card,
                        showCard: false }


        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.showForm = this.showForm.bind(this);
        this.addButtonRef = React.createRef();
        this.addButtonRef2 = React.createRef();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        let newCard = { task: this.state.task} 

        this.props.createCard(this.props.listId, newCard).then(this.setState({card: {task:""}, showCard: "false" })).then(window.location.reload());
    }


    handleButtonClick(e) {
         
        e.preventDefault();
        let field = e.target.value;
        this.setState({[field]: !this.state[field]});
        // document.getElementById("addcard").remove();  
         
      if (this.addButtonRef.current.classList !== "hidden"){

            this.addButtonRef.current.classList.add("hidden")

      }else {

          this.addButtonRef.current.classList.add("button#addcard.card-start");
          this.addButtonRef2.current.classList.add("hidden");

      }
        // window.location.reload();
        

    }

    showForm() {
        return (
            <div className="list-item-contents">
                <form  ref={this.addButtonRef2} onSubmit={this.handleSubmit} className="cardz-form">
                    <input
                        type="text"
                        value={this.state.task}
                        onChange={this.update("task")}
                        className="cardz-input" placeholder="Enter a title for this card..." />
                    <button type="submit" className="card-input" >Add Card</button> <button className="home-lkkk" onClick={(e) => this.handleButtonClick(e)} value = "showCard" ><FontAwesomeIcon   icon={faTimes} className='fstylet'/></button>
                </form>
            </div>
        );


    }

    render() {

        return (

            <>

                    <button id="addcard" ref={this.addButtonRef} className="card-start" onClick={(e) => this.handleButtonClick(e)} value = "showCard"> <FontAwesomeIcon  icon={faPlus} className='fstylep'/> Add a card</button>

                   {this.state.showCard ?  this.showForm() : null}
                    

            </>



        )
        
    }
}







export default withRouter(CardForm);