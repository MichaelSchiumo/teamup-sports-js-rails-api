class Player < ApplicationRecord
  belongs_to :team

  validates :name, presence: true
  validates :hometown, presence: true
  validates :position, presence: true
  validates :number, presence: true
end
