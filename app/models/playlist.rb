class Playlist < ApplicationRecord

  validates :playlist_name, presence: true
  validates :user_id, presence: true


  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User




end
