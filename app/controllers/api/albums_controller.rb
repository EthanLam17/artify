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

    def show
        @album = Album.find(aprams[:id])
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
