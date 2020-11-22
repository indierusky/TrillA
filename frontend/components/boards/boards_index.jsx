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

    
    const boards = this.props.currentUser.boards;
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

    

    render() {
       
       
        return (
         

     <div>

        


         <div>
           {this.handleBoards()}

         </div>
        
                {/*  */}
           
     <div className="card-container">
            <div className="card">
         {/* <Link to="/boards/new"><h4><b>Create new board </b></h4></Link> */}
                        <BoardFormContainer />
  </div>
</div>
</div>
        
        );
    }
}


export default BoardIndex;