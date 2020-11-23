import React from 'react';
import BoardIndexItem from './board_index_item';
import { Link, withRouter } from 'react-router-dom';
import BoardFormContainer from './board_form_container';




class BoardIndex extends React.Component {

constructor(props){
    
super(props);
this.handleBoards = this.handleBoards.bind(this);


}

handleBoards(){

    
    const {boards} = this.props;
    const { deleteBoard } = this.props;

    if(boards) {
    return (

       
            <ul>
                <li> These are your current boards! </li>
                {
                    boards.map(board => (
                        <BoardIndexItem
                            board={board}
                            deleteBoard={deleteBoard}
                            key={board.id}
                        />
                    ))
                }
            </ul>
       
    
);
}
}

  

    

    render() {
       
       const board = '';
        return (
         

     <div>

        

            
         <div className="board-tile">
           {this.handleBoards()}

         </div>
                
           
         <div className="board-tile"  >
        <span className="board-tile-title" >
                        Create new board    
                 {this.props.makeBoard}    
                   {/* <BoardFormContainer board={board} />      */}
        </span>
        </div>
</div>
        
        );
    }
}


export default withRouter(BoardIndex);