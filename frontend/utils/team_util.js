export const createTeam = (team) => {
  return $.ajax({
    method: 'POST',
    url: '/api/teams',
    data: { team }
  });
};

export const deleteTeam = (teamId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/teams/${teamId}`
    
  });
};

