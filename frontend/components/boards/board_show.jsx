import React from 'react';
import { Link } from 'react-router-dom';
import ListIndexContainer from './../lists/list_index_container';
import BoardNavContainer from './board_nav_container'; 


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
    if (description) {this.handleDes}
    return (
        <>
        <BoardNavContainer />

        <div className="single-board-show">

        
        <br/>
            <div className="board-show-header" >
                <br/>
                <h2 className="show-header">  Welcome to the {board.title}  Trilla Board!  <Link to={`/boards/${this.props.board.id}/edit`}> ---Click Here to --- Edit Title Or Add a description to this board</Link></h2>
                
                    <ListIndexContainer  />   
                       
            </div>
        </div>
        </>
    );
};


}



export default BoardShow;





