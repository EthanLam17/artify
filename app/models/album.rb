class Album < ApplicationRecord

    validates :album_title, presence: true
    validates :artist_id, presence: true

    has_one_attached :photo

end
