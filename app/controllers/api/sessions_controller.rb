class Api::SessionsController < ApplicationController
  
  before_action :current_user, only: [:destroy]
  
  def create
 
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['Incorrect email address and or password'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
   
    logout!
    render json: { message: 'Logging out........' }
  end
end




