Rails.application.routes.draw do
  resources :books
  # namespace :api do
  #   namespace :v1 do
  #     get 'books/index'
  #     post 'books/create'
  #     get '/show/:id', to: 'books#show'
  #     delete '/destroy/:id', to: 'books#destroy'
  #   end
  # end
  root 'home#index'
  get '/*path' => 'home#index'
end
