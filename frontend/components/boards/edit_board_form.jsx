import React from 'react';
import Modal from '../modal/modal';
import { withRouter } from 'react-router-dom';




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
            
            
            <div className="edit-board-container">
               
                
               
                <form onSubmit={this.handleSubmit} className="edit-board-form">
                                    <h1 className="edit-heading"> Edit title and/or description </h1>
                    <br />
                                {/* {this.props.editBoard} */}

                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                    <br/>
                    <div className="card">
                        <br />
                        <label> 
                        <input type="text" placeholder="Edit board title" value={this.state.title} onChange={this.update('title')} />
                        </label>
                        <br />
                        <input type="text" placeholder="Add a description" value={this.state.description} onChange={this.update('description')} />
                        <br/>
                        <button className="card-form" type="submit"></button>

                    </div>
                    </form>

            

        

       
       
             
            
    </div>       


        )



    }





}


export default withRouter(EditBoardForm);