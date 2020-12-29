import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';



class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =  { title: "",  
                         showList: this.props.showList }
    
        
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.showForm = this.showForm.bind(this);
        this.addButtonRef = React.createRef();

        // this.renderAddForm = this.renderAddForm.bind(this);
    }

    

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {

        
        e.preventDefault();

        let newList = {  title: this.state.title }
         
      this.props.createList(this.props.boardId, newList).then(() => this.setState({showList: false})).then(() => this.setState({ title: "" })); 
    }


    handleButtonClick(e) {
         
        e.preventDefault();
         let field = e.target.value;

        this.setState({[field]: !this.state[field]})
        // this.addButtonRef.current.classList.toggle("hidden");     

        window.location.reload();

        

    }

    showForm(){

        
     return (
            < div className="list-form-container">

                <form ref={this.addButtonRef} onSubmit={this.handleSubmit} className="list-form">
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        className="list-input" placeholder="Enter list title..." />
                    {/* <div className="btn-lst-wrap"> */}
                        <button type="submit" className="list-input-btn" disabled={!this.state.title} >Add List </button> <button className="home-lkk" onClick={(e) => this.handleButtonClick(e)} value = "showList" ><FontAwesomeIcon   icon={faTimes} className='fstylet'/> </button>
                    {/* </div> */}
                </form>

              
                

            </div> 
        );




    }

    // renderAddForm(){

    //     return (

    //         <form onSubmit={this.handleSubmit} className="list-form">
    //             <input
    //                 type="text"
    //                 value={this.state.title}
    //                 onChange={this.update("title")}
    //                 className="list-input" placeholder="Enter list title..." />
    //             <div className="btn-lst-wrap">
    //                 <button type="submit" className="list-input"> Add List</button>
    //             </div>
    //         </form>




    //     )

    // }
    

    render() {
        
        
        return(
            <>
            {/* <div className="list-index-view"> */}
                    {this.state.showList ? this.showForm() : null}

            {/* </div> */}

            </>


        )
        
    }

}






export default ListForm;