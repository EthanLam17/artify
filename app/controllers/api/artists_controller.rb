class Api::ArtistsController < ApplicationController

    def new 
        @artist = Artist.new
        render :new
    end

    def create
        @artist = Artist.new(artist_params)
        if @artist.save
        else
            render json: @artist.errors.full_messages
        end
    end

    def index
        @artists = Artist.all
        if @artists
            render :index
        else
            render {'No artists'}
        end
    end

    def show
        @artist = Artist.find(params[:id])
        if @artist
            render :show
        else
            render {"Artist doesn't exist"}
        end
    end

    
    private
    def artist_params
        params.require(:artist).permit(:artist_name, :genre)
    end


end
