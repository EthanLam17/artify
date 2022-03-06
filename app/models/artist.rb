class Artist < ApplicationRecord

    validates :artist_name, presence: true
    validates :genre, presence: true

    has_one_attached :artist_photo

    has_many :albums,
        foreign_key: :artist_id,
        class_name: :Album

end
