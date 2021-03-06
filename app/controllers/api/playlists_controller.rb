class Api::PlaylistsController < ApplicationController

    def new 
        @playlist = Playlist.new
        render :new
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
        else
            render json: @playlist.errors.full_messages
        end
    end

    def index
        @playlists = Playlist.all
        if @playlists
            render :index
        else
            render {'No Playlists'}
        end
    end

    def show
        @playlist = Playlist.find(params[:id])
        if @playlist
            render :show
        else
            render {"No match"}
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        @playlist.playlist_name = params[:playlist_name]
        if @playlist.save
            render '/api/playlists/show'
        end
        # @playlist.update(playlist_params)
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        if @playlist
            @playlist.destroy
        end
    end


    private 
    def playlist_params
        params.permit(:playlist_name, :user_id)
    end

end
