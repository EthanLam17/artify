class Album < ApplicationRecord

    validates :album_title, presence: true
    validates :artist_id, presence: true

    has_one_attached :album_photo

    has_many :songs,
        foreign_key: :album_id,
        class_name: :Song

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :Artist

end
