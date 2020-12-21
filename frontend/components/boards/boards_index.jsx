import React from 'react';
import BoardIndexItem from './board_index_item';
import BoardNavContainer from "./board_nav_container";
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';





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
    const {editBoard } = this.props;
    
    
    

    return (
        
      <div>
        
           
            <div className="boards-list">

                <span className="board-tile-title">

                </span>
                
                {
                    boards.map(board => (
                        <BoardIndexItem
                            board={board}
                            deleteBoard={deleteBoard}
                            editBoard={editBoard}
                            key={board.id}
                        />
                    ))
                }
                
                
               
            </div>
        </div>
    
);

}

  

    

    render() {
      
   
        return (
       <> 

      <BoardNavContainer />
     <div className="index-view">
            <h3 className="board-head"> <FontAwesomeIcon icon={faUser} />     Personal Boards</h3>
                     <div className="board-tile"  >
                        <span className="board-tile-title" >

                            {this.props.makeBoard}

                        </span>
                      </div>

              
    <div className="index-container">
            
         {/* <div className="board-tile">
         
                    </div> */}
                {this.handleBoards()}

           
              
</div>
 </div>
</>
        );
    }
}


export default withRouter(BoardIndex);