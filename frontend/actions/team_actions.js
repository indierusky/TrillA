import * as BOARDAPIUtil from '../utils/board_util';
import { RECEIVE_BOARD, REMOVE_BOARD} from './board_actions';


import * as APIUtil from '../util/team_api_util';

// Membership action type constants
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';

// Membership action creators
export const receiveTeam = team => {
  return {
    type: RECEIVE_TEAM,
    team,
  };
};

export const removeTeam = (teamId) => {
  return {
    type: REMOVE_TEAM,
    teamId,
  };
};


// Members action creators
export const createTeam = (team) => (dispatch) => {
  return APIUtil.createTeam(team).then((team) => {
    return dispatch(receiveTeam(team))
  });
};

export const deleteTeam = (teamId) => (dispatch) => {
  return APIUtil.deleteTeam(teamId).then(() => {
    return dispatch(removeTeam(teamId));
  });
};
