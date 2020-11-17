Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api, defaults: { format: :json } do

  

  resources :lists, :cards, :comments, :users, :boards 

  resource :session, only: [:create, :destroy]

end 
root to: 'root#root'
end



#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#                api_boards GET    /api/boards(.:format)                                                                    api/boards#index {:format=>:json}
#                           POST   /api/boards(.:format)                                                                    api/boards#create {:format=>:json}
#             new_api_board GET    /api/boards/new(.:format)                                                                api/boards#new {:format=>:json}
#            edit_api_board GET    /api/boards/:id/edit(.:format)                                                           api/boards#edit {:format=>:json}
#                 api_board GET    /api/boards/:id(.:format)                                                                api/boards#show {:format=>:json}
#                           PATCH  /api/boards/:id(.:format)                                                                api/boards#update {:format=>:json}
#                           PUT    /api/boards/:id(.:format)                                                                api/boards#update {:format=>:json}
#                           DELETE /api/boards/:id(.:format)                                                                api/boards#destroy {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                      root GET    /                                                                                        root#root