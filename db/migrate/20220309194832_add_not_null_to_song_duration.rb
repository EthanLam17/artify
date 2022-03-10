class AddNotNullToSongDuration < ActiveRecord::Migration[5.2]
  def change
    change_column_null :songs, :song_duration, false, "0"
  end
end
