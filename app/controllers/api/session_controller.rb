class Api::SessionsController < ApplicationController
  def create
 
    @user = User.find_by_credentials(params[:user][:email], 
                                    params[:user][:password])
    if @user.nil?
      render json: ['There isn''t an account for that username'], status: 401
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
