Rails.application.routes.draw do
  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  post "/register" => "users#create"
  root to: "root#index"
  resources :users
  resources :pokemons
  resources :teams
  resources :pokemon_teams
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
