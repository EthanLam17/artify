class Api::PlaylistSongController < ApplicationController

  def index 
    @playlist_songs = PlaylistSong.all
    if @playlist_songs
      render :index
    else 
      render {'No Playlists'}
    end
  end

  def create 
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
    else 
      render json: @playlist_song.errors.full_messages
    end
  end

  def destroy
    # @playlist_song = PlaylistSong.find_by( playlist_id: params[:playlist_id], song_id: params[:song_id])
    @playlist_song = PlaylistSong.find(params[:id])
    if @playlist_song
      @playlist_song.destroy
    else 
      render json: @playlist_song.errors.full_messages
    end
  end


  private
  def playlist_song_params
    params.permit(:playlist_id, :song_id)
  end

end
