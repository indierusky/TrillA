import React from "react";
import ListFormContainer from './list_form_container';
import ListItemContainer from './list_item_container';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';


class ListIndex extends React.Component{
constructor(props){
super(props);

this.state = {

     showList: false
}

this.handleLists = this.handleLists.bind(this);
this.handleButtonClick = this.handleButtonClick.bind(this);
this.showListForm = this.showListForm.bind(this);

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


    handleButtonClick(field) {
         

        this.setState({[field]: !this.state[field]})
        // document.getElementById("addlist").style.visibility = "hidden";
        // document.remove(addlist);

         document.getElementById("addlist").remove();        

    }


  showListForm(){
     

  return <ListFormContainer showList={this.state.showList} />


  }



    render() {

        
        return (
            <>

                
                <div className="list-index-view">
                    

                      
                        {this.handleLists()}

                    <button id="addlist" className="list-start" onClick={(e) => this.handleButtonClick(e.target.value)} value = "showList"> <FontAwesomeIcon  icon={faPlus} className='fstylep'/> Add another list </button>

                   {this.state.showList ?  this.showListForm() : null}
                    
                </div>
            </>
        );
    }
}


export default withRouter(ListIndex);