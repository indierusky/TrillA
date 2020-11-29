import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPlus, faBell} from '@fortawesome/free-solid-svg-icons';





class Boardnav extends React.Component{
constructor(props){
super(props);

this.renderMenuForm = this.renderMenuForm.bind(this);
this.addMenu = this.addMenu.bind(this);
// this.notesMenu = this.notesMenu.bind(this);

}




renderMenuForm(field){
    
 if (this.props.modal === field) {
    return () => {
                this.props.closeModal();
            }
        
    return () => this.props.openModal(field)
    }



}




componentDidMount() {
        this.props.closeModal();
    }

componentWillUnmount() {
        this.props.closeModal();
    }
    

addMenu(){


return(
    <ul>
        <li className="add-menu-item" onClick={() => dispatch(openModal('board'))}>Add Board</li>
        {/* <li className="board-list-item" onClick={this.openModal('edit')}> Edit Board </li> */}

    </ul>

)

} 

// notesMenu(){

// return (

//     <ul>
//         <li> no notifications at this time </li>
//         {/* <Link to={`/boards/${board.id}/edit`}>Edit Board</Link> */}

//     </ul>
// )

// }


render(){

return (

    <nav className="board-nav">
       
    <div className="boardnav-left">
          
           <button className="home-lk"><Link className="home-lk" to={"/boards"}><FontAwesomeIcon icon={faHome} /></Link></button> 
            <button className="board-button" onClick={"/boards"}>
                <span className="board-button"> Boards </span>
                <span className="logo-bd">

                    <img className="logo-bd" src="https://i.ibb.co/wcCwMt4/trillalogoimage.png"/>
                </span>

                
                </button>

    </div>

    <div className="boarnav-mid">

            <input className="search-bar"/>  
            <button className="nav-button-logout" onClick={this.props.logout}>Log Out</button>


    </div>

    <div className="boardnav-right" onClick={e => e.stopPropagation()}>

            <button className="add-team-board" onClick={this.addMenu()}><FontAwesomeIcon icon={faPlus}/> </button>
            
            <button className="notifications" onClick={this.renderMenuForm()}><FontAwesomeIcon icon={faBell} /> </button>

    </div>










    </nav>







);

}

}







export default withRouter(Boardnav);