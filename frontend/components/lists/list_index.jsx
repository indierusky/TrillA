import React from "react";
import ListFormContainer from './list_form_container';
import ListItemContainer from './list_item_container';
import { withRouter } from "react-router-dom";


class ListIndex extends React.Component{
constructor(props){
super(props)

this.handleLists = this.handleLists.bind(this);

}

componentDidMount(){

    this.props.fetchLists(this.props.boardId);
}

    // componentDidUpdate(prevProps) {
    //     if (prevProps.lists !== this.props.lists) {
    //         this.props.fetchLists(this.props.boardId);
    //     }
    // }



    handleLists() {

        const { lists } = this.props;
        const { deleteList } = this.props;


        return (

            

               
            <div className="list-index-container">
                        {
                            lists.map(list => (
                                <ListItemContainer
                                    list={list}
                                    deleteList={deleteList}
                                    listId={list.id}
                                    boardId={this.props.boardId}
                                    key={list.id}
                                />
                            ))
                        }
                   
             </div>

        );

    }





    render() {

        
        return (
            <>

                
                <div className="list-index-view">
                    


                    


                      
                        {this.handleLists()}



                   

                    <ListFormContainer />
                    
                </div>
            </>
        );
    }
}


export default withRouter(ListIndex);