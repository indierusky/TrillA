import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../utils/route_utils';

const BoardShow = ({ board, boardId, fetchBoard }) => {
    

    return (
        <div className="single-board-show">
            <div className="single-board">
                <Link to="/boards">Back Board Index</Link>
                
            
                    {board.title}
            </div>
        </div>
    );
};

export default BoardShow;
