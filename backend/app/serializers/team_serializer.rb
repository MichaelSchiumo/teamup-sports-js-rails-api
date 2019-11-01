class TeamSerializer
  include FastJsonapi::ObjectSerializer

  attributes :id, :name, :color, :rank

  # def initialize(team_object)
  #   @team = team_object
  # end

  # def to_serialized_json
  #   @team.to_json(:include => [:name, :color, :rank]
  #   )
  # end

  has_many :players
end
