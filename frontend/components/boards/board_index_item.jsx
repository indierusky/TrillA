import React from 'react';




const BoardIndexItem = ({board, deleteBoard}) => (

    <li>
        <Link to={`/boards/${board.id}`}>{board.title}</Link>
        <Link to={`/boards/${board.id}/edit`}>Edit</Link>
        <button onClick={() => board.deleteBoard(board.id)}>Delete Board</button>
    </li>






);


export default BoardIndexItem;