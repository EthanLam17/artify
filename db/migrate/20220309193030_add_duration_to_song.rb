class AddDurationToSong < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :song_duration, :string
  end
end
