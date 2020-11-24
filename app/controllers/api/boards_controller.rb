class Api::BoardsController < ApplicationController

before_action :current_user

def create 

    @board = Board.new(board_params)
    @board.user_id = current_user.id
    
    if @board.save
        render "api/boards/show"
    else 
        render json: @board.errors.full_messages, status: 401   
    end
end 

def show 
@board = Board.find(params[:id])
    render :show 

end 


    
    
    def index
        @boards = Board.all.includes(:user).where(user_id: current_user.id)
        if @boards
            render "api/boards/index"
        else
            render json: @board.errors.full_messages, status: 401
        end 
    end

    
    def update
       
        @board = Board.find(params[:id])
        if @board && @board.update_attributes(board_params)
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

   
def destroy 
        @board = Board.find((params[:id]))
        

    if(@board)
            if @board.user_id != current_user.id
                render json: ['Only the Creator can Destroy '], status: 422
        
            else 
                  @board.destroy
            end
            
    else
            render json: ['No board exist by that name'], status: 418
    
    end 
    
end
  

    





def board_params

    params.require(:board).permit(:title,:description, :user_id)
end   



end 