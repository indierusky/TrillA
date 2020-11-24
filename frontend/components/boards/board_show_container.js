import { connect } from 'react-redux';

import { fetchBoard} from '../../actions/board_actions';

import BoardShow from './board_show';

const mapStateToProps = (state, { match }) => {
    const id = match.params.boardId;
    const board = state.entities.boards[match.params.boardId] || {};

    
    return {
        id,
        board
    };
};

const mapDispatchToProps = dispatch => ({
    fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardShow);
