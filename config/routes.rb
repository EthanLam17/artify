Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users
    resources :songs
    resources :albums
    resources :artists
    resources :playlists
    resources :playlist_song, only: [:index, :create, :destroy]

    resource :session, only: [:create, :destroy]
  end


  root to: 'root#root'

end
