import { connect } from 'react-redux';

import { fetchBoard} from '../../actions/board_actions';

import BoardShow from './board_show';

const mapStateToProps = (state, { match }) => {
    const boardId = parseInt(match.params.boardId);
    const board = selectBoard(state.entities, match.params.boardId);
    return {
        boardId,
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
