import React from 'react';
import { Link } from 'react-router-dom';
import ListIndexContainer from './../lists/list_index_container';
import BoardNavContainer from './board_nav_container'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faStar} from '@fortawesome/free-solid-svg-icons';



import { ProtectedRoute } from '../../utils/route_utils';

class BoardShow extends React.Component{

    constructor(props){
        super(props)


        this.state  ={

            board: false,
            count: 1,
        }

        this.handleDes = this.handleDes.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.boardMenu = this.boardMenu.bind(this);
        this.changeStar = this.changeStar.bind(this);
        this.handleDelete = this.handleDelete.bind(this);


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
        this.props.fetchBoard(this.props.id);
    }

    componentDidUpdate(prevProps) {
       
        if (this.props.id !== prevProps.id) {
            this.props.fetchBoard(this.props.id);
        }
    }

    handleDelete(){


            return this.props.deleteBoard(this.props.id).then(this.props.history.push("/boards"));


    }

    boardMenu(){

        return (

            <>
               
                       
                 <section className="board-menu-items">      
                <h2 className="author-menu">  Board Menu Options <span className="menu-x" onClick={this.showDropdown("board")}>  X </span> </h2>

                <div className="edit-menu-list">

                   <li> Edit board title or description: <Link to={`/boards/${this.props.board.id}/edit`}>{this.props.board.title}</Link></li>

                    <button onClick={ () => this.handleDelete() }> Delete this Board </button>
                </div>

                </section>
            </>



        )



    }

    changeStar(){
    
    let property = document.getElementById("star");
    if (this.state.count == 1){
        property.style.color = "#FFFF00"
        this.setState({count: 0})       
    }
    else{
        property.style.color = "#FFFFFF"
         this.setState({count: 1})  
    }

}

    handleDes(){

        return <h3 className="board-descrip"> {this.board.description} </h3>

    }


render (){

    const {board} = this.props;
    const {description} = board;
    if (description) {this.handleDes}
    return (
        <>
        <BoardNavContainer />

        <div className="single-board-show">

        
        <br/>
            <div className="board-show-header" >
                <br/>
                        
                

                <button className="board-button2" onClick={this.showDropdown("board")}>
                            <FontAwesomeIcon icon={faAngleDown} /> 

                <span className="board-button"> Board </span>
                

                    <img className="logo-bd" src="https://i.ibb.co/wcCwMt4/trillalogoimage.png"/>

                    
                </button>
                  {this.state.board ? this.boardMenu() : null}
                
                   <Link className="edit-lnk" to={`/boards/${this.props.board.id}/edit`}>{board.title}</Link>
                
                    <button id="star" onClick={() => this.changeStar()} className="home-lk"><FontAwesomeIcon icon={faStar} className='fstyle'/></button> 
                       
            </div>

             <ListIndexContainer  />   
        </div>
        </>
    );
};


}



export default BoardShow;





