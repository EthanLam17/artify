class Api::AlbumsController < ApplicationController

    def new
        @album = Album.new
        render :new
    end

    def create
        @album = Album.new(album_params)
        if @album.save 
        else
            render json: @album.errors.full_messages
        end
    end

    def index
        @albums = Album.all
        if @albums
            render :index
        else
            render {'No albums'}
        end
    end

    def show
        @album = Album.find(params[:id])
        if @album
            render :show
        else 
            render {"Album doesn't exist"}
        end
    end




    private 
    def album_params
        params.require(:album).permit(:album_title, :artist_id)
    end



end
