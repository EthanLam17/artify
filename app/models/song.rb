class Song < ApplicationRecord

    validates :song_title, presence: true
    validates :album_id, presence: true


    has_one_attached :mp3

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album


    has_one :artist,
        through: :album, 
        source: :artist

end
