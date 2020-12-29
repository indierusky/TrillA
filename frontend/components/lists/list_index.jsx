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

     showList: false,
     lists: this.props.lists
}

this.handleLists = this.handleLists.bind(this);
this.handleButtonClick = this.handleButtonClick.bind(this);
this.showListForm = this.showListForm.bind(this);


}

componentDidMount(){

    this.props.fetchLists(this.props.boardId);
    this.setState({ showList: false})
}

   


componentDidUpdate(prevProps) {

        // this.props.fetchLists(this.props.boardId);
  //(this.props.listIds[this.props.listIds.length - 1] !== prevProps.listIds[prevProps.listIds.length - 1])
     
        if (prevProps.listIds.length !== this.props.listIds.length) {
            const newLists = this.props.lists;
            this.setState({ lists: newLists})
        }

}

    handleLists() {


        if (this.state.lists.length === 0) return null;

        const { deleteList } = this.props;

        const lists = this.state.lists.map( (list, index) => {


                     return (
                                <ListItemContainer
                                    list={list}
                                    deleteList={deleteList}
                                    listId={list.id}
                                    boardId={this.props.boardId}
                                    key={`list-index-${index}`}
                                />
                            )


        });


        return (

            

               
            <div className="list-index-container">
                        {lists}
                   
             </div>

        );

    }


    handleButtonClick(e) {
         e.preventDefault();

         let field = e.target.value;

        this.setState({[field]: !this.state[field]})
       

         document.getElementById("addlist").remove(); 
       

    }


  showListForm(){
     

  return <ListFormContainer showList={this.state.showList} />


  }



    render() {

        const lists = this.handleLists();


        return (
            <>

                
                <div className="list-index-view">
                    

                    <div className = "list-index-container" >
                                {lists}

                    </div>

                    <button id="addlist" className="list-start" onClick={(e) => this.handleButtonClick(e)} value = "showList"> 
                    <FontAwesomeIcon  icon={faPlus} className='fstylep'/> Add another list </button>

                   {this.state.showList ?  this.showListForm() : null}
                    
                </div>
            </>
        );
    }
}


export default withRouter(ListIndex);