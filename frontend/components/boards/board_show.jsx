import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../utils/route_utils';

class BoardShow extends React.Component{
    

    componentDidMount() {
        this.props.fetchBoard(this.props.id);
    }

    componentDidUpdate(prevProps) {
       
        if (this.props.id !== prevProps.id) {
            this.props.fetchBoard(this.props.id);
        }
    }


render (){
    return (
        <div className="single-board-show">
            <div className="single-board">
                <Link to="/boards">Back Board Index</Link>
                
                           Your New Board 
            
                       {this.props.board.title}
            </div>
        </div>
    );
};


}



export default BoardShow;





