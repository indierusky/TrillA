import { connect } from 'react-redux';

import { fetchBoard} from '../../actions/board_actions';

import BoardShow from './board_show';

import {selectBoard} from '../../reducers/selector';

const mapStateToProps = (state, { match }) => {
    
return{
        id: parseInt(match.params.boardId),
        board: selectBoard(state.entities, parseInt(match.params.boardId)),

    
   
  }
};


const mapDispatchToProps = dispatch => ({
    fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardShow);
