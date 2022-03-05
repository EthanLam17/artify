class Song < ApplicationRecord

    validates :song_title, presence: true
    validates :album_id, presence: true


    has_one_attached :mp3



end
