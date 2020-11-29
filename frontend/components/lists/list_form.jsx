import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =  this.props.list
    

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderAddForm = this.renderAddForm.bind(this);
    }

    

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
         
      this.props.createList(this.props.boardId, this.state).then(() => this.setState({ list: { title: "" }}));
      window.location.reload(); 
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
        return (
            < div className="list-form-container">

                <form onSubmit={this.handleSubmit} className="list-form">
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        className="list-input" placeholder="Enter list title..." />
                    <div className="btn-lst-wrap">
                        <button type="submit" className="list-input" ><FontAwesomeIcon icon={faPlus} /> Add another List</button>
                    </div>
                </form>

              
                

            </div>
        );
    }
}







export default ListForm;