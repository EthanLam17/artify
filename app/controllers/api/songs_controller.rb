class Api::SongsController < ApplicationController

    def new 
        @song = Song.new
        render :new
    end

    def create
        @song = Song.new(song_params)
        if @song.save
        else
            render json: @song.errors.full_messages
        end
    end

    def index
        @songs = Song.all
        if @songs
            render :index
        else
            render {'No songs'}
        end
    end

    def show
        @song = Song.find(params[:id])
        if @song
            render :show
        else
            render {"No match"}
        end
    end



    private 
    def song_params
        params.require(:song).permit(:song_title, :album_id)
    end


end
