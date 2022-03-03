class Song < ApplicationRecord

    validates :song_title, presence: true
    validates :album_id, presence: true


    has_one_attached :photo
    has_one_attached :song



end
