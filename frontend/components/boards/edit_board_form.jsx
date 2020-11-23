import React from 'react';
import Modal from '../modal/modal';



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

        const url = `/boards/${this.props.id}`
        // this.props.history.push(url);

        e.preventDefault();
        this.props.updateBoard(this.state).then(this.props.history.push(url));
    }


    

     


    render() {

        const {board} = this.props;

        if (!board) return null;
        return (

            <div className="card-form-container">

               

                <form onSubmit={this.handleSubmit} className="card-container-box">

                    <br />
                             {/* Edit or  {this.makeBoard} */}

                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                    <br/>
                    <div className="card">
                        <br />

                        <input type="text" placeholder="Edit board title" value={this.state.title} onChange={this.update('title')} />
                        <br />
                        <button className="card-form" type="submit">Edit Board</button>

                    </div>
                </form>

            

        

       
       
             
            
    </div>       


        )



    }





}


export default EditBoardForm;