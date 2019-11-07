class Team < ApplicationRecord
  has_many :players

  validates :name, presence: true
  validates :color, presence: true
  validates :rank, presence: true
end
