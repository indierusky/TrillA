Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api, defaults: { format: :json } do

  
  resources :users 

  resources :boards do 
    resources :lists, only: [:index, :create]
   end 

  resources :lists, except: [:index, :create] do 
        resources :cards,  only: [:index, :create] 
  end 

  resources :cards 
      
  resources :comments
  
  resource :session, only: [:create, :destroy]
  resources :teams, only: [:create, :update, :destroy]
end 
root to: 'root#root'
end


