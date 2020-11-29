class Api::CardsController < ApplicationController

  # def fetchCards
  #   @cards = Card.where(list_id: params[:list_id])
  # end
  
  def index
        @cards = Card.all.includes(:list).where(list_id: params[:list_id])

  end

  def create
    
    @card = Card.new(card_params)
    @card.list_id = params[:list_id]
    
    if @card.save
      render  "api/cards/show"
    else
      render json: @card.errors.full_messages, status: 422
    end
  end


  def show
    @card = Card.find(params[:id])
    if @card.save
      
         render "api/cards/show"
     else 
       render json: @card.errors.full_messages, status: 401
     end 

  end

  def update
    @card = Card.find(params[:id])
    if @card && @card.update_attributes(card_params)
            render "api/cards/index"
    else
      render json: @card.errors.full_messages, status: 401
    end
  end

  def destroy
    @card = Card.find(params[:id])

    if @card.destroy
      render "api/cards/show"
    else
      render json: { message: 'sorry something went wrong' }, status: 401
    end
  end


  def card_params
    params.require(:card).permit(:task, :description, :list_id, :due_date)
  end

end