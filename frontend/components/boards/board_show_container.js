import { connect } from 'react-redux';

import { fetchBoard, deleteBoard} from '../../actions/board_actions';

import BoardShow from './board_show';

import {selectBoard} from '../../reducers/selector';

const mapStateToProps = (state, { match }) => {
    
return{
        id: parseInt(match.params.boardId),
        board: selectBoard(state.entities, parseInt(match.params.boardId)),

    
   
  }
};


const mapDispatchToProps = dispatch => ({
    fetchBoard: id => dispatch(fetchBoard(id)),
    deleteBoard: id => dispatch(deleteBoard(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardShow);
