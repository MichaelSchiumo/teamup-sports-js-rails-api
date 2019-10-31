class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :rank

  has_many :players
end
