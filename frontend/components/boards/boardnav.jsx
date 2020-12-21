import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell, faUsers, faInfoCircle, faUser} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';





class Boardnav extends React.Component{
constructor(props){
super(props);

this.state ={

        notes: false,
        info: false,
        add: false,
        about: false,
        boards: false
        
}


this.addMenu = this.addMenu.bind(this);
this.showNotesMenu = this.showNotesMenu.bind(this);
this.showDropdown = this.showDropdown.bind(this);
this.showUserInfo = this.showUserInfo.bind(this);
this.renderForm = this.renderForm.bind(this);
this.boardMenu = this.boardMenu.bind(this);
this.infoMenu = this.infoMenu.bind(this);

}



showDropdown(field) {
        return e => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({[field]: !this.state[field]}, () => {
            if (this.state[field] === true) { 
                document.addEventListener('click', this.showDropdown);
             } else {
                document.removeEventListener("click", this.showDropdown) 

            }
            });
        }
    }







componentDidMount() {
        this.props.closeModal();
        this.props.fetchBoards();
    }

componentWillUnmount() {
        this.props.closeModal();
    }
    

addMenu(){


return(
    <section className="add-menu-items">
       <h2 className= "create-menu">  Create <span className="menu-x">  X </span></h2>  
       
    <ul className="add-menu-list">
         <span className="create-bd"> <img className="logo-bs" src="https://i.ibb.co/wcCwMt4/trillalogoimage.png"/>
         <li className="add-menu-item" onClick={this.renderForm('board')}>Create Board
         <p className="add-menu-desc" > A board is made up of cards ordered on lists.  Use it to manage projects, track information
             or organize anything.  </p></li> </span>

     
            <span className="create-bd"> <FontAwesomeIcon icon={faUsers} /> 
            <li className="add-menu-item"   > Create Team
            <p className="add-menu-desc" > A team is a group of boards and people.  Use it to organize your company, side hustle, 
            family and friends  </p></li> </span>

    </ul>
    </section>

)

} 


infoMenu(){

return (

<section className="add-menu">
 <h2 className="author-menu"> About the Developer <span className="menu-x" onClick={this.showDropdown("about")}>  X </span></h2>

 <ul className="add-menu-list"> 

    <li className ="add-menu-item">  Aaron Robinson Full Stack Developer </li>
    <li>
        <a href="https://github.com/indierusky" target="_blank"><FontAwesomeIcon icon={faGithub} />GitHub</a>
    </li>
    <li>
        <a href="https://www.linkedin.com/in/aaron-robinson-258a77201/" target="_blank"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
    </li>
    <li>
        <a href="https://indierusky.github.io/aaronrobinson.github.io/" target="_blank"><FontAwesomeIcon icon={faUser} />My Profile</a>
    </li>

 </ul>



</section>





)





}

boardMenu(){

 
const boardlist = this.props.boards.map((board, index) => {
     
       
       
         <ul className="board-menu-list"> 
         <li className="menu-item" key={index}></li>
          <li> <Link to={`/boards/${board.id}`}> {board.title} </Link></li>
        
        </ul>
       
        
      
    });


     return (
               <ul className= "board-menu-list">
                {boardlist}
               </ul>
         );
}


showUserInfo(){


return(

<section className="add-menu-items" >
 <h2 className="author-menu">  User Profile  <span className="menu-x" onClick={this.showDropdown("info")}>  X </span> </h2>
<ul className="add-menu-list" >
    
<li> Username: {this.props.currentUser.username}</li>

 <li>Email: {this.props.currentUser.email} </li>
  <li className="info-logout" onClick={this.props.logout}>Log Out</li>

</ul> 

</section>


)

}



renderForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }


showNotesMenu(){

return (

    <ul className="notes-list">
        <li> Taco says sorry no notifications at this time! </li>
        <img className="logo-bx" src="https://i.ibb.co/7XFgBYj/pixeltaco.png" alt="pixel taco"/>
        {/* <Link to={`/boards/${board.id}/edit`}>Edit Board</Link> */}

    </ul>
)

}


render(){

return (
   
    <nav className="board-nav">

         {/* <a href='https://trilla.herokuapp.com/#/signup'>
             <img src="https://i.ibb.co/vBsFYTy/trillalogoreal.png" alt="trillalogo" />
         </a> */}
                   
         {/* <button className="nav-buttons-child" onClick={this.props.logout}>Log Out</button> */}
     <div className="boardnav-left">

                  
            <button className="home-lk" onClick={this.showDropdown("about")}><FontAwesomeIcon icon={faInfoCircle} className='fstyle'/></button>
                            {this.state.about ? this.infoMenu() : null}
         
           
           <button className="home-lk"><Link to={"/boards"}><FontAwesomeIcon icon={faHome} className='fstyle'/></Link></button> 
            
            

           <button className="board-button" onClick={this.showDropdown("boards")}>
             {this.state.boards ? this.boardMenu() : null}
                <span className="board-button"> Boards </span>
                

                    <img className="logo-bd" src="https://i.ibb.co/wcCwMt4/trillalogoimage.png"/>
                
                </button>

               
               

                 <input className="search-bar"/>  
        </div>

           

    

    

         <div className="nav-img" >
        <img className="logo-nav" src="https://i.ibb.co/5xZxCC1/trillanewl.png" alt="trillalogo" />

       </div>

    

     <div className="boardnav-mid" className="add-team-board" onClick={this.showDropdown("add")}><button className="home-lk"><FontAwesomeIcon icon={faPlus} className='fstyle'/></button> 
                        {this.state.add ? this.addMenu() : null}

    </div>


    <div className="boardnav-mid" onClick={this.showDropdown("info")}> <button className="home-lk"> <FontAwesomeIcon icon={faCircle} className='fstyle'/></button> 

            

            {this.state.info ? this.showUserInfo() : null}

    </div>

   
    <div className="boardnav-right" className="notifications" onClick={this.showDropdown("notes")}>  <button className="home-lk"><FontAwesomeIcon icon={faBell} className='fstyle'/></button> 
                    {this.state.notes ? this.showNotesMenu() : null}

    </div>










    </nav>

   





);

}

}







export default withRouter(Boardnav);