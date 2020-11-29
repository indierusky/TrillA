import React from 'react';
import { withRouter } from 'react-router-dom';
import {selectCard} from '../../reducers/selector';
import {connect} from 'react-redux';
import {openModal, closeModal} from '../modal/modal';
import { fetchCard, deleteCard } from '../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {


return {

    card: ownProps.card,
    id: ownProps.id,

}


}

const mapDispatchToProps = dispatch => {

return {

    fetchCard: cardId => dispatch(fetchCard(cardId)),
    deleteCard: cardId => dispatch(deleteCard()),
    // openModal: () => dispatch(openModal('card')),
    // closeModal: () => dispatch(closeModal())

}

}



class CardItem extends React.Component {
constructor(props){
super(props)

this.state = this.props.card;

}




componentDidMount(){

this.props.fetchCard(this.props.id)

}


render() {   

//    const {card} = this.props;
    
return  (

<div className="cardz-container">
    <div className="cardz-item">
        <span className="cardz-title"></span>
                {this.state.task}
        <button onClick={() => this.props.deleteCard(this.state.id)}>X</button>

    </div>


 </div>



);

}

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardItem));