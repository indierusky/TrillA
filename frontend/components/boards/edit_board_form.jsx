import React from 'react';
import Modal from '../modal/modal';
import { withRouter } from 'react-router-dom';
import BoardNavContainer from './board_nav_container'; 





class EditBoardForm extends React.Component {
    constructor(props) {
        super(props)

        
        this.state = this.props.board;
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        this.props.fetchBoard(this.props.id);
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.id !== prevProps.id) {
            this.props.fetchBoard(this.props.id);
        }
    }

    update(field) {


        return e => this.setState({ [field]: e.currentTarget.value })
    }



    handleSubmit(e){
        
        // const url = `/boards/${this.props.id}`
        // this.props.history.push(url);

        e.preventDefault();
        this.props.updateBoard(this.state).then(this.props.closeModal()).then(this.props.history.push('/boards'));
    }


    

     


    render() {

        

       
        return (
            <>
           <BoardNavContainer /> 

            <div className="login-form-container">
               
                
               
                <form onSubmit={this.handleSubmit} className="login-form">
                                    
                    <br />
                                {/* {this.props.editBoard} */}

                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                    <br/>
                    <div className= "login-form-box">
                         <h3 className="edit-heading">Edit title and/or description </h3>
                         
                        <input className="login-btn" type="text" placeholder="Edit board title" value={this.state.title} onChange={this.update('title')} />
                        
                        
                        <input className="login-btn" type="text" placeholder="Add a description" value={this.state.description} onChange={this.update('description')} />
                        
                        <input className="card-form-submit" type="submit"/>

                    </div>
                    </form>

            

        

       
       
             
            
    </div>       
</>

        )



    }





}


export default withRouter(EditBoardForm);