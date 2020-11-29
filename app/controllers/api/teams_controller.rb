class TeamsController < ApplicationController

  def create
    #   user = User.find(params[:user][:id])
    #   Team.create(user_id: user.id,
    #              board_id: params[:team][:board_id],
    #             type: params[:team][:type])


    @team = Team.new(team_params)
      render "api/teams/show"
  end

end











def team_params

params.require(:team).permit(:title, :user_id, :board_id, :type)

end 