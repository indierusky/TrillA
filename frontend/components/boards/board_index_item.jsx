import React from 'react';
import { Link, withRouter } from 'react-router-dom';




const BoardIndexItem = ({board}) => (

    <div className="board-list-item">
       <span className="board-tile-title"> <Link to={`/boards/${board.id}`}>{board.title}</Link></span>
        <Link to={`/boards/${board.id}/edit`}>Edit</Link>
        <img className="tile" src="https://i.ibb.co/wcCwMt4/trillalogoimage.png" />

       
        {/* <button className="board-tile-title" onClick={() => board.deleteBoard(board.id)}>Delete Board</button> */}
    </div>






);


export default withRouter(BoardIndexItem);