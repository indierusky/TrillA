class Api::ListsController < ApplicationController

  before_action :current_user

  def fetchlists
    @lists = List.where(board_id: params[:board_id])
  end

  def index
    # fetchlists()
     @lists = List.all.includes(:board)
     if @lists 
         render "api/lists/index"
     else 
       render json: @lists.errors.full_messages, status: 401
     end 
  end


  def create
    
     @list = List.new(list_params)

    @list.board_id = params[:board_id]

    if @list.save

        fetchlists()
        render "api/lists/show"
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def show
    @list = List.find(params[:id])

    if @list 
         render "api/lists/show"
     else 
       render json: @list.errors.full_messages, status: 401
     end 
  
  end



  def update
    @list = List.find(params[:id])
    if @list
     
        @list.update_attributes(list_params)
        render "api/lists/index"
   
    else
      render json: @list.errors.full_messages, status: 404
    end
  end

  def destroy
    @list = List.find(params[:id])

    if @list.destroy
      render :show
    else
      render json: { message: 'sorry something went wrong' }, status: 422
    end
  end

  

  def list_params
    params.require(:list).permit(:title, :board_id, :due_date)
  end

end