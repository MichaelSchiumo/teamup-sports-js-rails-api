class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :rank

  def initialize(team_object)
    @team = team_object
  end

  has_many :players
end
