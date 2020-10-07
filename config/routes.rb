Rails.application.routes.draw do
  resources :books
  resources :readers
  root 'home#index'
  get '/*path' => 'home#index'
end
