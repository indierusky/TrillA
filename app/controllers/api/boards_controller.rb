class Api::BoardsController < ApplicationController

before_action :current_user

def create 

    @board = Board.new(board_params)
    @board.user_id = current_user.id
    
    if @board.save
        render :show  
    else 
        render json: @board.errors.full_messages, status: 401   
    end
end 

def show 
@board = Board.find(params[:id])

end 






def board_params

    params.require(:board).permit(:title)
end   

end 