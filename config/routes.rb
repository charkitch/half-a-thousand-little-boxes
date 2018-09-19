Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :frames, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :frames, only: [:create, :show]
  end

  root "static_pages#root"



  # resources :frames, only: :show #TEST ONLY

end
