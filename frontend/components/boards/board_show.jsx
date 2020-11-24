import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../utils/route_utils';

class BoardShow extends React.Component{

    constructor(props){
        super(props)

        this.handleDes = this.handleDes.bind(this);


    }

    

    componentDidMount() {
        this.props.fetchBoard(this.props.id);
    }

    componentDidUpdate(prevProps) {
       
        if (this.props.id !== prevProps.id) {
            this.props.fetchBoard(this.props.id);
        }
    }

    handleDes(){

        return <h3 className="board-descrip"> {this.board.description} </h3>

    }


render (){

    const {board} = this.props;
    const {description} = board;
    if (description) this.handleDes
    return (

        
        <div className="single-board-show">

        <center><h1><Link to="/boards">Back Board Index</Link></h1></center> 
        <br/>
            <div className="board-show-header" >
                <br/>
                <h2 className="show-header">  Welcome to the {this.props.board.title}  Trilla Board!  <Link to={`/boards/${this.props.board.id}/edit`}> ---Click Here to --- Edit Title Or Add a description to this board</Link></h2>
                
                        <button className="trill-logo-image">
                            Board 
                            <span className="logo-image">
                                    
                                    <img className="tile" src="https://i.ibb.co/wcCwMt4/trillalogoimage.png" />
                            </span>
                        
                        </button>
            
                       
            </div>
        </div>
    );
};


}



export default BoardShow;





