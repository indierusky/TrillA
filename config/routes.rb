Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api, defaults: { format: :json } do

  
  resources :users do
    resources :boards, only: [:index, :create]
  end 



  resources :lists, :cards, :comments
  resources :boards
  resource :session, only: [:create, :destroy]
  resources :teams, only: [:create, :update, :destroy]
end 
root to: 'root#root'
end


