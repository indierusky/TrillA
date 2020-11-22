import React from 'react';
import Modal from './../modal/modal';



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

        // const url = `/benches/${this.props.match.params.benchId}`
        // this.props.history.push(url);

        e.preventDefault();
        this.props.createBoard(this.state).then(this.props.closeModal);
    }


    

     


    render() {

        return (

            <div className="card-form-container">

                <Modal />   

                <form onSubmit={this.handleSubmit} className="card-container">

                    <br />
                                  {this.makeBoard}

                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <br/>
                    <div className="card">
                        <br />

                        <input type="text" placeholder="Add board title" value={this.state.title} onChange={this.update('title')} />
                        <br />
                        <button type="submit">Create Board</button>

                    </div>
                </form>

            

        

       
       
             
            <div className="card">
            
                     Create new Board
            
             </div>    
         
    </div>       


        )



    }





}


export default BoardForm;