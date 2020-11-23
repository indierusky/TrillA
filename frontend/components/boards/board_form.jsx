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

        // const url = `/boards/${this.props.match.params.boardId}`
        // this.props.history.push(url);

        e.preventDefault();
        this.props.createBoard(this.state).then(this.props.closeModal()).then(() => this.props.history.push('/boards'));
    }


    

     


    render() {

        return (
        <div>
            <Modal/>
            <div className="card-form-container">

               

                <form onSubmit={this.handleSubmit} className="card-container-box">

                  <br />  
                                  {this.props.makeBoard}

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

 </div>
        )



    }





}


export default BoardForm;