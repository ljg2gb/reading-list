Rails.application.routes.draw do
  resources :books
  root 'home#index'
  get '/*path' => 'home#index'
end
