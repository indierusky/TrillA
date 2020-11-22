class Api::BoardsController < ApplicationController


def create 

    @board = Board.new(board_params)
    
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