class TeamsController < ApplicationController
before_action :current_user 

#   def create
#     #   user = User.find(params[:user][:id])
#     #   Team.create(user_id: user.id,
#     #              board_id: params[:team][:board_id],
#     #             type: params[:team][:type])


#     @team = Team.new(team_params)
#       render "api/teams/show"
#   end

# end

  def create
    user = User.find_by(id: team_params[:user_id])
    if user
      @team = Team.new(team_params)
      if @team.save
        render "api/teams/show"
      else
        render json: @team.errors.full_messages , status 404
      end
    else
      render json: ["This user does not exist."]
    end
  end

  def destroy
    team = Team.find_by(board_id: team_params[:board_id], user_id: team_params[:user_id])
    if team
      if team.destroy
        render json: ["User successfully removed from this board."]
      else
        render json: ["Either user or board number is incorrect."], status: 404
      end
    else
      render json: ["This isn't a member of the board."], status: 404
    end
  end

 








def team_params

params.require(:team).permit(:title, :user_id, :board_id, :type)

end 