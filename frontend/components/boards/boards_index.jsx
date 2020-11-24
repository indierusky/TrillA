import React from 'react';
import BoardIndexItem from './board_index_item';
import { Link, withRouter } from 'react-router-dom';
import BoardFormContainer from './board_form_container';




class BoardIndex extends React.Component {

constructor(props){
    
super(props);
this.handleBoards = this.handleBoards.bind(this);


}

componentDidMount(){

this.props.fetchBoards();

}

handleBoards(){

    const {boards} = this.props;
    const { deleteBoard } = this.props;
    

    

    return (

      <div>
         <center> <h1 className="boardindex-title"> Your Trilla Boards! </h1></center>
            <div className="board-tile">
                <span className="board-tile-title">  
                {
                    boards.map(board => (
                        <BoardIndexItem
                            board={board}
                            deleteBoard={deleteBoard}
                            key={board.id}
                        />
                    ))
                }
                </span>
            </div>
        </div>
    
);

}

  

    

    render() {
      
   
        return (
         

     <div>

                {this.handleBoards()}


            
         <div className="board-tile">
         
         </div>
                
           
         <div className="board-tile"  >
        <span className="board-tile-title" >
                         
                 {this.props.makeBoard}    
                 
        </span>
        </div>
</div>
        
        );
    }
}


export default withRouter(BoardIndex);