class PlayerSerializer 
    include FastJsonapi::ObjectSerializer

  attributes :team_id, :name, :position, :number, :captain, :hometown

  # def player(player_object)
  #   @player = player_object
  # end
  #
  # def to_serialized_json
  #   @player.to_json(:include => {
  #     :only => [:team_id, :name, :position, :number, :captain, :hometown]
  #     })
  # end

  belongs_to :team
end
