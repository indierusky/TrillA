import React from 'react';
import BoardIndexItem from './board_index_item';
import { Link, withRouter } from 'react-router-dom';
import BoardFormContainer from './board_form_container';



class BoardIndex extends React.Component {

constructor(props){
    
super(props);
this.handleBoards = this.handleBoards.bind(this);
this.makeNewBoard = this.makeNewBoard.bind(this);

}

handleBoards(){

    
    const {boards} = this.props;
    const { deleteBoard } = this.props;

    if(boards) {
    return (

       
            <ul>
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

  makeNewBoard(){

    return

  }

    

    render() {
       
       
        return (
         

     <div>

        

            
         <div className="board-tile">
           {this.handleBoards()}

         </div>
        
           
         <div className="board-tile"  >
        <span className="board-tile-title" >
                        <BoardFormContainer/>   
                        
        </span>
        </div>
</div>
        
        );
    }
}


export default BoardIndex;