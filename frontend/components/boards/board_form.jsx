import React from 'react';
import Modal from './../modal/modal';
import {withRouter } from 'react-router-dom';




class BoardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {


        return e => this.setState({ [field]: e.currentTarget.value })
    }


    

    handleSubmit(e){

       
       
        e.preventDefault();
        this.props.createBoard(this.state).then(this.props.closeModal()).then(this.props.fetchBoards());
    }



    

     


    render() {

        return (
        
            
            <div className="card-form-container">

               

                <form onSubmit={this.handleSubmit} className="card-container-box">
                      New Board Form 
                  <br />  
                                  {/* {this.props.makeBoard} */}

                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <br/>
                    <div className="card">
                        <br />

                        <input type="text" placeholder="Add board title" value={this.state.title} onChange={this.update('title')} />
                        <br />
                        <button className="card-form" type="submit">Create Board</button>

                    </div>
                </form>

            

        

       
       
             
            
         
    </div>       

 
        )



    }





}


export default BoardForm;