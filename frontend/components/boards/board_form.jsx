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
        this.props.createBoard(this.state).then(this.props.closeModal()).then(this.props.fetchBoards()).then(window.location.reload());
       
    }



    

     


    render() {

        return (
        
            
            <div className="card-form-container">

               

                <form onSubmit={this.handleSubmit} className="card-container-box">
                       
                  <br />  
                                  {/* {this.props.makeBoard} */}

                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <br/>
                    <div>
                        <br />

                        <input className="card" type="text" placeholder="Add board title" value={this.state.title} onChange={this.update('title')} />
                        <br />
                        <input className="button-form" type="submit" value="Create Board"/>

                    </div>
                </form>
                <br/>

            {/* <ul className="back-btns" >
                <button className="back-sel1"> </button>
                <button className="back-sel2"> </button>
                <button className="back-sel3"> </button>
                <button className="back-sel4"> </button>
                <button className="back-sel5"> </button>

            </ul> */}

        

       
       
             
            
         
    </div>       

 
        )



    }





}


export default BoardForm;