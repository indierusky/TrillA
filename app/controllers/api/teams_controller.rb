class TeamsController < ApplicationController

  def create
      user = User.find(params[:user][:id])
      Team.create(user_id: user.id,
                 board_id: params[:team][:board_id])
      redirect_to user_path(user)
  end

end