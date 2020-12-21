import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';



class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =  { list: this.props.list,  
                         showList: this.props.showList }
    
        debugger
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.showForm = this.showForm.bind(this);
        // this.renderAddForm = this.renderAddForm.bind(this);
    }

    

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {

        debugger
        e.preventDefault();

        let newlist = {  title: this.state.title, }
         
      this.props.createList(this.props.boardId, newlist).then(() => this.setState({ list: { title: "" }, showList: "false" }));
      window.location.reload(); 
    }


    handleButtonClick(field) {
         

        this.setState({[field]: !this.state[field]})

        

    }

    showForm(){

        
     return (
            < div className="list-form-container">

                <form onSubmit={this.handleSubmit} className="list-form">
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        className="list-input" placeholder="Enter list title..." />
                    <div className="btn-lst-wrap">
                        <button type="submit" className="list-input" >Add List </button> <FontAwesomeIcon  onClick={(e) => this.handleButtonClick(e.target.value)} value = "showList" icon={faTimes} className='fstylet'/>
                    </div>
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
            <div className="list-index-view">
                    {this.state.showList ? this.showForm() : null}

            </div>

            </>


        )
        
    }

}






export default ListForm;