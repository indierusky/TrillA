import React from "react";
import { withRouter } from "react-router-dom";


class CardForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.card


        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.createCard(this.props.listId, this.state).then(this.setState({card: {task:""} })).then(this.props.fetchCards(this.props.listId));
        window.location.reload();
    }

    render() {
        return (
            <div className="list-item-contents">
                <form onSubmit={this.handleSubmit} className="cardz-form">
                    <input
                        type="text"
                        value={this.state.task}
                        onChange={this.update("task")}
                        className="list-input" placeholder="Enter a title for this card..." />
                    <button type="submit" className="list-input" >Add Card</button>
                </form>
            </div>
        );
    }
}







export default withRouter(CardForm);